import { motion } from 'framer-motion';
import profilePic from '../assets/your-photo.png';
import Navbar from '../components/Navbar';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 4 },
  },
};

export default function About() {
  return (
    <main className="bg-black text-white font-sans relative overflow-hidden pl-20 md:pl-24">
      <Navbar />

      {/* ABOUT SECTION */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* TEXT */}
        <motion.div
          className="flex-1 bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-green-400 pr-5">
            About Me
          </h1>

          <p className="text-gray-300 mb-6">
            Hello! I’m Vanshika Phutela, a 3rd year Computer Science student at
            Chitkara University. I love building full-stack applications,
            solving real-world problems, and blending design with development to
            craft meaningful digital experiences.
          </p>

          <p className="text-gray-300">
            Currently exploring new technologies, contributing to open-source,
            and preparing for exciting opportunities ahead.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          className="flex-1 flex justify-end"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={profilePic}
            alt="Vanshika Phutela"
            className="w-full max-w-sm"
          />
        </motion.div>
      </section>

      {/* Typewriter CSS */}
      <style>{`
        .animate-typing {
          animation: typing 2s steps(15), blink .75s step-end infinite;
        }
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: #22c55e }
        }
      `}</style>
    </main>
  );
}
