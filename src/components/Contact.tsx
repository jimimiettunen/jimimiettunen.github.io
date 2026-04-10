import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczN4nPCp59wXWNAeGCXDkFUKy0Rux-mK7llOqnV9VBCsZ4D-H2k9uq8X0QiQqgSmbli_nNVBagoU6CgbBgW2hY8woBytR33DVfBl0htOkuWdawJNF-3mtPD2p4aredzTG59biGn7QbKoRxhbW-5Lh06lyNq8Nz16XOteeXSG1L8gvp1qOysVml077Rkkis05h1jfXAvmElb8r0lflsWmTywo3bLcxAOETK5YB4X24Y11SxxkKNuTk7zCpLyJx5FQkhmR_--UPJNnMf0qngmRVqz66BiWSmfDOOnajCnenKOOlOyZzqfON39tqJehh7s_3H9Br5MZTfETgSg8xWcSggAF_QhsvY-KCVUoJ8CxEIzGDQptOAxcbypu8eEo9QHaVccj-VasxlwSwUJ6ysAsTn_wSmOTFCbTkOOgRAWyNANR3-b6F002fOS-UXJAQaaE2E0dtZDwxcKYxPJ--ubvkEB3wI7zARzIl9ijCW7gpNa75GgEreI4BlOajPDjczHph7nJ6zoDbiK-bSZ-9Qxj8aV3TCVsnIu_UG0KCpqY5W23pwP0U9iesQQpcBqpVCvoFTEsZNMEVSmIsFEENWUBovP6D1YGBgwDcoRKuqMeHfVvyxpBAGAKmt3Wf1VgOXNowtWHgklUiRriU3wBYXuVN6t9o2GF-u9DxD6vUc-yUgi9JRXUuMJuhwSj1GMidvO2NASDD82Sp-MhcNhJsJ85VAFB8_aVTD811uzO7u62I98KVjwjNGLW4Gy1Ao6N0Jz13-lqDadDYsfvE1BBPb7gRUGqwBd0DjrUFbUkzfUhm-AM_Gvv1ZMae9AF0u4PXS7PV1smw1rcdUdrRAF3mxRsWhYRcWLiissjx8baODHzoeelrAKoB3yM9qK1tU0mshOCk8kkGTBDAaLfQHaG1ZCrD-y7fxtfYHk2E4XdVbIzoZZukmOnkH9N-DTijzlVpYRpzY3zjfK2O9E0l07awfP5wsvD=w2000-h1500-s-no?authuser=2" 
          alt="Contact background" 
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-black/70 backdrop-blur-sm p-12 rounded-2xl border border-white/10 shadow-2xl"
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
    </motion.div>
  );
}
