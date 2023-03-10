import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ICSSection from '../components/ICSSection';
import DisplayICS from '../components/DisplayICS';
import Logo from '../pictures/Logo.png'
import SortingAlgs from '../pictures/SortingAlgorithmsSection.png'
import SearchingAlgs from '../pictures/SearchingAlgorithmsSection.png'
import Results from '../pictures/ResultsModal.png'


const ICS4U0_Algorithms = () => {
  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
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
  
  return (
    <motion.div className='text-slate-900 mb-10 w-full flex flex-col mt-36'
    variants={container}
    initial='hidden'
    animate='visible'
    exit='exit'
 
    >
      <h1 className='text-5xl text-center mt-10'></h1>

      <motion.div className='flex flex-wrap justify-evenly'> 
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id={"searching-algorithms"}
        className='ics-section'
        title="Searching Algorithms"
        subtitle=""
        image={SearchingAlgs}
        github="https://github.com/stephen-ics/ICS4U0-DS-A/blob/main/Algorithms/main.py"
      >
      </DisplayICS>  
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id={"sorting-algorithms"}
        className='ics-section'
        title="Sorting Algorithms"
        subtitle=""
        description=""
        techStack=""
        image={SortingAlgs}
        github="https://github.com/stephen-ics/ICS4U0-DS-A/blob/main/Algorithms/main.py"
      >
      </DisplayICS> 
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id={"results"}
        className='ics-section'
        title="Results"
        subtitle=""
        image={Results}
        github="https://github.com/stephen-ics/ICS4U0-DS-A/blob/main/Algorithms/main.py"
      >
      </DisplayICS>   
      </motion.div>

    </motion.div>
  )
}

export default ICS4U0_Algorithms
