import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
    className="flex items-center mb-10"
    fadeIn="left"
  >
    <div className="w-20 h-20 inverse-hue-shift-animation rounded-full bg-white flex justify-center items-center">
      <img
        src={experience.icon}
        alt={experience.company_name}
        className="w-[70%] h-[70%] object-contain"
      />
    </div>
    <div className="ml-6">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold mb-2">
        {experience.company_name}
      </p>
      <ul className="list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className='font-press-start text-[35px]'>Experience</h2>
      </motion.div>
      <div className="mt-20">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
