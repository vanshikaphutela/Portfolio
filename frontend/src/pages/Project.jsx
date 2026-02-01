import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaNpm } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si';
import project2 from '../assets/project2.png';
import project1 from '../assets/project1.png';
import Navbar from '../components/Navbar';

export default function Projects() {
  const projects = [
    {
      img: project2,
      title: 'KUTUMB - One Stop Destination for your Dream Home',
      year: '2025',
      link: 'https://kutumb-ruddy.vercel.app',
      description:
        'Kutumb is a modern real estate and architecture web application that helps people discover vendors, workers, and materials for building their dream homes.',
    },
    {
      img: project1,
      title: 'Heavenly Stays - Find Your Perfect Getaway',
      year: '2025',
      link: 'https://heavenly-stays.vercel.app/',
      description:
        'A comprehensive platform allowing travelers to explore and book premium vacation stays with ease and comfort.',
    },
  ];

  const techStack = [
    { icon: FaReact, name: 'React' },
    { icon: FaNodeJs, name: 'Node.js' },
    { icon: SiTailwindcss, name: 'Tailwind CSS' },
    { icon: FaHtml5, name: 'HTML5' },
    { icon: FaCss3Alt, name: 'CSS3' },
    { icon: SiMongodb, name: 'MongoDB' },
    { icon: SiExpress, name: 'Express.js' },
    { icon: FaNpm, name: 'npm' },
  ];

  return (
    <main className="bg-black text-white min-h-screen pl-20 md:pl-24">
      <Navbar />

      {/* BIG TITLE */}
      <motion.h1
        className="text-[12vw] font-extrabold text-white text-center leading-none py-20 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        PROJECTS
      </motion.h1>

      {/* PROJECT CARD */}
      <div className="container mx-auto px-6 pb-20 flex justify-center">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            className="relative max-w-3xl w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121212]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 w-full bg-black/80 flex justify-between items-center px-6 py-3 z-10">
              <div className="text-green-400 font-semibold text-lg">
                {proj.title}
              </div>
              <div className="text-white/60 text-sm">{proj.year}</div>
            </div>

            {/* Image */}
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-[400px] object-contain bg-black block mx-auto"
            />

            {/* Description */}
            <div className="p-6 text-gray-300 text-lg">
              {proj.description}
            </div>

            {/* Button */}
            <div className="flex justify-center pb-6">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-400 text-black px-6 py-2 rounded-full font-medium hover:bg-green-500 transition"
              >
                View Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TECH STACK */}
      <div className="bg-[#121212] py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-12 text-center">
          Tech Stacks I Use
        </h2>
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-12">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-green-400 hover:scale-110 transition-transform"
            >
              <tech.icon className="text-5xl mb-2" />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
