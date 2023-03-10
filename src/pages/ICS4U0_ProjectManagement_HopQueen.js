import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ICSSection from '../components/ICSSection';
import DisplayICS from '../components/DisplayICS';
import Logo from '../pictures/Logo.png'
import HopQueenDocumentation from '../pictures/HopQueenDocumentation.png'
import HopQueenDownload from '../pictures/HopQueenDownload.png'

const ICS4U0_ProjectManagent_HopQueen = () => {
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
    <motion.div className='text-slate-900 mb-10 mt-36 w-full flex flex-col'
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
        id="documentation-hop-queen"
        className='ics-section'
        title="Documentation"
        subtitle=""
        image={HopQueenDownload}
        github="https://github.com/stephen-ics/Hop-Queen/blob/main/Game/Assets/Scripts/Menu/SettingsMenu.cs"
      >
      </DisplayICS>    
      <DisplayICS
        whileHover={{ scale:1.05 }}
        whileTap={{ scale:0.95 }}
        id="download"
        className='ics-section'
        title="Download"
        subtitle=""
        image={HopQueenDocumentation}
        github="https://github.com/stephen-ics/hop-queen"
        youtube="https://www.youtube.com/watch?v=-orOY6NSltM"
      >
      </DisplayICS> 
      </motion.div>

    </motion.div>
  )
}

export default ICS4U0_ProjectManagent_HopQueen
