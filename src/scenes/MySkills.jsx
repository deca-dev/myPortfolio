import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24 px-20">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32 mx-5/6 z-10">
        <motion.div
          className="md:w-1/3 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0.05 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 z-10">
            MY <span className="text-yellow">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute"
            >
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-wrap md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0.01 },
          }}
        >
          <div className="relative h-32 z-10">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">HTML</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              <i className=" text-5xl w-full fa-brands fa-html5"></i>
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Hyper Text Markup Language utilized to strcuture and visualize information inside a web page. It's not a programming language but a series of tools that contribute the content to be shown and behave a certain way.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0.01 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">CSS</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              <i className=" text-5xl w-full  fa-brands fa-css3-alt"></i>
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Cascading Style Sheets, used to render a graphic representation of the work. Adecuate to set and localize elements, give color, animate among many other functions.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0.01 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">Javascript</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              <i className=" text-5xl w-full fa-brands fa-js"></i>
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            AKA JS, is a light programming language and focused to web application, that helps to set them funcionality. Due to its versatility, can be used outsed the web pages application.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0.01 },
          }}
        >
          <div className="relative h-32">
            <div className="z-11">
              <p className="font-playfair font-semibold text-5xl">React</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              <i className=" text-5xl w-full  fa-brands fa-react"></i>
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            One of Javascript most popular frameworks. With an open source use and helpful to develop user interfaces. Top level companies as Facebook, Netflix and Uber use it.
          </p>
        </motion.div>

            {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0.01 },
          }}
        >
          <div className="relative h-32">
            <div className="z-11">
              <p className="font-playfair font-semibold text-5xl">Swift</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              <i className=" text-5xl w-full  fa-brands fa-swift"></i>
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          A multi-paradigm, general-purpose, open-source programming language for iPadOS, macOS, tvOS, watchOS, and iOS development.
          </p>
        </motion.div>

          {/* IMAGINATIVE */}
          <motion.div
          className="md:w-1/3 mt-10 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0.01 },
          }}
        >
          <div className="relative h-32">
            <div className="z-11">
              <p className="font-playfair font-semibold text-5xl">NodeJS</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
              <i className=" text-5xl w-full  fa-brands fa-node"></i>
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          An open-source and cross-platform JavaScript runtime environment
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MySkills;
