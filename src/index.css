import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ProjectProps {
  detailId?: number;
  onNavigateDetail?: (id: number) => void;
  onBack?: () => void;
  key?: string;
}

export default function HandsOnProjects({ detailId, onNavigateDetail, onBack }: ProjectProps) {
  const projects = [
    { id: 1, title: 'Work in Progress', category: 'Various', desc: 'New hands-on projects are currently being documented and will be added here soon.', img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', fullDesc: 'Detailed descriptions and photos of my hands-on projects will be available here soon.', progress: [] },
  ];

  const selectedProject = detailId ? projects.find(p => p.id === detailId) : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black min-h-[calc(100vh-80px)] text-white pt-16 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {selectedProject ? (
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
              Back to Hands-on Projects
            </button>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{selectedProject.title}</h1>
            <p className="text-xl text-gray-400 font-mono mb-8">{selectedProject.category}</p>
            <img src={selectedProject.img} alt={selectedProject.title} className="w-full aspect-video object-cover mb-12" />
            
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <p className="text-xl text-gray-300 font-light leading-relaxed">{selectedProject.fullDesc}</p>
            </div>

            {selectedProject.progress && selectedProject.progress.length > 0 && (
              <div className="space-y-12">
                <h3 className="text-2xl font-bold text-gray-400 border-b border-gray-800 pb-4">Process & Progress</h3>
                {selectedProject.progress.map((progImg, idx) => (
                  <img key={idx} src={progImg} alt={`Progress ${idx + 1}`} className="w-full aspect-video object-cover opacity-80" />
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
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">Hands-on Projects</h1>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Physical creations, crafts, and tangible experiments.
              </p>
            </motion.div>

            <div className={`grid gap-8 ${projects.length === 1 ? 'flex justify-center' : 'grid-cols-1 md:grid-cols-2'}`}>
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  onClick={() => onNavigateDetail?.(project.id)}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`group relative overflow-hidden bg-gray-900 aspect-video cursor-pointer ${projects.length === 1 ? 'w-full max-w-2xl' : ''}`}
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 font-mono text-sm">{project.category}</p>
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
