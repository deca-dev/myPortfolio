import React from 'react'
import { motion } from "framer-motion";

const Project5 = () => {
    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">Medicalendar</p>
                <p className="mt-7">
                    Modeled App using React, to recreate a site to schedule a doctor's appointment for hospitals.
                </p>
                <p className='inline mt-4'>Used technologies: <span className='font-bold'>Tailwind, luxon, formik, react-router, yup, daysyui</span> and habitual hooks: <span className='font-bold'>useEffect</span> and <span className='font-bold'> useState</span> </p>
                <div className='flex gap-10 mt-7 cursor-pointer'>
                    <a href="https://github.com/deca-dev/Medicalendar" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-brands fa-github"></i><span>GitHub</span></button></a>
                    <a href="https://tourmaline-jelly-de0a0b.netlify.app/" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-regular fa-paper-plane"></i><span>Go to Website</span></button></a>
            
                </div>
            </div>
            <img src={'../assets/project-5.png'} alt='medical' />
        </motion.div>
    )
    }

export default Project5