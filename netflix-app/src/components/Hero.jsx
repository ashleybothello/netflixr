import React from 'react';
import { Play, Info } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/videos/hero.mp4"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-transparent to-transparent " />

            {/* Content */}
            <div className="absolute top-[30%] md:top-[35%] left-4 md:left-12 max-w-xl space-y-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
                    Stranger Things
                </h1>
                <p className="text-lg md:text-xl text-gray-200 drop-shadow-md line-clamp-3">
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
                </p>

                <div className="flex gap-4 mt-6">
                    <button className="flex items-center gap-2 px-6 py-2 md:py-3 bg-white text-black rounded font-bold hover:bg-opacity-80 transition hover:scale-105">
                        <Play className="w-5 h-5 fill-black" />
                        {t('play')}
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2 md:py-3 bg-gray-500/70 text-white rounded font-bold hover:bg-gray-500/50 transition hover:scale-105 backdrop-blur-sm">
                        <Info className="w-5 h-5" />
                        {t('moreInfo')}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
