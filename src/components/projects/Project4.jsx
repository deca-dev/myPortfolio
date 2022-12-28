import React from 'react'
import { motion } from "framer-motion";

const Project4 = () => {
  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

return (
    <motion.div variants={projectVariant} className="relative">
        <div className={overlayStyles}>
            <p className="text-2xl font-playfair">Weather App</p>
            <p className="mt-7">
                App using React, fetching the Weather API. Can detect the user location to show weather data, search for a specific city and change between F° or C° 
            </p>
            <p className='inline mt-4'>Used technologies: <span className='font-bold'>Tailwind, luxon</span> and habitual hooks: <span className='font-bold'>useEffect</span> and <span className='font-bold'> useState</span> </p>
            <div className='flex gap-10 mt-7 cursor-pointer'>
                <a href="https://github.com/deca-dev/WeatherApp2" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-brands fa-github"></i><span>GitHub</span></button></a>
                <a href="https://sparkling-trifle-a0fa68.netlify.app/" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-regular fa-paper-plane"></i><span>Go to Website</span></button></a>
        
            </div>
        </div>
        <img src={'../assets/project-4.png'} alt='eCommerce' />
    </motion.div>
)
}


export default Project4