'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8 }}
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">John Doe</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                Full Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Crafting innovative digital experiences with cutting-edge technologies.
                Let's transform your vision into reality!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#projects" 
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                  Explore My Work
                </Link>
                <Link href="#contact" 
                  className="px-8 py-3 rounded-full border-2 border-purple-500 text-purple-500 hover:bg-purple-500/10 transition-all duration-300">
                  Get In Touch
                </Link>
              </div>
              <div className="flex mt-8 space-x-6">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-purple-500 transition-colors duration-300">
                  <FaGithub size={28} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
                  <FaTwitter size={28} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full"></div>
              <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-purple-500/50 backdrop-blur-sm">
                <Image 
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={288}
                  height={288}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 