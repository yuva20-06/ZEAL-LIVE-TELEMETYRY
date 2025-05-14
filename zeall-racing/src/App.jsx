import { motion } from 'framer-motion';
import kartImage from './assets/kart.png'; // Your kart image
import './App.css';

// Team Member Images
import sanjey from './assets/sanjey.png';
import hari from './assets/hari.png';
import ssk from './assets/ssk.png';
import vaeshnave from './assets/vaeshnave.png';
import bhavanitha from './assets/bhavanitha.png';
import afrin from './assets/afrin.jpeg';

// Gallery Images
import kart1 from './assets/kart1.jpeg';
import kart2 from './assets/kart2.jpeg';
import kart3 from './assets/kart3.jpeg';
import kart4 from './assets/kart4.jpeg';

const team = [
  { name: "SANJEY", role: "EMBEDDED", img: sanjey },
  { name: "HARI", role: "EMBEDDED", img: hari },
  { name: "SSK", role: "EMBEDDED", img: ssk },
  { name: "Vaeshnave", role: "DESIGN", img: vaeshnave },
  { name: "Bhavanitha", role: "EMBEDDED", img: bhavanitha },
  { name: "Afrin", role: "DESIGN", img: afrin },
];

const galleryImages = [kart1, kart2, kart3, kart4];

function App() {
  return (
    <div className="app-container bg-black min-h-screen text-white font-orbitron">
      {/* HEADER */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black shadow-lg p-4 border-b border-cyan-500 sticky top-0 z-50"
      >
        <h1 className="text-cyan-400 text-3xl md:text-4xl neon-text text-center md:text-left">⚡ Zeall Racing Team</h1>
        <nav className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-cyan-300 text-sm md:text-lg">
          <motion.a whileHover={{ scale: 1.1 }} href="#">Home</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#team">Team</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#telemetry">Telemetry</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#gallery">Gallery</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#events">Events</motion.a>
          <motion.a whileHover={{ scale: 1.1 }} href="#contact">Contact</motion.a>
        </nav>
      </motion.header>

      {/* HERO SECTION */}
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 px-4 text-center"
      >
        <h2 className="text-lime-400 text-3xl md:text-5xl font-bold neon-text">⚡ Welcome to Our Official Website</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Zeall Racing is more than a karting team – we're innovators driven by speed, precision, and team spirit.
          From engineering excellence to real-time telemetry, our team pushes boundaries in every race.
        </p>
      </motion.section>

      {/* KART IMAGE */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center mt-10 px-4"
      >
        <img 
          src={kartImage} 
          alt="Zeall Racing Kart" 
          className="w-full max-w-6xl rounded-xl shadow-xl border-4 border-cyan-400 hover:scale-[1.01] transition-transform duration-300"
        />
      </motion.div>

      {/* TEAM MEMBERS SECTION */}
      <section className="py-16 px-4 text-center" id="team">
        <h2 className="text-4xl text-cyan-400 font-bold neon-text mb-12"> Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 p-6 rounded-xl border-2 border-cyan-500 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full border-4 border-cyan-300 mb-4 object-cover"
              />
              <h3 className="text-xl text-lime-400 font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-16 px-6 text-center" id="gallery">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl text-cyan-400 font-bold neon-text mb-10"
        >
          📸 Gallery
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border-2 border-cyan-400 shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={img} 
                alt={`Gallery Image ${index + 1}`} 
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Zeall Racing Team. Built with ⚡ passion.</p>
      </footer>
    {/* TELEMETRY SECTION */}
<section id="telemetry" className="py-16 px-6 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl text-cyan-400 font-bold neon-text mb-10"
  >
    📡 Telemetry Dashboard
  </motion.h2>

  {/* Dashboard Cards */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
    <motion.div className="p-6 bg-gray-900 rounded-xl border-2 border-cyan-500 neon-box">
      <h3 className="text-lime-400 text-xl mb-2">Speed</h3>
      <p className="text-white text-3xl font-bold">78 km/h</p>
    </motion.div>

    <motion.div className="p-6 bg-gray-900 rounded-xl border-2 border-cyan-500 neon-box">
      <h3 className="text-lime-400 text-xl mb-2">Laps</h3>
      <p className="text-white text-3xl font-bold">12</p>
    </motion.div>

    <motion.div className="p-6 bg-gray-900 rounded-xl border-2 border-cyan-500 neon-box">
      <h3 className="text-lime-400 text-xl mb-2">Battery</h3>
      <p className="text-white text-3xl font-bold">87%</p>
    </motion.div>

    <motion.div className="p-6 bg-gray-900 rounded-xl border-2 border-cyan-500 neon-box">
      <h3 className="text-lime-400 text-xl mb-2">Engine Temp</h3>
      <p className="text-white text-3xl font-bold">72°C</p>
    </motion.div>
  </div>

  {/* Map View (Dummy Box) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="w-full max-w-6xl mx-auto border-4 border-cyan-500 rounded-xl neon-box"
  >
    <div className="bg-gray-800 h-96 flex items-center justify-center text-cyan-300 text-2xl">
      🗺️ Map View (Dummy for Now)
    </div>
  </motion.div>
</section>
{/* FOOTER */}
<footer className="mt-20 bg-gray-950 text-cyan-300 border-t border-cyan-600 shadow-inner py-8 text-center">
  <h3 className="text-xl font-semibold neon-text">⚡ Zeall Racing Team</h3>
  <p className="text-sm mt-2 text-gray-400">Fueled by Passion | Engineered for Speed</p>
  <p className="text-xs mt-2 text-gray-600">© {new Date().getFullYear()} Zeall Racing. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;
