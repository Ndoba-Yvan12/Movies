import React, { useState } from "react";

function App() {
  // TRENDING GOSPEL MOVIES
  const [menuOpen, setMenuOpen] = useState(false);
  const trendingMovies = [
    {
      title: "The Jesus Film",
      year: "1979",
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Life of Jesus",
      year: "2013",
      image:
        "https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Book of Acts",
      year: "2019",
      image:
        "https://images.unsplash.com/photo-1519491050282-cf00c82424b4?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Magdalena",
      year: "2021",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "The Carpenter",
      year: "2024",
      image:
        "https://images.unsplash.com/photo-1542401886-65d6c61db217?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Daniel & The Fiery Furnace",
      year: "2025",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "My Last Day",
      year: "2011",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "The Gospel Film",
      year: "2020",
      image:
        "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Torchlighters",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Ruth",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Samson",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "The Prodigal Son",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=500&q=80",
    },
  ];

  // RECOMMENDED GOSPEL MOVIES
  const recommendedMovies = [
    {
      title: "Finding Faith",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Saved By Grace",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "The Perfect Prayer",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "God's Purpose",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "A Life of Purpose",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Finding Grace",
      year: "2022",
      image:
        "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "The Reconciler",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Hope",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Forgiven",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Unconditional",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "The Messengers",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Road to Emmaus",
      year: "2023",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HEADER */}
      {/* HEADER */}
<header className="px-6 md:px-12 py-6 flex justify-between items-center relative">

  {/* LOGO */}
  <img
  src="/movie_bazer_logo.png"
  alt="Gospel Movies Logo"
  className="w-40 h-auto mx-auto"
/>

  {/* DESKTOP NAVIGATION */}
  <nav className="hidden md:flex gap-8 text-sm text-gray-300">
    <a href="#" className="text-white hover:text-purple-400">
      Home
    </a>

    <a href="#trending" className="hover:text-purple-400">
      Explore
    </a>

    <a href="#trending" className="hover:text-purple-400">
      Genre
    </a>

    <a href="#movies" className="hover:text-purple-400">
      News
    </a>

    <a href="#movies" className="hover:text-purple-400">
      Movies
    </a>

    <a href="#movies" className="hover:text-purple-400">
      TV Shows
    </a>
  </nav>


  {/* HAMBURGER BUTTON */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="md:hidden text-2xl z-50"
    aria-label="Toggle menu"
  >
    {menuOpen ? "✕" : "☰"}
  </button>


  {/* MOBILE NAVIGATION */}
  <nav
    className={`absolute top-full left-0 w-full bg-black border-t border-gray-800
    flex flex-col items-center gap-6 py-8 text-gray-300
    md:hidden transition-all duration-300 z-40
    ${menuOpen ? "block" : "hidden"}`}
  >
    <a
      href="#"
      onClick={() => setMenuOpen(false)}
      className="hover:text-purple-400"
    >
      Home
    </a>

    <a
      href="#trending"
      onClick={() => setMenuOpen(false)}
      className="hover:text-purple-400"
    >
      Explore
    </a>

    <a
      href="#trending"
      onClick={() => setMenuOpen(false)}
      className="hover:text-purple-400"
    >
      Genre
    </a>

    <a
      href="#movies"
      onClick={() => setMenuOpen(false)}
      className="hover:text-purple-400"
    >
      News
    </a>

    <a
      href="#movies"
      onClick={() => setMenuOpen(false)}
      className="hover:text-purple-400"
    >
      Movies
    </a>

    <a
      href="#movies"
      onClick={() => setMenuOpen(false)}
      className="hover:text-purple-400"
    >
      TV Shows
    </a>
  </nav>

</header>


      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-16">

          <div>
            <p className="text-sm font-bold tracking-widest">
              FIND INSPIRATION
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase mt-2">
              <span className="text-blue-500">Gospel Movies</span>
              <br />

              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                And More
              </span>
            </h2>

            <p className="text-gray-400 text-sm mt-6 max-w-md">
              Discover inspiring Christian movies, Bible stories,
              Gospel films and faith-based entertainment for you
              and your family.
            </p>

            <button className="border border-white rounded-lg px-5 py-3 mt-7 text-sm hover:bg-purple-600 hover:border-purple-600 transition">
              ▶ Watch Movies
            </button>
          </div>


          {/* HERO IMAGES */}
          <div className="relative flex justify-center items-center h-[350px]">

            <img
              src="https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=600&q=80"
              alt="Gospel movie"
              className="absolute right-0 top-0 w-36 md:w-48 h-64 object-cover rounded-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=600&q=80"
              alt="Christian movie"
              className="absolute left-0 bottom-0 w-48 md:w-64 h-72 object-cover rounded-lg z-10 shadow-2xl"
            />

            <button className="absolute z-20 bg-white text-black rounded-full w-14 h-14 hover:scale-110 transition">
              ▶
            </button>

          </div>
        </section>


        {/* TRENDING SECTION */}
        <section id="trending" className="mt-16">

          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-xl">
              <span className="text-yellow-400">🔥</span> Trending Gospel Movies
            </h2>

            <div className="h-px bg-gray-800 flex-1"></div>

            <button className="text-xs text-gray-400">
              See More
            </button>
          </div>


          {/* MOVIE CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {trendingMovies.map((movie, index) => (
              <div key={index} className="group cursor-pointer">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover rounded-sm group-hover:scale-105 transition duration-300"
                />

                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year}
                  <span className="text-red-500"> • </span>
                  Gospel Movie
                </p>

              </div>
            ))}

          </div>
        </section>


        {/* YOU MAY LIKE THIS */}
        <section id="movies" className="mt-24">

          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-xl uppercase">
              You May Like This
            </h2>

            <div className="h-px bg-gray-800 flex-1"></div>

            <button className="text-xs text-gray-400">
              See More
            </button>
          </div>


          {/* RECOMMENDED MOVIE CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {recommendedMovies.map((movie, index) => (
              <div key={index} className="group cursor-pointer">

                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover rounded-sm group-hover:scale-105 transition duration-300"
                />

                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year}
                  <span className="text-red-500"> • </span>
                  Gospel Movie
                </p>

              </div>
            ))}

          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer className="mt-24 border-t border-gray-800 py-10 text-center">

        <h2 className="text-2xl font-bold font-serif">
          ✝ Gospel Movies<span className="text-purple-500">.</span>
        </h2>

        <p className="text-gray-400 text-sm mt-3">
          Inspiring faith through movies and entertainment.
        </p>

        <p className="text-gray-600 text-xs mt-6">
          © 2026 Gospel Movies. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;
