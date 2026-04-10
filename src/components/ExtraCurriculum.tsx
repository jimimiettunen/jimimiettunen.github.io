import { motion } from 'motion/react';

export default function ExtraCurriculum() {
  const activities = [
    { 
      id: 1, 
      title: 'Excursion Responsible', 
      organization: 'Guild of Robotics',
      period: 'Jan 2026 - Dec 2026',
      desc: 'Organizing and managing technical excursions and industry visits for the Guild of Robotics, fostering connections between students and the robotics industry.',
      img: '/images/excursionresponsible.jpg'
    },
    { 
      id: 2, 
      title: 'Head of Events', 
      organization: 'Guild of Robotics',
      period: 'Jan 2025 - Dec 2025',
      desc: 'Organized and managed events for the Guild of Robotics, fostering community engagement and coordinating technical and social activities for members.',
      img: '/images/headofevents.jpg'
    },
    { 
      id: 3, 
      title: '3rd Place - HVAC Control Hackathon', 
      organization: 'Koja Hackathon',
      period: '2026',
      desc: 'Designed and implemented an HVAC controller balancing energy efficiency, thermal comfort, and air quality using a DOAS building model in EnergyPlus. Competed to achieve the lowest total cost combining energy and penalties.',
      img: '/images/kojahackathon.jpg'
    },
    { 
      id: 4, 
      title: 'IdeaSquare Planet Pilot Program', 
      organization: 'CERN, Geneva',
      period: '2026',
      desc: 'Participated in an interplanetary exercise applying systems-thinking and future thinking methodologies to solve complex problems. Collaborated in a multidisciplinary environment inspired by CERN physicists and engineers to design a sustainable society for a crew of 10,000 venturing to Planet Y.',
      img: '/images/cernvisit.jpg'
    },
    { 
      id: 5, 
      title: 'Tutor for New Robotics Students', 
      organization: 'Tampere University',
      period: 'Spring 2025 - Fall 2026',
      desc: 'Mentored and guided incoming robotics students, helping them integrate into university life and providing academic and social support during their first semesters.',
      img: '/images/robotutor.jpg'
    },
    { 
      id: 6, 
      title: 'Tutor for INTO Exchange Students', 
      organization: 'Tampere University',
      period: 'Spring 2026',
      desc: 'Will assist international exchange students with their transition to studying in Finland, organizing activities and providing guidance on local culture and university practices.',
      img: '/images/intotutor.jpg'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 min-h-[calc(100vh-80px)] pt-16 pb-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-24 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tighter mb-4">Extra<br/><span className="font-bold">Curriculum</span></h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 group overflow-hidden flex flex-col"
            >
              {activity.img && (
                <div className="w-full aspect-video overflow-hidden bg-gray-200">
                  <img 
                    src={activity.img} 
                    alt={activity.title} 
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${(activity as any).imageClass || ''}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="p-10 flex-grow flex flex-col">
                <div className="text-sm font-bold tracking-widest text-gray-400 mb-2 uppercase">{activity.period}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{activity.title}</h3>
                <h4 className="text-lg text-gray-500 font-medium mb-4">{activity.organization}</h4>
                <p className="text-lg text-gray-600 font-light leading-relaxed">{activity.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
