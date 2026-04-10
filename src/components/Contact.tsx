import { motion } from 'motion/react';
import Footer from './Footer';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[calc(100vh-80px)] w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/contactpage.jpg" 
          alt="Contact background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/70 backdrop-blur-sm p-12 rounded-2xl border border-white/10 shadow-2xl text-center w-full max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-6">Contact me</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto mb-12">
            I'm always open to discuss new projects, creative ideas and opportunities. I try to say 'no' to as few things as possible, life stays interesting that way.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="https://www.linkedin.com/in/jimi-miettunen-41335a20b/" target="_blank" rel="noopener noreferrer" className="text-2xl font-light text-white hover:text-gray-300 transition-colors border-b border-white hover:border-gray-300 pb-1">
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer at the bottom */}
      <div className="absolute bottom-0 w-full z-20">
        <Footer theme="dark" 
          credits={[
      { subject: 'Mountainscape photo', photographer: 'Joonas Miettunen'}
        ]} />
      </div>
    </motion.div>
  );
}
