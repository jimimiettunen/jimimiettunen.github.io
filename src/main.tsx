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
          src="https://lh3.googleusercontent.com/pw/AP1GczM6ElDKvA_pNxpo_KYzdmsndHo6SoWGMXiXdlE150qlhAvkYTERvgkc9zHDm-ANEJFa-uveAvKgB5iYUzhedLqVK3SdmPLNP-LFRcL0oll0JOAcf8stOV9kEk7VguohBF9shrEmqeKjYWbjFn-hFgsuoQOGTF8JEn2385VxSuvOH6bjLw197YzU7r-hhDXajxtM7qi8D-WoZvhZW_m0kVupY5NQrMAMI627ykOF_LYz_bK_iftcldNf6npO8H8C_eBLaZ3MTUW825NRyRiNMt_WdptL6xv5TijmiBLrxdkV9MwUJYFdi6FGjdBVldEMQFPnj4HJPctFGApgRWULo_FAi0va8rqywdkYDTtDyOxGtXHFPEkZdJCm91abV22_CG4yBiMp2s6ym37sHumns3F5UJe_N2yKO9fk607fpDwg1DWqou_1rwc6noO-Zptq3wiFo5FWq1jFZP02BgWASHZ73prs6clDMaNML2SJDNSSi8OwMnjK6KyyPMIwRm-JtrL-yUSrMuRyf6Q8PcDXfXAdlIfxxSaQovFaW16BQbBn0v844INEtbJ3ovyxgm25FygS6GQ2ulmbrcsYlLDSmqP0u0ZuWtcSxl4XHp8W-yIQCX0pKtbK30QoXdbDJFEOw6R6QWTCNW_qV1AE9aTecIcyV44KgRJUk1F5Dej-o_U5gyZyaSwE_zgsd1N7m88b_wcJrDPCI13dWHvYlWi7Ecsz6cn66AGv7yFguz9ZceBjR6gDZnXVRTeCmHtwPF70Mxk1Ciz4Km0jN2ZbbxjTpQI_5mRS28Gc5UyNbvCohlIZYD6ikfcBaE-PDj2tEdNWDeDV7aK6Ov3G79ufUcIim3mJIjwNkoNC_ggSUB2BmFw5mOIVFFHpe0BtVU3AbRFWHzDNutVicbAUtMGxL7ujdHoMCKxpHb-jJVl7HYHdsDJtXaucVKIHtCfUz27tgBEgo_-SCvhUgq5vHpZnhJno5SFikUnDsexcKYME7nfLlKG8pGUJ73-7W3nVd9EPEvRA9QpoWXDGSFS0qyAbTWPrY6Q_tYW801A=w2998-h2000-s-no?authuser=2" 
          alt="Home background" 
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
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
