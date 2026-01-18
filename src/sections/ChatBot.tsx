import { useState, useEffect, useRef, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
    role: 'bot' | 'user';
    text: string;
}

// OPTIMASI 1: Hilangkan Framer Motion dari ChatBubble jika pesan sudah banyak
// Gunakan Tailwind standar untuk pesan lama agar tidak membebani CPU/GPU
const ChatBubble = memo(({ msg, isNew }: { msg: Message; isNew: boolean }) => {
    const bubbleClass = `max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
        msg.role === 'user'
            ? 'bg-blue-600 text-white rounded-tr-none'
            : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none'
    }`;

    return (
        <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {isNew ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={bubbleClass}
                >
                    {msg.text}
                </motion.div>
            ) : (
                <div className={bubbleClass}>{msg.text}</div>
            )}
        </div>
    );
});

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);
    
    // API Key & Model di luar state agar tidak re-instantiate
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

    const [messages, setMessages] = useState<Message[]>(() => {
        const saved = localStorage.getItem('reva_chat_history');
        if (saved) {
            try { return JSON.parse(saved); } catch { return []; }
        }
        return [{ role: 'bot', text: 'Halo! Ada yang bisa saya bantu terkait portfolio Reva?' }];
    });

    // OPTIMASI 2: Gunakan useCallback untuk handleSend agar tidak dibuat ulang tiap render
    const handleSend = useCallback(async () => {
        if (!input.trim() || isTyping) return;

        const currentInput = input;
        setInput(''); // Langsung kosongkan input (UI lebih responsif)
        
        setMessages((prev) => [...prev, { role: 'user', text: currentInput }]);
        setIsTyping(true);

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            const result = await model.generateContent(currentInput);
            const botText = result.response.text();
            setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
        } catch (error) {
            setMessages((prev) => [...prev, { role: 'bot', text: "Maaf, koneksi terputus. Coba lagi nanti." }]);
        } finally {
            setIsTyping(false);
        }
    }, [input, isTyping, GEMINI_API_KEY]);

    // OPTIMASI 3: Passive Effect untuk scroll (lebih ringan untuk browser)
    useEffect(() => {
        localStorage.setItem('reva_chat_history', JSON.stringify(messages));
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const clearChat = () => {
        setMessages([{ role: 'bot', text: 'Halo! Ada yang bisa saya bantu terkait portfolio Reva?' }]);
        localStorage.removeItem('reva_chat_history');
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] font-sans flex flex-col items-end">
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        // OPTIMASI 4: will-change memberitahu browser untuk bersiap melakukan animasi
                        className="will-change-transform mb-4 w-[calc(100vw-2rem)] md:w-96 h-[70vh] md:h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-5 text-white flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">R</div>
                                <div>
                                    <h3 className="text-sm font-bold">Assistant</h3>
                                    <p className="text-[10px] opacity-80">Online</p>
                                </div>
                            </div>
                            <div className="flex gap-1">
                                <button onClick={clearChat} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                </button>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                </button>
                            </div>
                        </div>

                        {/* Messages Area - OPTIMASI 5: contains-paint untuk isolasi rendering */}
                        <div 
                            ref={scrollRef} 
                            style={{ contain: 'content' }}
                            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50"
                        >
                            {messages.map((msg, index) => (
                                <ChatBubble 
                                    key={index} 
                                    msg={msg} 
                                    isNew={index === messages.length - 1} 
                                />
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl animate-pulse flex gap-1">
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700">
                            <form 
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2 bg-gray-100 dark:bg-gray-700 p-1.5 rounded-2xl"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Tanya sesuatu..."
                                    disabled={isTyping}
                                    className="flex-1 bg-transparent border-none focus:ring-0 px-3 py-2 text-sm dark:text-white outline-none disabled:opacity-50"
                                />
                                <button 
                                    type="submit"
                                    disabled={isTyping || !input.trim()}
                                    className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 disabled:grayscale transition-all shadow-md"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center ${
                    isOpen ? 'bg-white text-gray-600' : 'bg-blue-600 text-white'
                }`}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                )}
            </motion.button>
        </div>
    );
};

export default ChatBot;