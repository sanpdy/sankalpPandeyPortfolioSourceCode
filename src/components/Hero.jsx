import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center">
      <div className={`${styles.paddingX} text-center`}>
        <div className="flex flex-col items-center gap-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <h1 className={`${styles.heroHeadText} font-press-start text-white`}>
            Hello, I'm <br />
            <span className="font-press-start text-[#915eff]">Sankalp</span>
          </h1>
          <p className={`${styles.heroSubText} font-press-start mt-1 text-[12px]`}>
            I develop software and research computer vision.
          </p>
             <a href="#about">
              <div className="w-[35px] h-[64px] bottom-100 border-4 border-white flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 bg-white mb-1"
            />
             </div>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
