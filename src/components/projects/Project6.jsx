import React from 'react'
import { motion } from "framer-motion";

const Project6 = () => {
    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">Quotes Generator</p>
                <p className="mt-7">
                    App using React, fetching a Quotes API. Each time the app refresh through the button it renders a new quote and a new background color.
                </p>
                <p className='inline mt-4'>Used technologies: <span className='font-bold'>JSON file</span> and habitual hook:<span className='font-bold'> useState</span> </p>
                <div className='flex gap-10 mt-7 cursor-pointer'>
                    <a href="https://github.com/deca-dev/Random-Quotes" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-brands fa-github"></i><span>GitHub</span></button></a>
                    <a href="https://dailyrandom-quotes.netlify.app/" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-regular fa-paper-plane"></i><span>Go to Website</span></button></a>
            
                </div>
            </div>
            <img src={'../assets/project-6.png'} alt='phrases' />
        </motion.div>
    )
    }


export default Project6