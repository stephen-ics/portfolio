
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import './component-styles/Modal.css'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

import ICSData from '../data/ICSData'

const dropIn ={
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: { 
        y:'0',
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 14,
            stiffness: 150,
        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

const ModalButton = ({ onClick, label }) => (
    <motion.button
        className='modal-button'
        type='button'
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={onClick}
    >
        {label}
    </motion.button>
);


const Modal = ({ handleClose, title, subtitle, description, techStack, image, github, devpost }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div 
                onClick={(e) => e.stopPropagation()}
                className='modal-ics'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
                
            >
                <div className='w-full flex flex-col items-center'>
                    <ModalButton onClick={handleClose} label='Close'></ModalButton>
                    <div className='flex flex-col w-full h-full justify-between items-start'>
       
                        {ICSData.map((element) => {
                            return (
                                <div className='modal-text-separator'>
                                    <h1 className='modal-title'>{element.title}</h1>
                                    <h3 className='modal-date'>{element.subtitle}</h3>
                                    <p className='modal-description mt-2'>{element.description}</p>
                                </div>         
                            );
                        })}
    
                  
                    </div>
                    
                </div>
            </motion.div>
            
        </Backdrop>
    )
}

export default Modal;