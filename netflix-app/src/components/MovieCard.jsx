import React, { useState, useRef, useEffect } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const MovieCard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        if (isHovered) {
            timerRef.current = setTimeout(() => {
                setShowVideo(true);
            }, 500); // Delay video start
        } else {
            if (timerRef.current) clearTimeout(timerRef.current);
            setShowVideo(false);
        }
        return () => clearTimeout(timerRef.current);
    }, [isHovered]);

    // Random video selection for demo purposes
    const videoSrc = ["/videos/mhv.mp4", "/videos/pav.mp4", "/videos/pv.mp4"][movie.id % 3];

    return (
        <motion.div
            className="relative bg-netflix-dark w-[200px] md:w-[240px] h-[120px] md:h-[140px] rounded-md cursor-pointer flex-shrink-0 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            initial={{ scale: 1, zIndex: 1 }}
            whileHover={{
                scale: 1.3,
                zIndex: 10,
                transition: { duration: 0.3, delay: 0.2 }
            }}
            layout
        >
            {/* Thumbnail / Video */}
            <div className="w-full h-full relative rounded-md overflow-hidden">
                {showVideo ? (
                    <video
                        src={videoSrc}
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={movie.img}
                        alt={movie.title}
                        className="w-full h-full object-cover rounded-md"
                        loading="lazy"
                    />
                )}
            </div>

            {/* Expanded Info (Visible only on hover) */}
            {isHovered && (
                <motion.div
                    className="absolute top-full left-0 w-full bg-netflix-dark shadow-xl rounded-b-md p-3 space-y-2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                        <button className="bg-white text-black p-1.5 rounded-full hover:bg-gray-200 transition">
                            <Play className="w-4 h-4 fill-black" />
                        </button>
                        <button className="border-2 border-gray-400 text-white p-1.5 rounded-full hover:border-white transition">
                            <Plus className="w-4 h-4" />
                        </button>
                        <button className="border-2 border-gray-400 text-white p-1.5 rounded-full hover:border-white transition">
                            <ThumbsUp className="w-4 h-4" />
                        </button>
                        <div className="ml-auto">
                            <button className="border-2 border-gray-400 text-white p-1.5 rounded-full hover:border-white transition">
                                <ChevronDown className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-300">
                        <span className="text-green-400">98% Match</span>
                        <span className="border border-gray-500 px-1 text-[10px]">13+</span>
                        <span>{movie.duration || '1h 45m'}</span>
                        <span className="border border-gray-500 px-1 text-[10px]">HD</span>
                    </div>

                    {/* Genres */}
                    <div className="flex gap-2 text-[10px] text-gray-400">
                        <span>{movie.genre}</span>
                        <span>•</span>
                        <span>Exciting</span>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default MovieCard;
