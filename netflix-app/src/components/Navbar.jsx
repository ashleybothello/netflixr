import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Search, Bell, User, Sun, Moon, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-400 ease-in-out px-4 md:px-12 py-4 flex items-center justify-between ${scrolled ? 'bg-netflix-dark/95' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
            <div className="flex items-center gap-8">
                {/* Logo */}
                <Link to="/" className="text-netflix-red font-bold text-2xl md:text-4xl">
                    <svg viewBox="0 0 111 30" className="w-24 md:w-32 fill-current">
                        <path d="M105.06 0l-7.5 21.52L90.09 0h-9.06v24.2L74.67 0H65.8l-8.36 24.13V0H48.5v30h8.4l1.37-3.95H69.3l1.37 3.95h17.68V10.05l7.7 19.95h5.68l7.7-19.95V30H111V0h-5.94zm-41.73 20.37L66.7 8.67l3.37 11.7h-6.74z M18.24.002L10.74 30h8.9l1.37-3.96h11.02L33.4 30h8.9L34.8.002H18.24zm1.09 20.37l3.36-11.7 3.37 11.7h-6.73z M0 0v30h8.95V18.14L4.48 0H0z" />
                    </svg>
                </Link>
                {/* Nav Links */}
                <div className="hidden md:flex gap-6 text-sm text-gray-300">
                    <Link to="/" className="font-bold text-white hover:text-gray-300 transition">Home</Link>
                    <Link to="#" className="hover:text-gray-300 transition">TV Shows</Link>
                    <Link to="#" className="hover:text-gray-300 transition">Movies</Link>
                    <Link to="#" className="hover:text-gray-300 transition">New & Popular</Link>
                    <Link to="#" className="hover:text-gray-300 transition">My List</Link>
                </div>
            </div>

            <div className="flex items-center gap-4 text-white">
                <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />

                {/* Language Switcher */}
                <div className="relative group">
                    <button className="flex items-center gap-1 text-sm hover:text-gray-300">
                        {language === 'en' ? 'English' : 'हिन्दी'} <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute right-0 top-full mt-2 w-24 bg-black/90 border border-gray-700 rounded shadow-lg hidden group-hover:block">
                        <button onClick={() => setLanguage('en')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800">English</button>
                        <button onClick={() => setLanguage('hi')} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-800">हिन्दी</button>
                    </div>
                </div>

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className="hover:text-gray-300 transition">
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <Bell className="w-5 h-5 cursor-pointer hover:text-gray-300" />

                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-8 h-8 rounded bg-netflix-red flex items-center justify-center text-sm font-bold">
                        <User className="w-5 h-5" />
                    </div>
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
