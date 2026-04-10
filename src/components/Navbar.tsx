import { motion } from 'motion/react';

export default function Experience() {
  const experiences = [
    { 
      id: 1, 
      role: 'Undergraduate of Robotics', 
      company: 'Tampere University', 
      period: 'Aug 2024 - Present', 
      desc: "Pursuing a degree in Finland's only dedicated robotics university program. The curriculum provides a strong multidisciplinary foundation, blending automation, computer science, and electrical engineering.", 
      img: 'https://lh3.googleusercontent.com/pw/AP1GczMQFTbpab1lPrpd-YSKVIEpEtWtb9b_z4MYARH27yWIJhqeAfqgIa4gukLXviYnq2tnUQGNlZfcVn5dTAKYEr6VbCDo1bqYpQ5AKAazGN8aQKrio4khFWyPCQMFl8Ami3EporTQlwUZqxNbRRdKfpLPXUnriMfngSGgKQEPXgApu-lTpXtZJoa0yMsGSPLRpRS9LqPFq3toqNzKOLzdgAMGs76buucxVKOv_hyk5SOxCvhJw85JFEWV_7wu3SEu6dZmzBHN95tri7DJCbIuYRrFSH4MZLg4wpTr3GcaYuhoxXK19IXmdA1jMPi3FdBQFPSanY8-ooNfR_2O7dt_fFp2wa81kmPGJikYIcOUPDkL5oWxuLNRTUUwD5y7liPZGkfVvPDV2fLIEKYDpNtQYB-yBULKeLXbAeNnLbM1bPvXL7R32xFf9aqSRayauLpxtepRd8YSVhYgE324c6wQ3LQW-v8E65-cRUekbb743N6q_pBWYNZrjLP6VKZ8WdM0wZ_N2Q-X8weGKDU3_cW3fSPVqcywfA-YNo4t56Gfq33qZsZTyFVEtOqFXPKsP1TjatqHvMPsbXezJc4PPo2E3LU4QIaNHpvjGoN-7d2LhTx8_lWa1VyoUnTgy5iltRUQeh0dBUjKD_FJji3cThf8EoK8rJ8UEKXefHDmcE8NOhyw8BPlYous2CIOXw85_Y_PDewW1owUPuj66LjJSXFknrX9vH_Iiw-i3iVdq1Gz7bgp7JPhSN94_cII0BqwMvi8coQHT3UO-CGoaOYqH5L_bdMTdz6w6zEOrdmxrF9ZlnEph_YH3kE6ODLBuGyzc3gIIRyrDe-MQHaX9nOtsissasGwd6ZuNB71SOK3_1lSDYhBphGXGbE0BoimZqKTJupKZw8aQJ74DuYIHLiarTuHi6pAEI2IRV8Q2bFd66I58zHMa4aLJo9Su8hT52Gp89dVqhjr_pRqq-e-rPgdDRJdtrFz=w1500-h2000-s-no?authuser=2' 
    },
    { 
      id: 2, 
      role: 'Patient Transporter', 
      company: 'HUS', 
      period: 'Feb 2024 - Aug 2024', 
      desc: 'Managed patient transport within the hospital environment, prioritizing safety and high-quality customer service. Completed specialized emergency care training to support medical staff.', 
      img: 'https://lh3.googleusercontent.com/pw/AP1GczOoQrrFde2IqmTWGI44Q_FgM7F5zcr_fCfGDIxL0tKrj_K8TpE5-I7gDl_frorsmxc3vjUWM1gQS-rRBrHaJbloUazftd7f8nDRFYELayh0hC3N5IKkRJmIQ7NRAkB4AUhEIdMTowbMg0NTJCBAu4VuZVML2wYw0er6Pb06Cf1jYEJYXUqijO5akyLXCkP-kRfldvM8n4O5Gzu9qYXz0sgWew3ZdW-v6YdAOF0fRB5ypJVRZ6NtqiT22sfPk9OdwAKUo142BSs1UwwxX-MSo9OQh8X8sWgvb51TFNo90WD8-3gTsn5PpHa0SHgILYRIctlhwjbc-1K2R0Qxva4SxEQOGYI1q8AoBsrwqNNmFMQ174czjnZYV_3vjQtc8oF3ntbuSoc5u3HueS0yhnP7O0b283r8kvpWx4AAxSz1YjhRS9nRP2XkLQ4S-FIWY_pe1ldRRFWAasUo8KvMR56uucD177EzJsieSEeW6obnB3RY8SoMTFHy76xHUADkaTlxCbOFDGC5k_dqLwENgsKBBzuCsC7mDFZUjOcBv3XHe0ABVMGC3VrEv-QgzKYo2GIdqUV1bIQLU7er5RnKn26sLj9R3IFgaKJwOFACLJyjkOVom0RQhObJaBbEj-UbtABIa7_k-28auNNcG9_aE_SgPqMpS9cI_QhALFK4zSd4cAqIEBD_dVATvju-rPr5o7-aswuaWIrfjyC7Uga_X9PbsTog4L5oHGcim2XhGCDcB58bxI6DEZ1FNcvrHCBY0ruQcpyNZs48c6NdAl6wMrfHTOAaQNGuXZs949aVnFFSGnayY8hv0l-atXuS5e69oBSCknuP4f6ugyEYTRylBnmoOrX43NnWmKs0Fs5ZNMN764HnZgQnGmDVgOKL0nMI5LbV1E2snMaD9jqkmeqCr5NelbBkFwuT5uugfUjEcBlSG__D9rkXPBuPiTNba6i-dmd2Mv2y3Zn3LCe2spwl4xckCmUm=w3256-h1836-s-no?authuser=2' 
    },
    { 
      id: 3, 
      role: 'Non-Commissioned Officer & F-18 Maintenance', 
      company: 'Finnish Air Force', 
      period: 'Jan 2023 - Dec 2023', 
      desc: 'Completed the Non-Commissioned Officer course at Ilmasotakoulu and Lapin Lennosto, earning F-18C/D fighter aircraft operational qualifications and team leadership training. Performed daily inspections and maintenance on F-18 systems in a safety-critical environment, collaborating within multidisciplinary teams and strictly adhering to technical documentation and quality procedures.', 
      img: 'https://lh3.googleusercontent.com/pw/AP1GczPWBA32MJX43CIg5n9K1IlKFHReNkDXDQP7yWqlH44xw48YQfe5wiKMVtlU8dBv_BfYLSthdje5xQkBhaTxehCBZoNV0kYXApfte6yNL6IWisT526DiYAPqeJ1u0DtJvqN7Xhy_YZwxPaFl7dsW2Bt3jBkhu69oUYhIS6pGwt7n7IxDc9tra1RiajmhXSfej2TJXmm0smCo2vrjo77YdK3FyQ9AXSoqM8YSykRBRtz1Lw5kAp86PFeKMuF6UGwEjWoLeQmPOwWPdIs8NcyWLwkqVIdCk2Bl1HjjohiViLAwlutCSOC4hPPrt8e4JeKd6XGNLn5ZYPM-bDBgVJs1ln5LQIgYFVpvWix5wfbpX8RHl0u0HVVvjb2hyeiQxQyP53uNpW1A9pe6oX8sSM3j9Sh5VxDtXE_xw12Hv5hSjtiC_Xc-15Mh1jnZT46_JizUf6tIZrmePrPsHH4-F8GXYHqDcg57oY7Ec7o_cOWSs4RGdZKrtvHc2uE0rRPVc7h0BiAyRH5Qv-ZRWFFaEGnXstTHe8RO3SvIdfXV7mMpFG2Led3PRYLvFE8Z40WmYyHQSDK25gA94SAma_hJL3vi4yOS13CcNqz5s_Etvc996hIAEidTdjxwdnrxvNOzheGZvwmty6Jdz5YvFy-SJCdZ9A-ZilUpQSm2wOTjr9vXT9EY0W0l3Jn7vllju4U05vXxnw_CRYMddDdBP-SjG3YUGL3wjE-xyjc6fBBWjj9i2AMQhuG69Ofv2Q4ifcFqqRqTi7tP3kbZhzU_rleUoVkK_qnmrhPBDEncooPhosgfnCs4U0HjlsVI1akDDV4lGgDlaB7VGQG6iUQlJ6l2cRZjcxi_lIIyLbB2J3VAbo1MLU6qHTGF94tjuLnsei1eug-0tqZlro-FIGZgsZJDHItt68cLshLx-2rHrB9dWh-g_7mvPkjrYsFMQzqV9Pmz9sHsjPcgAfv13vyg0Nst8tNwvkdY=w2998-h2000-s-no?authuser=2' 
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
      img: 'https://lh3.googleusercontent.com/pw/AP1GczPngkVWc6X3CUePppx7iLtRgxYn78IVH917Ro2GKqXACZo3cB7bOM3Ets8mvYk3KH71pdBZKKoZYOo7qYL-Z6957zTa1AEwoJwXPU5jRkLfObmuassxou4ctRekT3vTmL9WV3clcPU_Xj5JOWvZF1fjG0My-D2qerKONUwFVy6BZxDSHZUmsH0NSfcgC102tyW7gFy5FJGR8jZ4Au6m3WvDIYWKAdHU9vsPs8Ge3Elu_dm7mVzo71v2uASPgPtWGQAwbYNdED9UOwBCiadU_a3RWHPt97-G4Ec1WXePMdwmzQ22--ZRdvnsc9lYvBaUy6bglbDl0YKK4Smiz6YYjcy1tz4HAW8caOz3vGWg4zg3MlSes0HkuChAJIR5vQwgrnXGLno9ztzMw49ZdTclAiTPBUwQC5naP3PnGx8QMPaT8KNbEeiyWW7-bG09wcfUtse2T2DhVRrR47am3I2at_31Tz7l2ZjiCdy9grZZmnoEfJ5SHhAJmPDmO8QNI4Z1Obb6PZcRAEONCxZNlJTXphBz871KBTvXONY2fZ3igcxn9A4ZK75ATGkdjDVg_aA6_YIbGM19NJc4MkZ8OOaKUzfd1HDHQdXBQL6TO8SzKqyrUNac5edaJSmYifuhmiiHoRKvAtd_x7ZbmE-kIcXPktFKHXlrdRx7zWAySHyFoBDj-JUoSllW9ur5j-mqk1x38HyRDFr_m0-gyvqT0wtwMk-ozb6tysKrMPtbwH7kzZEXrQMZnJY01e-j37UCqeYQ4xTHkzYT8gyKwKehXQByCvpRvaKztkyCp-QUS68GPwUMM9p6P_74mvMQFIcVUGfhgOJDa4QRnVMJrbE3HWO4jN0TirT6p_TsUT-bco3aAZKmU1LWY_6kOqWqKtvVGI7gdSiT_bLYHu15m4-tooyCLyH8ChWdQbj92KAp--G42Y7c6Jd8XkSQrTK8G1v_-y48iyrXaViiT9gtjg5fiXP9lSA0=w2666-h2000-s-no?authuser=2' 
    },
    { 
      id: 6, 
      role: 'High School Diploma', 
      company: 'Helsingin Kuvataidelukio', 
      period: '2018 - 2021', 
      desc: 'Graduated with a strong academic record, achieving \'Magna cum laude approbatur\' (M) in Physics, Advanced Mathematics, and English in the Finnish Matriculation Examination. Developed a balanced foundation in both analytical sciences and visual arts.', 
      img: 'https://lh3.googleusercontent.com/pw/AP1GczP72dvTS-hV286J5sCeFLk1ufeCD2X1yghYmsfq888x1Onn8prb9_y3VoLmJkiiDs-Qibi4WUxFwo651QszDPV_1rLzPCNHK32jAGy2dKYHv1P3nRpFguyklApUl_8Wd6-PG9YKxs0K7BtrMUMuzIq7vVE-3lEUHMSZ81tUckqaGLg7aPTGrY53vYya9cMQkukHNBaNbgLTkCbh2D57xY62ewdJT8TWqh109bCwyB9rE0k7LSbyfaBUphV-dJ5FTgfDshOfrW2j68FfYL0j3sbB6N4S9HZB5y1hxx1XMsmlDcFMsRwMCMRHMwKO-p2wQAMDQ9TsJDOZVdtO-WkaBJomnrbgdzSHqgngwriCB7uJChA2I9YNaKx6YnrO0lWcewvavHxWqUVLQLmcYdRIDlXG1So6wP-fHrJXNwtqwS5G_xBFgkcjmmGJZgWHLiYlPA1n8vHoQde5WzxrlcrJS8JhYUDuNW7B0GJsj2mkRX6rHdcpKNCx2uBrX4paTZtpgga45zDCP5IgaNm9MyhhIhddAsEG2Rd4nugyKkxR8vu90a0l3pMcCvfT3IutqH3GUe7pdfL33AQAjUmnRbXKtimBvm8mRMgjtKR8-m0iE7qpq1ZVKe5dpq_z3H-TRR_g90-7mS-2LnyYgca7mjJpUJlvcw25wpWmV6SSha-jGRGWMApeyDZclHSbcaoKxOWKc_DNcKFgsqbbu10m3_R7HM2F-gk_pDJNKOTI1NCu3jh4EKAI3WPOBUQd3I_aIyJeS8dJdAdXynHsl-fj5pojK_p1-9dEgRD_rdrWJounTOpCbFM4Qq1djap8GcKaauyJXCca58OnThisSBLipdCJZuwYfMXYM-7mC_xveIkllkreZhs-ZPdDl9tzVgj93lapN1_6c1-PaLKtXyLKfhSGX_bitcor5TSi81eT_1kaT78evLWABGh6379149gASp0wVWBj4dHAAHBHu-mJNPhbcy0q=w900-h1600-s-no?authuser=2' 
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
          src="https://lh3.googleusercontent.com/pw/AP1GczPvyhoKXN9GsCooqCHuEz8y1eZ0H8v4HpsKkDFcX4-4w99auGVUZBAsizfyfEI_RGbVsueB0QQPzITd0UpNel0ODe9L5FkTOdvbDDBQykGdhIS-ZYSIjweKY7FFwKbmWUm11TTU1kB8SODPLC3hmwnXVxY10GAq_XGZ2O2iG7zI3qts0L_8o29gDMbsazXeP_vqe7AuVdOGMMOnAKZ2jCoFjaP2NNoZ9AaS5jJ67Ii8E8AyWyrQk67tLc_o9sa_S2eqj_oQKSqNgrX6XvPqC-GbO5oGW4_WAJcDbvRPDB8uBXe0esx0mXYtQhr8ZN3qkmbXxC0B5ofWQxsZEoZyn40JzmtiyXNiD2FWoI7iASHXcG4uK8vdo9WOD2Pb28JPZOxrOfm5e8d2KLUMvxxoazoYYaprtUVODYiXCIo4CLw7bN8rqXAl1YCOWBMC11k_c6kNZKx8BtXHl8pB01M-6OPp-9VFxTtxzFHPy-6RTS4OIfWVbxuWedJwhQxNMfXMhaD2yu23vu6-9lz5JLVDWbKi-Oh6cMIVl2b755Rpo2VqnweD49kEadBBOYir1guDpEGbVUHn31_h_KDxVEHPk25xK99SWAy2Gkro5uUilJq__MeEJid3YGGiQbQk_AcqqpSnrjijpqBF0alsHrf8GQiVvhFbuQiRe5Hg6nMX3tnYNzbsUT8XZwZfeuVNJ73Vd4EEvB5KyzYRgusiQiuMGXImSO_yB6hufRDCR3kYNGYYKV65LZFdD8E8ARNuIVyrue-z53soYb6SdV2Vy3i4Bj7F4fCJt2-7YprlIbLJO4CPjV_DRmdf_RQpMoW4UJG00Fa2eEH6CHs3e32QXDtaNUY2V_YhAQi9LR-YSGq4DMEvqfEdh0a_ecsj-lJHrfJAphsmDXhjOfwW7CbQQR9spEEiL3CJ09ASe53BGI343hadk8KdENafDbZ3TE8w8DXI1lHjuteLWeVvMHOqN4NFf0PNKhmYstyTrnjjbjZJpKN_U5ZHLWupuZFtaQY-PTLpP7gSwKuja-cIDAiQsDuGgvrtQpeaW7A=w1334-h2000-s-no?authuser=2" 
          alt="Experience background" 
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
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
    </motion.div>
  );
}
