import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const translations = {
    en: {
        signIn: "Sign In",
        getStarted: "Get Started",
        unlimited: "Unlimited movies, TV shows and more",
        cancelanytime: "Starts at ₹149. Cancel at any time.",
        readytowatch: "Ready to watch? Enter your email to create or restart your membership.",
        trending: "Trending Now",
        morereasons: "More reasons to join",
        faq: "Frequently Asked Questions",
        play: "Play",
        moreInfo: "More Info",
    },
    hi: {
        signIn: "साइन इन",
        getStarted: "शुरू करें",
        unlimited: "असीमित फिल्में, टीवी शो और बहुत कुछ",
        cancelanytime: "₹149 से शुरू। कभी भी रद्द करें।",
        readytowatch: "देखने के लिए तैयार हैं? अपनी सदस्यता बनाने या पुनः आरंभ करने के लिए अपना ईमेल दर्ज करें।",
        trending: "अभी ट्रेंडिंग में",
        morereasons: "शामिल होने के और कारण",
        faq: "अक्सर पूछे जाने वाले प्रश्न",
        play: "चलाएं",
        moreInfo: "अधिक जानकारी",
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (key) => translations[language][key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
