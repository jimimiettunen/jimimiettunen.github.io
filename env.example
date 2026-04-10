import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ProjectProps {
  detailId?: number;
  onNavigateDetail?: (id: number) => void;
  onBack?: () => void;
  key?: string;
}

export default function TechnicalProjects({ detailId, onNavigateDetail, onBack }: ProjectProps) {
  const projects = [
    { 
      id: 1, 
      title: 'Personal Portfolio Website', 
      tech: 'React, Tailwind CSS, Framer Motion, Google AI Studio', 
      desc: 'A responsive, minimalist portfolio website built collaboratively using AI-assisted development.', 
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop', 
      fullDesc: 'This portfolio website was developed using React, Tailwind CSS, and Framer Motion, focusing on a clean, minimalist aesthetic. Instead of traditional hand-coding, I built this site collaboratively using Google AI Studio. The process involved iterative natural language prompting to generate, style, and refine the React components.\n\nDuring development, a few technical challenges arose. First, integrating images directly from Google Photos resulted in broken links due to Google\'s temporary hotlinking URLs. This was solved by uploading the images directly into the project\'s source code for permanent hosting. Second, deploying the raw React code to GitHub Pages initially resulted in a blank screen because the browser couldn\'t read the uncompiled TypeScript. This was resolved by implementing a GitHub Actions CI/CD workflow to automatically build the Vite project into static files upon every push.\n\nUltimately, this project serves not only as an archive of my work but also as a hands-on exploration of modern AI-assisted web development workflows, built with the help of Google AI Studio.', 
      progress: [] 
    },
    { 
      id: 2, 
      title: 'Custom FPV Drone', 
      tech: 'Hardware Assembly, GPS Integration, Betaflight', 
      desc: 'Built a custom FPV drone from parts, utilizing GPS for automated flights and manual FPV control.', 
      img: 'https://lh3.googleusercontent.com/pw/AP1GczNoDIvEXIzXOs1HAQrA_0Kh4eAFsEhkpEBBO_AJQIklRo0VGx4sWadSyt_D45cdpKpgEcUxMbzvUbYu9cIr3cFXe-qTvwvPjDrCKQqS7EX6SHbVTWqrGvGB6GIzSIyvmvYSylK9qD1Y9huVZPcn4znCVAGqcGb4hwrxxNz-SYRQf7oLajnbhv_lp1_VkpuKw5ofoyDRcs88Qd7WMgmZ32HTmjnqDdj_SUmhIGSiNRHLZ0XaO4tXBYJE1v5ZNLwAgkLvrNCVGY3cQrMvC4plPfIBG8fH1Dkc_Mqh5rYuPUPBzxz8uehiPBuvr6cnZ3D4UX8tFBkzEWZ5M_dQ5Ybw0BLwyYPhvWUIaT6FoHfYHp_jjzvZOk1bpiC7XUaYDUkEmWUxtoRMnijJfK9MiPzZe6DZOEmj7oDajW8IFd2_khppsnzffVe00srlVbNlWqFotLsKaXYIe9og82d0p4T13037IjBh5HC-miELdhkyVqBoThNvP9cz7dah11RVS4Pt2GVJZjfdCYcU9GMRNo2H05pvzhKIOBsz99AqwXf5KsAEzswNVzAS_hWVJQSl8p8fQRm5btCYOlpcefujK1W5DX-mzXkWpIRxq7Th1hFCmOarXtr-hIUbdPqr1t14aMRvZ0LqM-DLO1f5l-sl0gCe60qdpVQQoQ-ozxSAUeZlZYjT0daFbzF6EhUPhLQBMuacdZT4Vjfw3FfobUkxsHB8RiEg3mUBijTDC-247dixjROCuWmyRs8EBPlpKzo17XCpnu6lZ9oRxYoRv0-rCPAYize-ngYnspJxziIqqWTufZm3tZ-1ZpMcMSblhFYFmSvMWzCXX5G66_x6IpnbxRG5CbJV6wDnggqDVzQz3WcBcR8OS5DMtGrbQ863tukC5ClXdtLDyRo3GlYedDxfq36wMhfFnsT-cXjrWxFTNx4-bibaUZqwzH-dXkmp6V81YvL3XYB9oqrtqm50InD7xRzBsDY2=w1128-h2000-s-no?authuser=2', 
      fullDesc: 'Constructed a custom FPV drone from individual components. The core idea was to utilize GPS location for automated flight capabilities while retaining the ability to use it as a normal, high-performance FPV drone. It features versatile attachments on both the bottom and top, allowing it to carry a film camera for capturing scenic, high-quality photos, or a GoPro to document action-packed flying.', 
      progress: [] 
    },
    { 
      id: 3, 
      title: 'UR5 Robotic Arm Lego Builder', 
      tech: 'Computer Vision, UR5, Pallet Wizard', 
      desc: 'Automated Lego building using a UR5 robotic arm and computer vision for piece recognition.', 
      img: 'https://lh3.googleusercontent.com/pw/AP1GczOjOBXZIAVmFJBJyXi-U56d-2uQgbX7k3E931xFsPOxvoxgp87UpEf9U7KIMvsiLZerrnd7lQN6iOPZ1SNuHkPb18sVC5Nb6Ytvqa31WN7nEoIjJk4bZ5scwwAgR1y_gMyGwMmTDK1ra4Qr498YPHvVJMQ_G2m22dSzuWQd3KBf8UhWo5sFGN0GQiPISV6ZxtLaPjkG97xXf5JwFQpGoO61c6cPdWAoQp6tgbKekpp_GKZDa9qrFWPRYUUY0o76QoM7soKEILblpgL6V7SS3rd-Wv9ZkmXdqmdIDWlcgXHLz-Tw2bpmmTsrMEneAqLmUECqzHWM8LKCNQu9GNTHfXqkvOX9QnkQhwlcosJJjwDKUf8t6I1pk9Pg5OYi67JbDBaWljdM5MOIj_MNzj8zCeSmaV0VG8p22xCCeAGFlGHSvqTf1hu5XwSemBoABV8dQzfuhobWikVnAYl05zrkDMza11ThD5Jvt_ScaZiJnqt1sdM8l8sonVAlStjRS7P8KldXWLmcWvmVsnVPbd4hjLJMNjr34n-3qp6qVr2tg_nNeL43QXNtYb1AiCsN4YtyGtReSLsLOgvGrpnnvwW8HChbCrtfME1EkBPph6ximqty1SfrqaRpODGHq6BQ9dvHilOt5rdqvjvunAAAsoqShvr65ThbKjIkJRSsj9V-ha-5KVSPoJSbeBjobUrvLCj6ZM1rj7rkYc82wA6GQN8olYnOOl-5o4o9Pdm2Sy6ANdZmUhSMC3CZJpojQtSmTaZTj2oCxXNlewctjGmbCInao3g4DrmLs47cfa8yC6j4WD-nEQ1V_xwgkF1lkhz78yovuLrsb22J-jjBSoUMWwF7y4noxetOmo0bCVi6pFi6Km9E9p0mQ_sPyJMP5jcOVzqtGtag2PzAuPCE2NXk3dBnjM3lP2_MGbo7dkIcWOsVzkhmmQVvoH3UJI_MtVt3cxurBvfdrYDPPufdxk4A9FavqxYQ=w1500-h2000-s-no?authuser=2', 
      fullDesc: 'Developed a system utilizing a UR5 robotic arm and computer vision to automate the building of Lego structures. The computer vision model was trained to recognize and select the correct Lego pieces provided to it. As an advanced feature, the system uses the Pallet Wizard tool for automated building. It checks its memory to track which pieces have already been collected and continues the predetermined build automatically. The project also incorporates human-robot interaction features: the program prompts the human operator when it is ready to continue and includes a failsafe mechanism requiring the human to verify that all pieces have been properly placed before proceeding.', 
      progress: [] 
    }
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
              Back to Technical Projects
            </button>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">{selectedProject.title}</h1>
            <p className="text-xl text-gray-400 font-mono mb-8">{selectedProject.tech}</p>
            <img src={selectedProject.img} alt={selectedProject.title} className="w-full aspect-video object-cover mb-12" />
            
            <div className="prose prose-invert prose-lg max-w-none mb-16">
              <p className="text-xl text-gray-300 font-light leading-relaxed whitespace-pre-wrap">{selectedProject.fullDesc}</p>
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
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">Technical Projects</h1>
              <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Software engineering, system architecture, and complex problem solving.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  onClick={() => onNavigateDetail?.(project.id)}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative overflow-hidden bg-gray-900 aspect-video cursor-pointer"
                >
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 font-mono text-sm">{project.tech}</p>
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
