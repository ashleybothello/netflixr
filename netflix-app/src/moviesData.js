const BASE = import.meta.env.BASE_URL;

// Cycle through existing poster images and videos
const img = (n) => `${BASE}images/poster${((n - 1) % 10) + 1}.jpg`;
const vid = (n) => {
    const vids = [`${BASE}videos/mhv.mp4`, `${BASE}videos/pav.mp4`, `${BASE}videos/pv.mp4`];
    return vids[(n - 1) % 3];
};

const movies = [
    // ── Action ──────────────────────────────────────────
    { id: 1, title: "Black Panther", genre: "Action", rating: "PG-13", year: 2018, duration: "2h 14m", description: "T'Challa returns home to the African nation of Wakanda to take his rightful place as king.", img: img(1), video: vid(1) },
    { id: 2, title: "Pathaan", genre: "Action", rating: "UA", year: 2023, duration: "2h 26m", description: "An Indian spy takes on the leader of a group of mercenaries who have nefarious plans.", img: img(2), video: vid(2) },
    { id: 3, title: "John Wick", genre: "Action", rating: "R", year: 2014, duration: "1h 41m", description: "An ex-hitman comes out of retirement to track down the gangsters that took everything from him.", img: img(3), video: vid(3) },
    { id: 4, title: "Mad Max: Fury Road", genre: "Action", rating: "R", year: 2015, duration: "2h 0m", description: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler with the help of a drifter.", img: img(4), video: vid(4) },
    { id: 5, title: "Top Gun: Maverick", genre: "Action", rating: "PG-13", year: 2022, duration: "2h 11m", description: "After thirty years, Maverick is still pushing the envelope as a top naval aviator.", img: img(5), video: vid(5) },
    { id: 6, title: "The Dark Knight", genre: "Action", rating: "PG-13", year: 2008, duration: "2h 32m", description: "Batman raises the stakes in his war on crime against the menace known only as the Joker.", img: img(6), video: vid(6) },
    { id: 7, title: "Raid", genre: "Action", rating: "UA", year: 2018, duration: "2h 7m", description: "A fearless income tax officer raids the mansion of the most powerful man in Lucknow.", img: img(7), video: vid(7) },
    { id: 8, title: "Mission: Impossible – Fallout", genre: "Action", rating: "PG-13", year: 2018, duration: "2h 27m", description: "Ethan Hunt and the IMF team race against time after a mission goes wrong.", img: img(8), video: vid(8) },
    { id: 9, title: "Extraction", genre: "Action", rating: "R", year: 2020, duration: "1h 57m", description: "A black-market mercenary is hired to rescue the kidnapped son of an imprisoned crime lord.", img: img(9), video: vid(9) },
    { id: 10, title: "RRR", genre: "Action", rating: "UA", year: 2022, duration: "3h 7m", description: "A fictional tale of two legendary revolutionaries and their journey far away from home.", img: img(10), video: vid(10) },

    // ── Thriller ─────────────────────────────────────────
    { id: 11, title: "Money Heist", genre: "Thriller", rating: "TV-MA", year: 2017, duration: "4 Seasons", description: "A criminal mastermind who goes by 'The Professor' plans the biggest heist in recorded history.", img: img(3), video: vid(3) },
    { id: 12, title: "Gone Girl", genre: "Thriller", rating: "R", year: 2014, duration: "2h 29m", description: "With his wife's disappearance, Nick Dunne finds himself the target of media scrutiny.", img: img(1), video: vid(1) },
    { id: 13, title: "Shutter Island", genre: "Thriller", rating: "R", year: 2010, duration: "2h 18m", description: "Two US marshals investigate the disappearance of a patient from a hospital for the criminally insane.", img: img(2), video: vid(2) },
    { id: 14, title: "Se7en", genre: "Thriller", rating: "R", year: 1995, duration: "2h 7m", description: "Two detectives hunt a serial killer who uses the seven deadly sins as motifs.", img: img(4), video: vid(4) },
    { id: 15, title: "Prisoners", genre: "Thriller", rating: "R", year: 2013, duration: "2h 33m", description: "When his daughter and her friend go missing, a father takes matters into his own hands.", img: img(5), video: vid(5) },
    { id: 16, title: "Zodiac", genre: "Thriller", rating: "R", year: 2007, duration: "2h 37m", description: "A cartoonist becomes obsessed with tracking down the Zodiac Killer.", img: img(6), video: vid(6) },
    { id: 17, title: "Drishyam", genre: "Thriller", rating: "UA", year: 2015, duration: "2h 43m", description: "A man goes to extreme lengths to protect his family after an accidental crime.", img: img(7), video: vid(7) },
    { id: 18, title: "The Silence of the Lambs", genre: "Thriller", rating: "R", year: 1991, duration: "1h 58m", description: "A young FBI cadet seeks the help of an imprisoned cannibal to catch another serial killer.", img: img(8), video: vid(8) },
    { id: 19, title: "Andhadhun", genre: "Thriller", rating: "UA", year: 2018, duration: "2h 19m", description: "A blind pianist unwittingly becomes entangled in a murder and a web of lies.", img: img(9), video: vid(9) },
    { id: 20, title: "Parasite", genre: "Thriller", rating: "R", year: 2019, duration: "2h 12m", description: "Greed and class discrimination threaten a newly formed symbiotic relationship between families.", img: img(10), video: vid(10) },

    // ── Sci-Fi ───────────────────────────────────────────
    { id: 21, title: "Stranger Things", genre: "Sci-Fi", rating: "TV-14", year: 2016, duration: "4 Seasons", description: "A young boy vanishes and a small town uncovers a mystery involving secret experiments and supernatural forces.", img: img(9), video: vid(9) },
    { id: 22, title: "Rogue One", genre: "Sci-Fi", rating: "PG-13", year: 2016, duration: "2h 13m", description: "A group of rebels embark on a daring mission to steal the Death Star plans.", img: img(6), video: vid(6) },
    { id: 23, title: "The Abyss", genre: "Sci-Fi", rating: "PG-13", year: 1989, duration: "2h 20m", description: "A civilian diving team is enlisted to search for a lost nuclear submarine and encounters something extraordinary.", img: img(10), video: vid(10) },
    { id: 24, title: "Interstellar", genre: "Sci-Fi", rating: "PG-13", year: 2014, duration: "2h 49m", description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.", img: img(1), video: vid(1) },
    { id: 25, title: "Inception", genre: "Sci-Fi", rating: "PG-13", year: 2010, duration: "2h 28m", description: "A thief who steals secrets through dream-sharing technology is given the task of planting an idea.", img: img(2), video: vid(2) },
    { id: 26, title: "The Matrix", genre: "Sci-Fi", rating: "R", year: 1999, duration: "2h 16m", description: "A computer hacker learns the true nature of his reality and his role in the war against its controllers.", img: img(3), video: vid(3) },
    { id: 27, title: "Blade Runner 2049", genre: "Sci-Fi", rating: "R", year: 2017, duration: "2h 44m", description: "A young blade runner uncovers a long-buried secret that leads him to find a former blade runner.", img: img(4), video: vid(4) },
    { id: 28, title: "Dune", genre: "Sci-Fi", rating: "PG-13", year: 2021, duration: "2h 35m", description: "Paul Atreides unites with the Fremen while on a journey to avenge his family.", img: img(5), video: vid(5) },
    { id: 29, title: "Arrival", genre: "Sci-Fi", rating: "PG-13", year: 2016, duration: "1h 56m", description: "A linguist is recruited to communicate with extraterrestrial visitors who arrive in twelve locations.", img: img(7), video: vid(7) },
    { id: 30, title: "The Martian", genre: "Sci-Fi", rating: "PG-13", year: 2015, duration: "2h 24m", description: "An astronaut becomes stranded on Mars and must rely on his ingenuity to survive.", img: img(8), video: vid(8) },

    // ── Drama ────────────────────────────────────────────
    { id: 31, title: "Padmavati", genre: "Drama", rating: "UA", year: 2018, duration: "2h 44m", description: "The tale of Queen Padmavati and the valor of the Rajput warriors.", img: img(4), video: vid(4) },
    { id: 32, title: "Grey's Anatomy", genre: "Drama", rating: "TV-14", year: 2005, duration: "19 Seasons", description: "Surgical interns and residents navigate personal and professional challenges.", img: img(7), video: vid(7) },
    { id: 33, title: "The Shawshank Redemption", genre: "Drama", rating: "R", year: 1994, duration: "2h 22m", description: "Two imprisoned men bond over years, finding solace and eventual redemption.", img: img(1), video: vid(1) },
    { id: 34, title: "Forrest Gump", genre: "Drama", rating: "PG-13", year: 1994, duration: "2h 22m", description: "The story of a man with a low IQ who unwittingly influences several historical events.", img: img(2), video: vid(2) },
    { id: 35, title: "The Godfather", genre: "Drama", rating: "R", year: 1972, duration: "2h 55m", description: "The aging patriarch of a crime dynasty transfers control to his reluctant youngest son.", img: img(3), video: vid(3) },
    { id: 36, title: "Fight Club", genre: "Drama", rating: "R", year: 1999, duration: "2h 19m", description: "An insomniac office worker and a soap salesman form an underground fight club.", img: img(5), video: vid(5) },
    { id: 37, title: "Schindler's List", genre: "Drama", rating: "R", year: 1993, duration: "3h 15m", description: "A German industrialist saves over a thousand Jewish refugees during the Holocaust.", img: img(6), video: vid(6) },
    { id: 38, title: "12 Angry Men", genre: "Drama", rating: "NR", year: 1957, duration: "1h 36m", description: "A dissenting juror slowly persuades the others that the case is not as clear-cut as it seems.", img: img(8), video: vid(8) },
    { id: 39, title: "3 Idiots", genre: "Drama", rating: "PG-13", year: 2009, duration: "2h 50m", description: "Two friends set out to find a long-lost engineering college friend while recounting their days together.", img: img(9), video: vid(9) },
    { id: 40, title: "The Pursuit of Happyness", genre: "Drama", rating: "PG-13", year: 2006, duration: "1h 57m", description: "A struggling salesman takes custody of his son as he begins an unpaid internship at a brokerage firm.", img: img(10), video: vid(10) },

    // ── Comedy ───────────────────────────────────────────
    { id: 41, title: "The Grand Budapest Hotel", genre: "Comedy", rating: "R", year: 2014, duration: "1h 39m", description: "A legendary concierge at a famous hotel and his protégé become embroiled in a theft and murder case.", img: img(1), video: vid(1) },
    { id: 42, title: "Superbad", genre: "Comedy", rating: "R", year: 2007, duration: "1h 53m", description: "Two co-dependent high school seniors set out to buy alcohol for a party before graduating.", img: img(2), video: vid(2) },
    { id: 43, title: "The Hangover", genre: "Comedy", rating: "R", year: 2009, duration: "1h 40m", description: "Three buddies wake up with no memory after a wild bachelor party in Las Vegas.", img: img(3), video: vid(3) },
    { id: 44, title: "Hera Pheri", genre: "Comedy", rating: "UA", year: 2000, duration: "2h 36m", description: "Three unemployed men find the answer to their money problems when they receive a phone call.", img: img(4), video: vid(4) },
    { id: 45, title: "Knives Out", genre: "Comedy", rating: "PG-13", year: 2019, duration: "2h 10m", description: "A detective investigates the death of a patriarch of an eccentric family.", img: img(5), video: vid(5) },
    { id: 46, title: "Deadpool", genre: "Comedy", rating: "R", year: 2016, duration: "1h 48m", description: "A wisecracking mercenary gets experimented on and becomes immortal yet horribly scarred.", img: img(6), video: vid(6) },
    { id: 47, title: "The Truman Show", genre: "Comedy", rating: "PG", year: 1998, duration: "1h 43m", description: "An insurance salesman discovers his whole life is actually a reality TV show.", img: img(7), video: vid(7) },
    { id: 48, title: "Stree", genre: "Comedy", rating: "UA", year: 2018, duration: "2h 8m", description: "A small town is haunted by a female ghost and its people look for a saviour.", img: img(8), video: vid(8) },
    { id: 49, title: "Jojo Rabbit", genre: "Comedy", rating: "PG-13", year: 2019, duration: "1h 48m", description: "A young boy in Nazi Germany discovers his mother is hiding a Jewish girl in their home.", img: img(9), video: vid(9) },
    { id: 50, title: "The Intern", genre: "Comedy", rating: "PG-13", year: 2015, duration: "2h 1m", description: "A 70-year-old widower becomes a senior intern at an online fashion site.", img: img(10), video: vid(10) },

    // ── Horror ───────────────────────────────────────────
    { id: 51, title: "Get Out", genre: "Horror", rating: "R", year: 2017, duration: "1h 44m", description: "A young African-American man visits his white girlfriend's parents and uncovers a disturbing secret.", img: img(1), video: vid(1) },
    { id: 52, title: "A Quiet Place", genre: "Horror", rating: "PG-13", year: 2018, duration: "1h 30m", description: "A family must live in silence to avoid being hunted by creatures that attack anything that makes sound.", img: img(2), video: vid(2) },
    { id: 53, title: "Hereditary", genre: "Horror", rating: "R", year: 2018, duration: "2h 7m", description: "A grieving family is haunted by tragic and disturbing occurrences after the death of their grandmother.", img: img(3), video: vid(3) },
    { id: 54, title: "The Conjuring", genre: "Horror", rating: "R", year: 2013, duration: "1h 52m", description: "Paranormal investigators help a family terrorized by a dark presence in their farmhouse.", img: img(4), video: vid(4) },
    { id: 55, title: "Tumbbad", genre: "Horror", rating: "UA", year: 2018, duration: "1h 44m", description: "A mythological story about a village goddess who creates everything and guards a hidden treasure.", img: img(5), video: vid(5) },
    { id: 56, title: "It", genre: "Horror", rating: "R", year: 2017, duration: "2h 15m", description: "Children in a small town are stalked by an entity exploiting their deepest fears.", img: img(6), video: vid(6) },
    { id: 57, title: "The Shining", genre: "Horror", rating: "R", year: 1980, duration: "2h 26m", description: "A family heads to an isolated hotel for the winter where a sinister presence drives the father into madness.", img: img(7), video: vid(7) },
    { id: 58, title: "Midsommar", genre: "Horror", rating: "R", year: 2019, duration: "2h 28m", description: "A couple travels to Sweden for a festival that becomes increasingly violent and bizarre.", img: img(8), video: vid(8) },
    { id: 59, title: "The Exorcist", genre: "Horror", rating: "R", year: 1973, duration: "2h 2m", description: "When a girl is possessed by a mysterious entity, her mother seeks the help of two priests.", img: img(9), video: vid(9) },
    { id: 60, title: "Us", genre: "Horror", rating: "R", year: 2019, duration: "1h 56m", description: "A family's vacation turns to chaos when their doppelgangers appear and begin to terrorize them.", img: img(10), video: vid(10) },

    // ── Romance ──────────────────────────────────────────
    { id: 61, title: "Bridgerton", genre: "Romance", rating: "TV-MA", year: 2020, duration: "3 Seasons", description: "The Bridgerton family navigates London high society in the Regency era.", img: img(8), video: vid(8) },
    { id: 62, title: "The Notebook", genre: "Romance", rating: "PG-13", year: 2004, duration: "2h 3m", description: "A poor young man falls in love with a rich young woman, and their love endures over the decades.", img: img(1), video: vid(1) },
    { id: 63, title: "La La Land", genre: "Romance", rating: "PG-13", year: 2016, duration: "2h 8m", description: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.", img: img(2), video: vid(2) },
    { id: 64, title: "Titanic", genre: "Romance", rating: "PG-13", year: 1997, duration: "3h 14m", description: "A young aristocrat falls in love with an artist aboard the ill-fated R.M.S. Titanic.", img: img(3), video: vid(3) },
    { id: 65, title: "Pride and Prejudice", genre: "Romance", rating: "PG", year: 2005, duration: "2h 9m", description: "Sparks fly when spirited Elizabeth Bennet meets the proud Mr. Darcy.", img: img(4), video: vid(4) },
    { id: 66, title: "Dilwale Dulhania Le Jayenge", genre: "Romance", rating: "UA", year: 1995, duration: "3h 9m", description: "Two Indians fall in love on a European trip and must convince her traditional father.", img: img(5), video: vid(5) },
    { id: 67, title: "Before Sunrise", genre: "Romance", rating: "R", year: 1995, duration: "1h 41m", description: "Two young strangers meet on a train and spend an unforgettable night walking through Vienna.", img: img(6), video: vid(6) },
    { id: 68, title: "Crazy Rich Asians", genre: "Romance", rating: "PG-13", year: 2018, duration: "2h 0m", description: "A professor accompanies her boyfriend to Singapore for a wedding, only to discover he's from an ultra-wealthy family.", img: img(7), video: vid(7) },
    { id: 69, title: "Eternal Sunshine of the Spotless Mind", genre: "Romance", rating: "R", year: 2004, duration: "1h 48m", description: "After a painful breakup, a couple undergoes a procedure to erase each other from their memories.", img: img(9), video: vid(9) },
    { id: 70, title: "To All the Boys I've Loved Before", genre: "Romance", rating: "PG-13", year: 2018, duration: "1h 39m", description: "A girl's secret love letters are accidentally sent out, turning her love life upside down.", img: img(10), video: vid(10) },

    // ── Animation ────────────────────────────────────────
    { id: 71, title: "Spider-Man: Into the Spider-Verse", genre: "Animation", rating: "PG", year: 2018, duration: "1h 57m", description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with other Spider-People.", img: img(1), video: vid(1) },
    { id: 72, title: "Spirited Away", genre: "Animation", rating: "PG", year: 2001, duration: "2h 5m", description: "A young girl enters a world ruled by gods, witches, and spirits to rescue her parents.", img: img(2), video: vid(2) },
    { id: 73, title: "Coco", genre: "Animation", rating: "PG", year: 2017, duration: "1h 45m", description: "A boy journeys to the Land of the Dead to unlock the mystery behind his family's ban on music.", img: img(3), video: vid(3) },
    { id: 74, title: "The Lion King", genre: "Animation", rating: "G", year: 1994, duration: "1h 28m", description: "Lion prince Simba flees his kingdom only to learn the true meaning of responsibility and bravery.", img: img(4), video: vid(4) },
    { id: 75, title: "Toy Story", genre: "Animation", rating: "G", year: 1995, duration: "1h 21m", description: "A cowboy doll is profoundly threatened when a new spaceman action figure arrives.", img: img(5), video: vid(5) },
    { id: 76, title: "Your Name", genre: "Animation", rating: "PG", year: 2016, duration: "1h 46m", description: "Two strangers find themselves linked in a bizarre way, swapping bodies every few days.", img: img(6), video: vid(6) },
    { id: 77, title: "Up", genre: "Animation", rating: "PG", year: 2009, duration: "1h 36m", description: "A 78-year-old balloonist ties thousands of balloons to his house and flies to South America.", img: img(7), video: vid(7) },
    { id: 78, title: "Inside Out", genre: "Animation", rating: "PG", year: 2015, duration: "1h 35m", description: "The emotions inside a young girl's mind guide her through a difficult life change.", img: img(8), video: vid(8) },
    { id: 79, title: "Ratatouille", genre: "Animation", rating: "G", year: 2007, duration: "1h 51m", description: "A rat with culinary ambitions forms an unlikely alliance with a young kitchen worker.", img: img(9), video: vid(9) },
    { id: 80, title: "Demon Slayer: Mugen Train", genre: "Animation", rating: "R", year: 2020, duration: "1h 57m", description: "Tanjiro and his friends board the Mugen Train to investigate a series of disappearances.", img: img(10), video: vid(10) },

    // ── Documentary ──────────────────────────────────────
    { id: 81, title: "Our Planet", genre: "Documentary", rating: "TV-G", year: 2019, duration: "1 Season", description: "Experience the planet's breathtaking biodiversity across natural habitats around the world.", img: img(1), video: vid(1) },
    { id: 82, title: "The Social Dilemma", genre: "Documentary", rating: "PG-13", year: 2020, duration: "1h 34m", description: "Tech experts sound the alarm on the dangerous impact of social networking.", img: img(2), video: vid(2) },
    { id: 83, title: "13th", genre: "Documentary", rating: "TV-MA", year: 2016, duration: "1h 40m", description: "An in-depth look at the prison system in the United States and how it reveals racial inequality.", img: img(3), video: vid(3) },
    { id: 84, title: "Free Solo", genre: "Documentary", rating: "PG-13", year: 2018, duration: "1h 40m", description: "Alex Honnold attempts to climb El Capitan's 3,000-foot rock face without a rope.", img: img(4), video: vid(4) },
    { id: 85, title: "Planet Earth II", genre: "Documentary", rating: "TV-G", year: 2016, duration: "1 Season", description: "David Attenborough presents the wonders of the natural world from a new perspective.", img: img(5), video: vid(5) },
    { id: 86, title: "Icarus", genre: "Documentary", rating: "TV-MA", year: 2017, duration: "2h 1m", description: "A filmmaker's investigation into doping in sports leads to a geopolitical conspiracy.", img: img(6), video: vid(6) },
    { id: 87, title: "Making a Murderer", genre: "Documentary", rating: "TV-14", year: 2015, duration: "2 Seasons", description: "Filmed over a 10-year period, the series follows the story of Steven Avery.", img: img(7), video: vid(7) },
    { id: 88, title: "My Octopus Teacher", genre: "Documentary", rating: "G", year: 2020, duration: "1h 25m", description: "A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest.", img: img(8), video: vid(8) },
    { id: 89, title: "Abstract: The Art of Design", genre: "Documentary", rating: "TV-PG", year: 2017, duration: "2 Seasons", description: "Step inside the minds of the most innovative designers in a variety of disciplines.", img: img(9), video: vid(9) },
    { id: 90, title: "Wild Wild Country", genre: "Documentary", rating: "TV-MA", year: 2018, duration: "1 Season", description: "A controversial cult leader builds a utopian city in the Oregon desert, sparking conflict.", img: img(10), video: vid(10) },

    // ── Fantasy ──────────────────────────────────────────
    { id: 91, title: "The Lord of the Rings: The Fellowship", genre: "Fantasy", rating: "PG-13", year: 2001, duration: "2h 58m", description: "A young hobbit embarks on a perilous journey to destroy the One Ring.", img: img(1), video: vid(1) },
    { id: 92, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", rating: "PG", year: 2001, duration: "2h 32m", description: "An orphan boy discovers he is a wizard and begins his magical education.", img: img(2), video: vid(2) },
    { id: 93, title: "The Witcher", genre: "Fantasy", rating: "TV-MA", year: 2019, duration: "3 Seasons", description: "A mutated monster hunter struggles to find his place in a world of humans, elves, and demons.", img: img(3), video: vid(3) },
    { id: 94, title: "Pan's Labyrinth", genre: "Fantasy", rating: "R", year: 2006, duration: "1h 58m", description: "A young girl enters a world of dark fantasy during the Spanish Civil War.", img: img(4), video: vid(4) },
    { id: 95, title: "The Chronicles of Narnia", genre: "Fantasy", rating: "PG", year: 2005, duration: "2h 23m", description: "Four siblings discover a magical land in the back of a wardrobe and fulfill an ancient prophecy.", img: img(5), video: vid(5) },
    { id: 96, title: "Doctor Strange", genre: "Fantasy", rating: "PG-13", year: 2016, duration: "1h 55m", description: "A neurosurgeon discovers the hidden world of mysticism and alternate dimensions.", img: img(6), video: vid(6) },
    { id: 97, title: "Baahubali: The Beginning", genre: "Fantasy", rating: "UA", year: 2015, duration: "2h 39m", description: "In ancient India, an adventurous young man discovers his royal heritage.", img: img(7), video: vid(7) },
    { id: 98, title: "Stardust", genre: "Fantasy", rating: "PG-13", year: 2007, duration: "2h 7m", description: "A young man ventures into a magical kingdom to retrieve a fallen star for his beloved.", img: img(8), video: vid(8) },
    { id: 99, title: "The Princess Bride", genre: "Fantasy", rating: "PG", year: 1987, duration: "1h 38m", description: "A farmhand sets out to rescue his true love from a scheming prince.", img: img(9), video: vid(9) },
    { id: 100, title: "Fantastic Beasts", genre: "Fantasy", rating: "PG-13", year: 2016, duration: "2h 12m", description: "A wizard arrives in New York and must find his escaped magical creatures.", img: img(10), video: vid(10) },
];

export const GENRES = [...new Set(movies.map(m => m.genre))];
export default movies;
