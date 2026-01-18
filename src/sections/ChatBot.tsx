import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
    role: 'bot' | 'user';
    text: string;
}

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    
    // Inisialisasi messages dari LocalStorage
    const [messages, setMessages] = useState<Message[]>(() => {
        const saved = localStorage.getItem('reva_chat_history');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Gagal memuat history chat:", e);
                return [{ role: 'bot', text: 'Halo! Ada yang bisa saya bantu terkait portfolio Reva?' }];
            }
        }
        return [{ role: 'bot', text: 'Halo! Ada yang bisa saya bantu terkait portfolio Reva?' }];
    });

    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_KEY;

    // Effect untuk Auto Scroll dan Simpan ke LocalStorage
    useEffect(() => {
        // Simpan ke local storage setiap kali ada perubahan pesan
        localStorage.setItem('reva_chat_history', JSON.stringify(messages));

        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages, isOpen, isTyping]);

    const handleSend = async () => {
        if (!input.trim() || isTyping) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        const currentInput = input;
        setInput('');
        setIsTyping(true);

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const result = await model.generateContent(currentInput);
            const response = await result.response;
            const botText = response.text();

            setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
        } catch (error) {
            console.error("ChatBot Error:", error);
            setMessages((prev) => [...prev, { 
                role: 'bot', 
                text: "Maaf, kuota harian saya sedang penuh. Silakan coba lagi nanti atau hubungi Reva via email." 
            }]);
        } finally {
            setIsTyping(false);
        }
    };

    // Fungsi tambahan untuk menghapus chat jika diinginkan
    const clearChat = () => {
        const initialMsg: Message[] = [{ role: 'bot', text: 'Halo! Ada yang bisa saya bantu terkait portfolio Reva?' }];
        setMessages(initialMsg);
        localStorage.removeItem('reva_chat_history');
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] font-sans flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[calc(100vw-2rem)] md:w-96 h-[70vh] md:h-[500px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-blue-600 p-5 text-white flex justify-between items-center shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">R</div>
                                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></span>
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold">Reva Assistant</h3>
                                    <p className="text-[10px] opacity-80">Aktif sekarang</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={clearChat} title="Hapus Chat" className="hover:bg-white/20 rounded-full p-2 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={() => setIsOpen(false)} 
                                    className="hover:bg-white/20 rounded-full p-2 transition-colors active:scale-90"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900/50 scrollbar-thin">
                            {messages.map((msg, index) => (
                                <motion.div 
                                    initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={index} 
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                                        msg.role === 'user' 
                                        ? 'bg-blue-600 text-white rounded-tr-none' 
                                        : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none'
                                    }`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isTyping && (
                                <div className="flex justify-start">
                                    <div className="bg-white dark:bg-gray-700 p-3 rounded-2xl shadow-sm">
                                        <div className="flex gap-1">
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></span>
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
                            <form 
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="flex gap-2 bg-gray-100 dark:bg-gray-700 p-1.5 rounded-2xl items-center"
                            >
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder={isTyping ? "Memproses..." : "Tanya sesuatu..."}
                                    disabled={isTyping}
                                    className="flex-1 bg-transparent border-none focus:ring-0 px-3 py-2 text-sm dark:text-white outline-none"
                                />
                                <button 
                                    type="submit"
                                    disabled={isTyping}
                                    className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 transition-all active:scale-90 shadow-md disabled:opacity-50"
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

            {/* Floating Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-colors ${
                    isOpen ? 'bg-white dark:bg-gray-700 text-gray-600 dark:text-white' : 'bg-blue-600 text-white'
                }`}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></span>
                    </div>
                )}
            </motion.button>
        </div>
    );
};

export default ChatBot;