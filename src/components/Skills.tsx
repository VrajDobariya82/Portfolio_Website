'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 90 },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 85 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 80 },
  { name: 'React', icon: FaReact, color: '#61DAFB', level: 75 },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 70 },
  { name: 'UI/UX Design', icon: FaFigma, color: '#F24E1E', level: 65 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex items-center mb-4">
                <skill.icon size={30} color={skill.color} className="mr-3" />
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              <div className="h-2.5 bg-gray-200 rounded-full mb-2">
                <div 
                  className="h-2.5 rounded-full bg-primary"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 