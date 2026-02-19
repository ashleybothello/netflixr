import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { t } = useLanguage();

    const handleLogin = (e) => {
        e.preventDefault();
        // Dummy login logic
        console.log("Logged in with", email, password);
        navigate('/');
    };

    return (
        <div className="relative min-h-screen w-full bg-black md:bg-transparent">
            {/* Background Image */}
            <div
                className="hidden md:block absolute inset-0 bg-cover bg-center opacity-50"
                style={{ backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg)' }}
            />
            <div className="hidden md:block absolute inset-0 bg-black/50" />

            {/* Header */}
            <div className="absolute top-0 left-0 p-6 z-10 w-full flex justify-between items-center">
                <Link to="/">
                    <svg viewBox="0 0 111 30" className="w-32 md:w-44 fill-[#e50914]">
                        <path d="M105.06 0l-7.5 21.52L90.09 0h-9.06v24.2L74.67 0H65.8l-8.36 24.13V0H48.5v30h8.4l1.37-3.95H69.3l1.37 3.95h17.68V10.05l7.7 19.95h5.68l7.7-19.95V30H111V0h-5.94zm-41.73 20.37L66.7 8.67l3.37 11.7h-6.74z M18.24.002L10.74 30h8.9l1.37-3.96h11.02L33.4 30h8.9L34.8.002H18.24zm1.09 20.37l3.36-11.7 3.37 11.7h-6.73z M0 0v30h8.95V18.14L4.48 0H0z" />
                    </svg>
                </Link>
            </div>

            {/* Login Form */}
            <div className="relative z-10 flex justify-center items-center h-screen px-4">
                <div className="bg-black/75 p-8 md:p-16 rounded-xl w-full max-w-[450px] space-y-8">
                    <h1 className="text-3xl font-bold text-white mb-6">{t('signIn')}</h1>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Email or phone number"
                                className="w-full bg-[#333] text-white rounded px-4 py-4 pt-4 focus:bg-[#454545] outline-none transition peer"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="relative">
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-[#333] text-white rounded px-4 py-4 pt-4 focus:bg-[#454545] outline-none transition peer"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className="w-full bg-netflix-red text-white font-bold py-3 rounded mt-6 hover:bg-red-700 transition">
                            {t('signIn')}
                        </button>
                    </form>

                    <div className="flex justify-between text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="remember" className="accent-gray-500" />
                            <label htmlFor="remember">Remember me</label>
                        </div>
                        <a href="#" className="hover:underline">Need help?</a>
                    </div>

                    <div className="text-gray-400 mt-8">
                        <p>New to Netflix? <Link to="/" className="text-white hover:underline">Sign up now.</Link></p>
                        <p className="text-xs mt-4">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
