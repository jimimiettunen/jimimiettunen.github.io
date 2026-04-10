import { motion } from 'motion/react';
import Footer from './Footer';

export default function Experience() {
  const experiences = [
    { 
      id: 1, 
      role: 'Undergraduate of Robotics', 
      company: 'Tampere University', 
      period: 'Aug 2024 - Present', 
      desc: "Pursuing a degree in Finland's only dedicated robotics university program. The curriculum provides a strong multidisciplinary foundation, blending automation, computer science, and electrical engineering.", 
      img: '/images/robostudies.jpg'
        },
    { 
      id: 2, 
      role: 'Patient Transporter', 
      company: 'HUS', 
      period: 'Feb 2024 - Aug 2024', 
      desc: 'Managed patient transport within the hospital environment, prioritizing safety and high-quality customer service. Completed specialized emergency care training to support medical staff.', 
      img: '/images/husexperience.jpg'
    },
    { 
      id: 3, 
      role: 'Non-Commissioned Officer & F-18 Maintenance', 
      company: 'Finnish Air Force', 
      period: 'Jan 2023 - Dec 2023', 
      desc: 'Completed the Non-Commissioned Officer course at Ilmasotakoulu and Lapin Lennosto, earning F-18C/D fighter aircraft operational qualifications and team leadership training. Performed daily inspections and maintenance on F-18 systems in a safety-critical environment, collaborating within multidisciplinary teams and strictly adhering to technical documentation and quality procedures.', 
      img: '/images/ncocourse.jpeg'
    },
    { 
      id: 4, 
      role: 'Undergraduate of Electrical Engineering', 
      company: 'Tampere University', 
      period: '2022 - 2023', 
      desc: 'Completed undergraduate studies focusing on electrical engineering fundamentals, including circuit theory, electromagnetics, and digital logic design. Developed a strong analytical foundation for complex problem-solving.', 
      img: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&auto=format&fit=crop' 
    },
    { 
      id: 5, 
      role: 'Open University Studies', 
      company: 'Aalto University', 
      period: '2021 - 2022', 
      desc: 'Completed comprehensive basic studies in science and engineering. Coursework included university-level mathematics, physics, and introductory programming, preparing for advanced engineering topics.', 
      img: '/images/openuniversity.jpg'
    },
    { 
      id: 6, 
      role: 'High School Diploma', 
      company: 'Helsingin Kuvataidelukio', 
      period: '2018 - 2021', 
      desc: 'Graduated with a strong academic record, achieving \'Magna cum laude approbatur\' (M) in Physics, Advanced Mathematics, and English in the Finnish Matriculation Examination. Developed a balanced foundation in both analytical sciences and visual arts.', 
      img: '/images/helsinginkuvataidekoulu.jpg'
    },
  ];

  const skills = [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/white' },
    { name: 'MATLAB', icon: 'https://cdn.simpleicons.org/mathworks/white' },
    { name: 'Simulink', icon: '', fallback: 'S' },
    { name: 'Proteus 8', icon: '', fallback: 'P8' },
    { name: 'Microchip Studio 7', icon: 'https://cdn.simpleicons.org/microchip/white' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/git/white' },
    { name: 'Microsoft O365', icon: 'https://cdn.simpleicons.org/microsoft365/white' },
    { name: 'Google Softwares', icon: 'https://cdn.simpleicons.org/google/white' },
    { name: 'Excel', icon: 'https://cdn.simpleicons.org/microsoftexcel/white' },
    { name: 'Franka Desk', icon: '', fallback: 'FD' },
    { name: 'Visual Components', icon: '', fallback: 'VC' },
    { name: 'Unreal', icon: 'https://cdn.simpleicons.org/unrealengine/white' },
    { name: 'SolidWorks', icon: 'https://cdn.simpleicons.org/solidworks/white' },
    { name: 'Fusion360', icon: 'https://cdn.simpleicons.org/autodesk/white' },
    { name: 'Onshape', icon: 'https://cdn.simpleicons.org/onshape/white' },
    { name: 'Word', icon: 'https://cdn.simpleicons.org/microsoftword/white' },
    { name: 'Krita', icon: 'https://cdn.simpleicons.org/krita/white' },
    { name: 'Photoshop', icon: 'https://cdn.simpleicons.org/adobephotoshop/white' },
  ];

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
          src="/images/experiencebackground.jpg"
          alt="Experience background" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4">Experience</h1>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-32"
        >
          <h2 className="text-2xl font-light text-gray-300 mb-10 text-center tracking-wide">Proficient In</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div 
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 flex items-center gap-3 hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default shadow-lg"
              >
                {skill.icon ? (
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-5 h-5 opacity-90" 
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none'; 
                      e.currentTarget.nextElementSibling?.classList.remove('hidden'); 
                    }} 
                  />
                ) : null}
                <div className={`w-5 h-5 flex items-center justify-center font-bold text-xs text-white bg-white/20 rounded-full ${skill.icon ? 'hidden' : ''}`}>
                  {skill.fallback || skill.name.charAt(0)}
                </div>
                <span className="text-sm text-white font-medium tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-32">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-gray-900">
                <img src={exp.img} alt={exp.role} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-sm font-bold tracking-widest text-gray-400 mb-3">{exp.period}</div>
                <h3 className="text-4xl font-bold text-white mb-2">{exp.role}</h3>
                <h4 className="text-2xl text-gray-300 font-light mb-6">{exp.company}</h4>
                <p className="text-lg text-gray-400 font-light leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer 
        theme="dark" 
        credits={[
          { subject: 'Orange robot', photographer: 'Jimi Miettunen' },
          { subject: 'HUS selfie', photographer: 'Jimi Miettunen' },
          { subject: 'F-18 portrait', photographer: 'Anne Karvonen' },
          { subject: 'Electrical circuit', photographer: 'AI generated, Gemini 3.1 Pro Preview' },
          { subject: 'Chalk board', photographer: 'Jimi Miettunen' },
          { subject: 'Graduated Jimi', photographer: 'Kiia Miettunen' }
        ]} 
      />
    </motion.div>
  );
}
