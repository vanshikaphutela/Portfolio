import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";

export default function Resume() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.25 },
    }),
  };

  return (
    <main className="bg-slate-50 text-slate-900 font-sans min-h-screen relative overflow-x-hidden pl-20 md:pl-24">
      <Navbar />

      {/* Profile Photo */}


      {/* HERO */}
      <section className="container mx-auto px-6 py-20">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-green-600 mb-6 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Vanshika Phutela
        </motion.h1>

        <motion.p
          className="text-center text-slate-600 max-w-3xl mx-auto text-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          custom={2}
        >
          Aspiring Software Engineer with strong fundamentals in Data Structures,
          Algorithms, and Full-Stack Development. Passionate about building
          scalable, maintainable, and secure web applications.
        </motion.p>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-6 py-10 grid gap-12 md:grid-cols-2">
        {/* Education */}
        <motion.div
          className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-green-600 mb-6">Education</h2>

          <div className="space-y-4">
            <div>
              <p className="font-semibold">
                B.Tech in Computer Engineering
              </p>
              <p className="text-slate-500">
                Chitkara University, Punjab • 2023 – 2027
              </p>
            </div>

            <div>
              <p className="font-semibold">CBSE – Class XII</p>
              <p className="text-slate-500">
                St. Xavier’s Sr. Sec. School, Sirsa • 2023
              </p>
            </div>

            <div>
              <p className="font-semibold">CBSE – Class X</p>
              <p className="text-slate-500">
                St. Xavier’s Sr. Sec. School, Sirsa • 2021
              </p>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={2}
        >
          <h2 className="text-2xl font-bold text-green-600 mb-4">Project</h2>

          <p className="text-xl font-semibold mb-2">
            KUTUMB – Build Your Dream Home Platform
          </p>

          <ul className="list-disc list-inside text-slate-500 space-y-2">
            <li>
              Built a full-stack platform connecting vendors, workers, and
              material suppliers for residential construction.
            </li>
            <li>
              Implemented multi-role workflows with secure authentication and
              RESTful APIs.
            </li>
            <li>
              Designed scalable MongoDB schema and responsive frontend UI.
            </li>
          </ul>

          <p className="text-xl font-semibold mb-2 mt-6">
            Heavenly Stays – Premium Vacation Rental Platform
          </p>

          <ul className="list-disc list-inside text-slate-500 space-y-2">
            <li>
              Developed a full-stack vacation rental platform with search, filtering, and booking capabilities.
            </li>
            <li>
              Implemented an Airbnb-style user interface with responsive design and smooth animations.
            </li>
            <li>
              Integrated secure authentication and dynamic property listings.
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition col-span-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={3}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-6">
            Technical Skills
          </h2>

          <p className="text-slate-600 mb-3">
            <strong>Languages:</strong> Java, C/C++, JavaScript, Python, SQL
          </p>
          <p className="text-slate-600 mb-3">
            <strong>Frameworks:</strong> React.js, Node.js, Express.js, Tailwind CSS
          </p>
          <p className="text-slate-600 mb-3">
            <strong>Databases:</strong> MongoDB, MySQL
          </p>
          <p className="text-slate-600 mb-3">
            <strong>Concepts:</strong> OOP, DSA, REST APIs, OS, DBMS, Web Security, Gen AI
          </p>

          {/* Icons */}
          <div className="flex gap-6 text-green-600 text-3xl mt-6 flex-wrap">
            <FaReact />
            <FaNodeJs />
            <SiExpress />
            <SiMongodb />
            <SiTailwindcss />
            <FaHtml5 />
            <FaCss3Alt />
            <FaJs />
            <FaGitAlt />
            <FaDocker />
            <FaDatabase />
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition col-span-2"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          custom={4}
        >
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            Achievements
          </h2>

          <ul className="list-disc list-inside text-slate-500 space-y-2">
            <li>
              <strong>Adobe Hackathon 2024 (Shortlisted)</strong> – Solved DSA and
              algorithmic challenges under time constraints.
            </li>
            <li>
              <strong>Smart India Hackathon 2024</strong> – Built a scalable
              full-stack solution for a real-world problem.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* DOWNLOAD */}
      <section className="container mx-auto px-6 pb-20 text-center">
        <motion.a
          href="/Resume.pdf"
          download
          className="inline-block mt-10 border border-green-600 text-green-600 px-8 py-3 rounded-full hover:bg-green-600 hover:text-white transition"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Download PDF Resume
        </motion.a>
      </section>
    </main>
  );
}
