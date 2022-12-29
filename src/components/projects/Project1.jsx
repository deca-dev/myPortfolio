import React from 'react'
import { motion } from "framer-motion";

const Project1 = () => {

    const projectVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      };

    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-1 text-deep-blue`;

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlayStyles}>
                <p className="text-2xl  font-playfair">E-Commerce</p>
                <p className="mt-7 ">
                    Full Responsive App emulating the process of shopping in an E-Commerce where you can Sign up, Login, add items to cart, filter products and categories, checkout and view past purchases. Feel free to use the test data to have access to full website.
                </p>
                <p className='inline mt-4 '>Used technologies: <span className='font-bold'>Redux, React-Router, useSelect, axios, react-hook-form </span> and habitual hooks: <span className='font-bold'>useEffect</span> and <span className='font-bold'> useState</span> </p>
                <div className='flex gap-10 mt-7 cursor-pointer '>
                    <a href="https://github.com/deca-dev/eCommerce-tech" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-brands fa-github"></i><span>GitHub</span></button></a>
                    <a href="https://dashing-pavlova-bf9e19.netlify.app/" target="_blank" rel= "noreferrer"><button className='hover:text-amber-500'><i className="mr-1 fa-regular fa-paper-plane"></i><span>Go to Website</span></button></a>
            
                </div>
            </div>
            <img className='' src={'../assets/project-1.png'} alt='eCommerce' />
        </motion.div>
    )
}

export default Project1