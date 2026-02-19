import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
    const { t } = useLanguage();

    // Dummy data for now, will replace with real data or props later
    const movies = [
        { id: 1, title: "Black Panther", genre: "Action", rating: "PG-13", year: 2018, img: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },
        { id: 2, title: "Pathaan", genre: "Action", rating: "UA", year: 2023, img: "https://image.tmdb.org/t/p/w500/mFHkYYGGOT1z6OHK3j3WDJB7lBn.jpg" },
        { id: 3, title: "Money Heist", genre: "Thriller", rating: "TV-MA", year: 2017, img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
        { id: 4, title: "Padmavati", genre: "Drama", rating: "UA", year: 2018, img: "https://image.tmdb.org/t/p/w500/5K6c8KLXFOJXKAy7mSdHJIlcbIi.jpg" },
        { id: 5, title: "Raid", genre: "Thriller", rating: "UA", year: 2018, img: "https://image.tmdb.org/t/p/w500/b4n8WRRXy5W2ndXfRFIIzJ9TSGC.jpg" },
        { id: 6, title: "Rogue One", genre: "Sci-Fi", rating: "PG-13", year: 2016, img: "https://image.tmdb.org/t/p/w500/i9aGKvLwBKSViEoAbQGMlBrj0Nf.jpg" },
        { id: 7, title: "Grey's Anatomy", genre: "Drama", rating: "TV-14", year: 2005, img: "https://image.tmdb.org/t/p/w500/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg" },
        { id: 8, title: "Bridgerton", genre: "Romance", rating: "TV-MA", year: 2020, img: "https://image.tmdb.org/t/p/w500/luoKpgVwi1E5nQsi7W0UuKHu2Rq.jpg" },
        { id: 9, title: "Stranger Things", genre: "Sci-Fi", rating: "TV-14", year: 2016, img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
        { id: 10, title: "The Abyss", genre: "Sci-Fi", rating: "PG-13", year: 1989, img: "https://image.tmdb.org/t/p/w500/j4DPBRMPDIzZk7L4GFdIAbQbDra.jpg" },
    ];

    return (
        <div className="bg-netflix-dark min-h-screen text-white pb-20 overflow-x-hidden">
            <Navbar />
            <Hero />
            <div className="pl-4 md:pl-12 -mt-20 relative z-10 space-y-12">
                <MovieRow title={t('trending')} movies={movies} />
                <MovieRow title="Top Picks for You" movies={[...movies].reverse()} />
                <MovieRow title="New Releases" movies={movies} />
            </div>
        </div>
    );
};

export default Home;
