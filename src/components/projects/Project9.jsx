import React from 'react'
import { motion } from "framer-motion";

const Project9 = () => {
    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };
    
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">Talentify</p>
                <p className="mt-7">
                    Website used to find the best talent for your company (kind of LinkedIn).
                </p>
                <p className='inline mt-4'>Used technologies: <span className='font-bold'>React & CSS, Express, SQL</span></p>
                <div className='flex gap-10 mt-7 cursor-pointer'>
                    <a href="https://github.com/No-Country-simulation/c21-41-t-node-react" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-brands fa-github"></i><span>GitHub</span></button></a>
                    <a href="https://dev-talentify.vercel.app/" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-regular fa-paper-plane"></i><span>Go to Website</span></button></a>
            
                </div>
            </div>
            <img src={'../assets/project9.png'} alt='talentify' />
        </motion.div>
    )
    }

export default Project9