import React from 'react'
import { motion } from 'framer-motion'
import './page-styles/About.css'

import Art from '../pictures/hobbies/Art.jpeg'
import Math from '../pictures/hobbies/Math.jpeg'
import Piano from '../pictures/hobbies/Piano.webp'
import Running from '../pictures/hobbies/Running.webp'
import Profile from '../pictures/me/Profile.png'

import Cardflip from '../components/Cardflip'
import Cardflip2 from '../components/Cardflip2'
import Logo from '../pictures/Logo.png'
import Progress from '../components/Progress'

const About = () => {
  const container = {
    hidden: {
        y: '-10vh',
        opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
    exit: {
      y: '-10vh',
      opacity: 0,
      transition: {
        duration: 0.25,
      }
  },
  };

  const textUp = {
    hidden: {
        x: '5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const textUp2 = {
    hidden: {
        x: '5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 1,
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const textUp3 = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 2,
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const textUp4 = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            delay: 3.5,
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };


  const imageLeft = {
    hidden: {
        x: '-5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageRight = {
    hidden: {
        x: '5vh',
        opacity: 0,
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };


  const progressUp = {
    hidden: {
        y: '10vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            delay: 1.2,
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageUp = {
    hidden: {
        y: '10vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  const imageDown = {
    hidden: {
        y: '-10vh',
        opacity: 0,
    },
    visible: { 
        y: 0,
        opacity: 1,
        transition: {
         
            duration: 2,
            ease: [0.6, 0.01, 0.05, 0.95],
        }
    },
    exit: {
        opacity: 0,
    },
  };

  return (
    <div className='flex justify-center m-4'>
      <motion.div className='flex flex-col'
        variants={container}
        initial='hidden'
        animate='visible'
        exit='exit'
      >
      <div className='flex flex-col text-slate-900 mt-8'>
        <div className='flex flex-wrap'>
          <motion.img src={Profile} variants={imageLeft} className='rounded-3xl object-cover border-green-500 border-solid aboutimage'/>
          <div className='flex flex-col justify-around'>
              <div className='mt-10 text-wrap'>
                <motion.h1 variants={textUp} className='aboutheading1'>Hello! I'm Stephen</motion.h1>
                <motion.h2 variants={textUp2} className='aboutheading2'>I'm a high school student at John Fraser Secondary School and an aspiring full-stack developer</motion.h2>
                <motion.h2 variants={textUp2} className='aboutheading3'>I code to improve daily life: from web-dev with React, to back-end dev using Python, all the way to AI/ML with Tensorflow!</motion.h2>
              </div>
            <motion.div variants={imageUp} className='mt-6'>
              <Progress/>
            </motion.div>
          </div>      
        </div>
        <div className=''>
          <motion.h2 variants={textUp3} className='aboutheading0 mt-8'>Hobbies</motion.h2>
          <motion.div className='flex flex-wrap justify-evenly'>
            <motion.div variants={imageUp}>
              <Cardflip title='Math' subtitle='I do math' description="Math has always been an inescapable part of my childhood, but overtime I've grown to love it!" image={Math}/>
            </motion.div>
            <motion.div variants={imageDown}>
              <Cardflip title='Piano' subtitle='I play the piano' description="I've been playing the piano for 3 years, I am currently level 10! I love to play music, especially anime openings" image={Piano}/>
            </motion.div>
            <motion.div variants={imageUp}>
              <Cardflip title='Art' subtitle='I draw' description="I've been drawing ever since I was in elementary school, I havn't grown out of stick figures yet but my love for art still burns!" image={Art}/>
            </motion.div>
            <motion.div variants={imageDown}>
              <Cardflip title='Running' subtitle='I run' description="Though I am not the most athletic, I've always been good at running! Whether it's cross country or track and field, it feels great after a good run" image={Running}/>
            </motion.div>
          </motion.div>
        </div>
        <div className=''>
          <motion.h2 className='aboutheading0 mt-8' variants={textUp}>Values</motion.h2>
          <div className='flex flex-wrap justify-evenly'>
          <motion.div variants={imageLeft}>
            <Cardflip2 title='Tenacious' subtitle='Risks are meant to be taken' description='If there is a risk, I will take it. I put my all into every project I start. Whenever I start a project, I always make sure to try a new technology or learn a new skill, so that I am always constantly learning and improving' image={Math}/>
          </motion.div>
          <motion.div variants={imageRight}>  
            <Cardflip2 title='Open-minded' subtitle='Mistakes are a blessing' description='There is no success without failure, that is why I appreciate any sort of critism, and I always make sure apply the feedback I receive to make my next project my best project.' image={Piano}/>
          </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
  )
}

export default About