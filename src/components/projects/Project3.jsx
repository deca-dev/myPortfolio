import React from 'react'
import { motion } from "framer-motion";

const Project3 = () => {
    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl font-playfair">Rick and Morty</p>
                <p className="mt-7">
                    Full Responsive App consuming the Pokémon API you can Login, search for a Pokémon, filter by type or view stats.
                </p>
                <div className='flex gap-10 mt-7 cursor-pointer'>
                    <a href="https://github.com/deca-dev/pokedex" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-brands fa-github"></i><span>GitHub</span></button></a>
                    <a href="https://deluxe-concha-26efb2.netlify.app" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-regular fa-paper-plane"></i><span>Go to Website</span></button></a>
            
                </div>
            </div>
            <img src={'../assets/project-3.png'} alt='eCommerce' />
        </motion.div>
  )
}


export default Project3