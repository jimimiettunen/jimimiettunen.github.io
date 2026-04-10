import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-gray-900"
    >
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-80px)] w-full snap-section overflow-hidden bg-gray-100">
        <img 
          src="/public/images/homepage.jpeg"
          alt="Home background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 flex items-center justify-end px-8 md:px-24">
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-right"
          >
            <h1 className="text-6xl md:text-9xl font-light text-gray-900 tracking-tighter mb-4">
              Jimi<br/>Miettunen
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 font-light tracking-wide">
              Portfolio
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-[50vh] flex items-start justify-center pt-16 pb-24 px-8 md:px-24 snap-section bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-12">About Me</h2>
            <div className="space-y-10 text-3xl md:text-4xl lg:text-5xl font-light leading-tight text-gray-900">
              <p>
                I am Jimi Miettunen. I made this website to capture and document my various and expanding interests. It shall work as an archive for myself to look back to what all I have done.
              </p>
              <p>
                I'm sure the photos I've chosen tell much more than words ever could, yet here we go. I'm very outgoing and addicted to consuming new skills and information to learn.
              </p>
              <p>
                I'm a strong believer in lifelong learning and always trying to improve, of course with consideration in mind. That means the website is a work in progress and hopefully will get many more interesting updates from my journeys.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
