import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options ={
            {
              max: 45,
              scale: 1,
              speed: 450,
            }
          } 
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )

}

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
        <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]' variants={fadeIn("","", 0.1, 1)}>
          I am a software developer skilled in Python, Javascript, Java, TypeScript, and C++. I have experience with TensorFlow, Pandas, scikit-learn, and NumPy, as well as React and Tailwind for front-end development. I am a quick learner and love tackling challenges. I am currently pursuing a Bachelor's degree in Computer Science at the University of Arkansas.
        </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index ={index} {...service} />
        ))}
      </div>
    </div>
  )
}
export default SectionWrapper(About, "about")