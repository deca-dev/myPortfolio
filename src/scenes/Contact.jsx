import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Contact = () => {
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_email: process.env.REACT_APP_EMAILJS_EMAIL

          
        }
      );
      console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
      console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
      console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact py-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact_image.png" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form onSubmit={handleSubmit}>
            <input
              className="w-full bg-gray-600 font-semibold placeholder-opaque-black p-3 outline-none"
              type="text"
              name="name"
              placeholder="NAME"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              className="w-full bg-gray-600 font-semibold placeholder-opaque-black p-3 mt-5 outline-none"
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              className="w-full bg-gray-600 font-semibold placeholder-opaque-black p-3 mt-5 outline-none"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-blue hover:text-white transition duration-500 disabled:opacity-50"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'SENDING...' : 'SEND ME A MESSAGE'}
            </button>

            {status === 'success' && (
              <p className="text-green-500 mt-3">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500 mt-3">Failed to send message. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;