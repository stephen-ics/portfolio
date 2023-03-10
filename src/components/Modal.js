
import { motion } from 'framer-motion'
import Backdrop from './Backdrop'
import './component-styles/Modal.css'
import { FaGithub } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'

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
                className='modal orange-gradient'
                variants={dropIn}
                initial='hidden'
                animate='visible'
                exit='exit'
                
            >
                <img src={image} className='object-cover rounded-l-xl w-full modal-image'/>
                <div className='w-full flex flex-col items-center'>
                    <ModalButton onClick={handleClose} label='Close'></ModalButton>
                    <div className='flex w-full h-full justify-between items-start'>
                        <div className='modal-text-separator'>
                            <h1 className='modal-title'>{title}</h1>
                            <h3 className='modal-date'>{subtitle}</h3>
                            <p className='modal-description mt-2'>{description}</p>
                            <p className='modal-description mt-6'>{techStack}</p>
                        </div>
                        <div className='flex flex-col justify-evenly pl-16'>
                            <a href={devpost} target='_blank' className='flex flex-col items-center modal-icon-separator'>
                                <h1 className='text-2xl'>Devpost</h1>
                                <SiDevpost size={60}/>
                            </a>
                            <a href={github} target='_blank' className='flex flex-col items-center modal-icon-separator'>
                                <h1 className='text-2xl'>Github</h1>
                                <FaGithub size={60}/>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
            
        </Backdrop>
    )
}

export default Modal;