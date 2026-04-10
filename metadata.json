import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ArtProps {
  detailId?: number;
  onNavigateDetail?: (id: number) => void;
  onBack?: () => void;
  key?: string;
}

export default function Art({ detailId, onNavigateDetail, onBack }: ArtProps) {
  const artworks = [
    { id: 1, title: 'Work in Progress', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', desc: 'New artwork is currently being curated and will be added here soon.', progress: [] },
  ];

  const selectedArt = detailId ? artworks.find(a => a.id === detailId) : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-[calc(100vh-80px)] text-white"
    >
      {/* Fixed Background Image with Fade to Black */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczO3Ux1dtQfY6RddfqQMrB2Z6E1i4AcNeI_qKxjDTXN7QOJtrBvPhoJorMi_vZaYg-fNeotNC65vqaCcfo5qJ4ghVyd4Z_61Z1s-0zXjPVM2y541KXcT2yHPSsdlG29z8vkR6OmfSoWUGOlEkjtBMCe75iZ-pFyvLvKIVxupOiXtY3at5USEeVqAJl71Ozylu2_DOO0J6eD_3S48sC0ufpn3V8ho7DE50Cp_fEozp52ZogbqgEqM-mzgGWbelsjtZiGa2aRJoG27gyQF4tmdjp7jE1tbSbCg9sE_nTzIhpa-rLmD2Yw8HLcxwf36l158U6IKF_vdkwOdB7jN_b-Uy0dPeDK-8quQj4KZqe11RaHqr3FpURKeK2YqY6_f4iqTK9bvLRCnFc_J2u7GE96pveC2gQOZCyvsAugErp08IHtkw3HLNFTczijcwXvfAQ8jm2hk7cJS30vjMz6fkKiAGyXb29yH0HyjilNN_bgCI4eudRyb1bV13jFB9J7PN4j-FedFLmBXotQZFYUJDQ5KlewvY_gIZRSLCnMXs6kfNdHhZf1oyhw0OlWGwdG71ds-AxBUB-vXuIf2r4wYj3XnsjrDPfYF9_cJ9WZv3RZM_TYYU7XXHUdOGObIkzbyAi-XGcFXhrXalEYB8J5yKWORGrgJ6or0odZfIb2jvZkmapb1yHubwi1W2YDt3TX3rwASn8wJoA3XDas64PKYOBvgu5BZK7dc1tXn_NblJpgeTaNuXi3rKbBesIEkboXFWrStsWZQx4UpLDJ_bXsa-a0ze-qhaP8cfbJN2DaTeqUjUA58lUQvcWWs4oVit3JazJZEpub4KSLmZqjrF84KvpvEd3LT5zfPffCu7tOYY6XbMdGn0XfhqyUHVIzHHKu3ECFSsT0mvCXGFEaorKJ7zlb8rgNViV0H4GN8RwOT419_9HtZlnwyyRR88REq1c1iUqvvdMhFg2mNhlQ-rN5LzlaunN88Jntq6rmSO7Gg65hv0gcU4NL3dm8pBpnqSW3XxOGn69lW4znHLD-Xz1QdTjvzE64wTBAL0Kg=w1200-h1600-s-no?authuser=2" 
          alt="Art background" 
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        {selectedArt ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <button 
              onClick={onBack}
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-12 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Art
            </button>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">{selectedArt.title}</h1>
            <img src={selectedArt.img} alt={selectedArt.title} className="w-full aspect-auto object-cover mb-12" />
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <p className="text-xl text-gray-300 font-light leading-relaxed">{selectedArt.desc}</p>
            </div>

            {selectedArt.progress && selectedArt.progress.length > 0 && (
              <div className="space-y-12">
                <h3 className="text-2xl font-bold text-gray-400 border-b border-gray-800 pb-4">Process & Progress</h3>
                {selectedArt.progress.map((progImg, idx) => (
                  <img key={idx} src={progImg} alt={`Progress ${idx + 1}`} className="w-full aspect-auto object-cover opacity-80" />
                ))}
              </div>
            )}
          </motion.div>
        ) : (
          <>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-16 text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">Art.</h1>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Explorations in color, form, and emotion. A collection of visual experiments.
              </p>
            </motion.div>

            <div className={`grid gap-8 ${artworks.length === 1 ? 'flex justify-center' : 'grid-cols-1 md:grid-cols-2'}`}>
              {artworks.map((art, index) => (
                <motion.div
                  key={art.id}
                  onClick={() => onNavigateDetail?.(art.id)}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group relative overflow-hidden bg-gray-900 aspect-[4/5] cursor-pointer ${artworks.length === 1 ? 'w-full max-w-md' : ''}`}
                >
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    style={{ filter: 'grayscale(30%) contrast(120%)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <h3 className="text-3xl font-bold text-white">{art.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}
