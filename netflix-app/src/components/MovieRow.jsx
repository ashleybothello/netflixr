import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';

const MovieRow = ({ title, movies }) => {
    const rowRef = useRef(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-2 mb-8 group pl-4 md:pl-12">
            <h2 className="text-white text-lg md:text-2xl font-bold cursor-pointer hover:text-gray-300 transition w-fit">
                {title}
            </h2>

            <div className="relative group/row">
                {/* Left Arrow */}
                <div
                    className={`absolute top-0 bottom-0 left-0 w-12 bg-black/50 z-40 flex items-center justify-center cursor-pointer opacity-0 group-hover/row:opacity-100 transition duration-300 hover:bg-black/70 ${!isMoved && 'hidden'}`}
                    onClick={() => handleClick('left')}
                >
                    <ChevronLeft className="w-8 h-8 text-white" />
                </div>

                {/* Movie Container */}
                <div
                    ref={rowRef}
                    className="flex gap-2 overflow-x-scroll scrollbar-hide scroll-smooth py-4 pr-12"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

                {/* Right Arrow */}
                <div
                    className="absolute top-0 bottom-0 right-0 w-12 bg-black/50 z-40 flex items-center justify-center cursor-pointer opacity-0 group-hover/row:opacity-100 transition duration-300 hover:bg-black/70"
                    onClick={() => handleClick('right')}
                >
                    <ChevronRight className="w-8 h-8 text-white" />
                </div>
            </div>
        </div>
    );
};

export default MovieRow;
