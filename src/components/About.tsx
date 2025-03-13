'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "UI/UX Design",
    "Cloud Services"
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-64 rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2"
                  alt="Programming"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-64 rounded-2xl overflow-hidden mt-8"
              >
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative h-64 rounded-2xl overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2"
                  alt="Design"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative h-64 rounded-2xl overflow-hidden mt-8"
              >
                <Image
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d"
                  alt="Meeting"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl -z-10 blur-2xl opacity-20 animate-pulse"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              With over 5 years of experience in web development and design, I specialize in creating 
              innovative digital solutions that combine cutting-edge technology with intuitive user experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My passion lies in transforming complex problems into elegant, user-friendly solutions. 
              I stay current with the latest industry trends and technologies to deliver modern and efficient applications.
            </p>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.5 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full border border-purple-500/30 hover:border-purple-500 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 