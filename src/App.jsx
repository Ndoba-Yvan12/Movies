import React from "react";

function App() {

  return (
    <div className="bg-black min-h-screen text-white">

      {/* HEADER */}
      <header className="px-6 md:px-12 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif">
          ◉ Movies Bazer<span className="text-purple-500">.</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#" className="text-white">Home</a>
          <a href="#trending">Explore</a>
          <a href="#trending">Genre</a>
          <a href="#movies">News</a>
          <a href="#movies">Movies</a>
          <a href="#movies">TV Shows</a>
        </nav>

        <button className="md:hidden text-2xl">☰</button>
      </header>


      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 md:px-12">


        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center py-16">

          <div>
            <p className="text-sm font-bold tracking-widest">
              FIND MOVIES
            </p>

            <h2 className="text-4xl md:text-5xl font-black uppercase mt-2">
              <span className="text-blue-600">TV Shows</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                And More
              </span>
            </h2>

            <p className="text-gray-400 text-sm mt-6 max-w-md">
              Discover the latest movies, popular TV shows,
              amazing stories and entertainment from around
              the world. Find your next favorite movie here.
            </p>

            <button className="border border-white rounded-lg px-5 py-3 mt-7 text-sm hover:bg-purple-600 hover:border-purple-600">
              ▶️ Watch Tutorial
            </button>
          </div>


          {/* HERO MOVIE IMAGES */}
          <div className="relative flex justify-center items-center h-[350px]">

            <img
              src="https://tse3.mm.bing.net/th/id/OIP.m8c8ZusyXRZqPiN2zKDuLgHaK8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Guardians of the Galaxy"
              className="absolute right-0 top-0 w-36 md:w-48 h-64 object-cover"
            />

            <img
              src="https://media.themoviedb.org/t/p/w500/zPHcwBAExP3xfSKLGOuA5qM7Iox.jpg"
              alt="Spider-Man"
              className="absolute left-0 bottom-0 w-48 md:w-64 h-72 object-cover z-10 shadow-2xl"
            />

            <button className="absolute z-20 bg-white text-black rounded-full w-14 h-14 hover:scale-110 transition">
              ▶️
            </button>

          </div>
        </section>



        {/* TRENDING SECTION */}
        <section id="trending" className="mt-16">

          <div className="flex items-center gap-4 mb-8">
            <h2 className="font-bold text-xl">
              <span className="text-yellow-400">♨️</span> Trending
            </h2>

            <div className="h-px bg-gray-800 flex-1"></div>

            <button className="text-xs text-gray-400">
              See More
            </button>
          </div>


          {/* TRENDING MOVIE DATA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              {
                title: "Guardians of the Galaxy",
                year: "2023",
                image: "r2J02Z2OpNTctfOSN1Ydgii0o5a.jpg"
              },
              {
                title: "Shazam! Fury of the Gods",
                year: "2023",
                image: "A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
              },
              {
                title: "Dungeons & Dragons",
                year: "2023",
                image: "A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
              },
              {
                title: "Medellin",
                year: "2023",
                image: "zv5T0uM8P2lQ3c8V9y5K.jpg"
              },
              {
                title: "John Wick Chapter 4",
                year: "2023",
                image: "vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
              },
              {
                title: "Spider-Man",
                year: "2023",
                image: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              },
              {
                title: "Oppenheimer",
                year: "2023",
                image: "ptpr0kGAckfQkJeJIt8st5dglvd.jpg"
              },
              {
                title: "Barbie",
                year: "2023",
                image: "iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              },
              {
                title: "Avatar",
                year: "2022",
                image: "kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
              },
              {
                title: "Kung Fu Panda 4",
                year: "2024",
                image: "kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              },
              {
                title: "The Batman",
                year: "2022",
                image: "74xTEgt7R36Fpooo50r9T25onhq.jpg"
              },
              {
                title: "Black Panther",
                year: "2022",
                image: "sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
              }
            ].map((movie, index) => (

              <div key={index} className="group cursor-pointer">

                <img
                  src= "https://tse1.mm.bing.net/th/id/OIP.307ef6a-4oLICbYx6OmlUwHaLB?r=0&w=692&h=1030&rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover rounded-sm group-hover:scale-105 transition duration-300"
                />

                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year} <span className="text-red-500">•</span> 104m
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


          {/* RECOMMENDED MOVIES DATA */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

            {[
              {
                title: "Hypnotic",
                year: "2023",
                image: "hY?invalid"
              },
              {
                title: "Mojave Diamonds",
                year: "2023",
                image: "8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
              },
              {
                title: "Mojave",
                year: "2023",
                image: "1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"
              },
              {
                title: "Crossfire",
                year: "2023",
                image: "iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
              },
              {
                title: "Fast X",
                year: "2023",
                image: "4wiFZ3t3v7g4k8V8.jpg"
              },
              {
                title: "The Pregnancy Promise",
                year: "2023",
                image: "q719jXXEzOoYaps6babgKnONONX.jpg"
              },
              {
                title: "The Days",
                year: "2023",
                image: "kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg"
              },
              {
                title: "Days of Daisy",
                year: "2023",
                image: "A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"
              },
              {
                title: "Turn of the Tide",
                year: "2023",
                image: "r2J02Z2OpNTctfOSN1Ydgii0o5a.jpg"
              },
              {
                title: "The Prank Panel",
                year: "2023",
                image: "A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"
              },
              {
                title: "The Idol",
                year: "2023",
                image: "vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
              },
              {
                title: "The Gryphon",
                year: "2023",
                image: "8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"
              }
            ].map((movie, index) => (

              <div key={index} className="group cursor-pointer">

                <img
                  src="https://i.pinimg.com/736x/eb/f2/0f/ebf20f2b7b5124d01dc1d01c4ad16b1a.jpg" 
                  alt={movie.title}
                  className="w-full aspect-[2/3] object-cover rounded-sm group-hover:scale-105 transition duration-300"
                />

                <h3 className="text-sm mt-3 truncate">
                  {movie.title}
                </h3>

                <p className="text-xs text-gray-400 mt-2">
                  {movie.year} <span className="text-red-500">•</span> 104m
                </p>

              </div>

            ))}

          </div>
        </section>

      </main>



      {/* FOOTER */}
      <footer className="mt-24 border-t border-gray-800 py-10 text-center">

        <h2 className="text-2xl font-bold font-serif">
          Movies Bazer<span className="text-purple-500">.</span>
        </h2>

        <p className="text-gray-400 text-sm mt-3">
          Your world of movies and entertainment.
        </p>

        <p className="text-gray-600 text-xs mt-6">
          © 2026 Movies Bazer. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;

