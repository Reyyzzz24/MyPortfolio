import { useState } from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
    const [theme, setTheme] = useDarkMode();
    const isDark = theme === 'dark';

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // State ini sekarang digunakan di bagian mobile bawah
    const [isResumeOpenMobile, setIsResumeOpenMobile] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <header className="top-0 z-50 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-3xl font-bold tracking-tighter">
                    <a href="#/" className="text-blue-600 dark:text-blue-400">RY</a>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex items-center space-x-8 font-medium">
                        <li><a href="#services" className="hover:text-blue-600 transition dark:text-gray-200">Services</a></li>
                        <li><a href="#portofolios" className="hover:text-blue-600 transition dark:text-gray-200">Portofolio</a></li>
                        <li><a href="#skills" className="hover:text-blue-600 transition dark:text-gray-200">Skills</a></li>
                        <li><a href="#contact" className="hover:text-blue-600 transition dark:text-gray-200">Contact</a></li>

                        {/* Theme Toggle Desktop */}
                        <li>
                            <button
                                onClick={toggleTheme}
                                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition overflow-hidden w-10 h-10 flex items-center justify-center"
                            >
                                {/* Sun Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-all duration-500 transform ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                                </svg>
                                {/* Moon Icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className={`absolute w-5 h-5 transition-all duration-500 transform ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'} text-yellow-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            </button>
                        </li>

                        {/* Resume Dropdown Desktop */}
                        <li className="relative group">
                            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                                Resume
                            </button>
                            {/* Perubahan: Tambahkan pembungkus transparan agar kursor tidak 'terputus' */}
                            <div className="absolute right-0 top-full w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-xl overflow-hidden">
                                    <a href="/resume-id.pdf" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">
                                        Resume Indonesia
                                    </a>
                                    <a href="/resume-en.pdf" target="_blank" rel="noreferrer" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-200">
                                        Resume English
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>

                {/* Burger Button Mobile */}
                <button
                    onClick={toggleMenu}
                    className="fixed top-4 right-4 md:hidden flex flex-col space-y-1.5 cursor-pointer z-[70] p-3"
                >
                    <div className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-gray-800 dark:bg-gray-100 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                onClick={toggleMenu}
                className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-[50] md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            ></div>

            {/* Mobile Nav Sidebar */}
            <div className={`fixed top-0 right-0 w-72 h-screen bg-white dark:bg-gray-900 z-[60] flex flex-col p-8 pt-24 space-y-6 text-xl font-medium shadow-2xl transition-all duration-500 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <a href="#services" onClick={toggleMenu} className="hover:text-blue-600 transition border-b dark:border-gray-800 dark:text-gray-200 pb-2">Services</a>
                <a href="#portofolios" onClick={toggleMenu} className="hover:text-blue-600 transition border-b dark:border-gray-800 dark:text-gray-200 pb-2">Portofolio</a>
                <a href="#skills" onClick={toggleMenu} className="hover:text-blue-600 transition border-b dark:border-gray-800 dark:text-gray-200 pb-2">Skills</a>
                <a href="#contact" onClick={toggleMenu} className="hover:text-blue-600 transition border-b dark:border-gray-800 dark:text-gray-200 pb-2">Contact</a>

                {/* Documents Section Mobile */}
                <div className="pt-2">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Documents</p>
                    <div className="relative">
                        <button
                            onClick={() => setIsResumeOpenMobile(!isResumeOpenMobile)}
                            className="w-full bg-blue-600 text-white p-4 rounded-xl flex items-center justify-between text-base transition-all duration-300"
                        >
                            <span>Download Resume</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 transition-transform duration-300 ${isResumeOpenMobile ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className={`flex flex-col mt-2 transition-all duration-500 ease-in-out bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden ${isResumeOpenMobile ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <a href="/resume-id.pdf" target="_blank" rel="noreferrer" className="block px-4 py-4 text-base hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-gray-200 border-b dark:border-gray-700">Resume Indonesia</a>
                            <a href="/resume-en.pdf" target="_blank" rel="noreferrer" className="block px-4 py-4 text-base hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-gray-200">Resume English</a>
                        </div>
                    </div>
                </div>

                {/* Settings Section Mobile */}
                <div className="pt-4">
                    <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Settings</p>
                    <button
                        onClick={toggleTheme}
                        className="flex items-center space-x-3 p-4 w-full rounded-xl bg-gray-100 dark:bg-gray-800 transition-colors"
                    >
                        <div className="relative w-6 h-6 flex-shrink-0">
                            {isDark ? (
                                <svg className="text-yellow-400 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" /></svg>
                            ) : (
                                <svg className="text-gray-700 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                            )}
                        </div>
                        <span className="text-sm font-medium dark:text-gray-200">Switch to {isDark ? 'Light' : 'Dark'} Mode</span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;