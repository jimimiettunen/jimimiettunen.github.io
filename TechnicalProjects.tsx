import { motion } from 'motion/react';

export default function ExtraCurriculum() {
  const activities = [
    { 
      id: 1, 
      title: 'Excursion Responsible', 
      organization: 'Guild of Robotics',
      period: 'Jan 2026 - Dec 2026',
      desc: 'Organizing and managing technical excursions and industry visits for the Guild of Robotics, fostering connections between students and the robotics industry.',
      img: 'https://lh3.googleusercontent.com/pw/AP1GczPhTtzy-TCcbADTy2gWitfUhyUbxG-0B8_EjX-4GSx9tnVSXcGUtrMwfPRQmc39iA9RQZ8XYp8jhoy4Mzuz-eXDT2C-oM-t6AseWvOk55qJKVd8ymRU64eYwbAVb2wbWzM6hD5w7aeUma6O_87YfbQr_M4WVKiMxO8O3HXSdtMSo9hcCEfiHbcQ5uX9QRHHoghFoLEiHT3ZsmoZwG-lKdAC_dFfAKEeMeJFDK6NYNKsVwHP-lGOSrfE3OejFNu2LWH5ZAIcUMg2IZ-1GN3D22YYZZUzbHVOtZwfuO4LmcgBWFkgo0WZl5L4AzmkqlJfNegO9Ceqvb7_tg4V7tDx_GVQuZ6PjVc4aMDZod6zJvxisR7ZGhXMghwywiM6ju0QLm6IzzNYBW1U7rR8Fma-O312k6uhvGj6rTItzv6Zs5ynukk-JviTkzpzuvI17FWZeJoiB3PJ-R8yFOkm42moxGcgaIHQwV_vBJHNJKV_zQX5XpnjQQxKZntGWyspBG5_qQH6JyUeRvgzIpb75SpG2s4KbTVFXsz49iGdCCDOO4ah2QmVLeAIbmcqeEAvwOWFSmhfhlMsNJQAxqaTorSA5dMM8zfDOk6bqk0eHhS5N6D85RHRFA2eRlm3-vRG00u4qEGlAKzhgTdBj0QK6Am_C_UDdyBRvZLTK0U8guQ_U3zIxOMPkRs3gfu0vVAJUny9o5sjTGDbT9sHuR9xVu4nKbwSVzeAVDFjMQelD3wpgYr4uI8cFLpUOz8ifvkr9z7PO0JoDLp0WKWkqZQptTqemydUQs2xeQMHxjMcKYhPyFy5OdcATbfZZhFVJ0qOCB3XgugivgT488pS3RGCdo_u2wjaP8ek4h5A1vOZ8NixlkhP8OkJZWLZmXUzJ1KfEyztrW4E03ALn1EYnI4iwH8NG4Kc4isOEisZzKsLLB1b2Mc2Zem-7m3AyE7IPg38bJ2Ouey6sjNRJGwosIsQupYLOsej=w3000-h2000-s-no?authuser=2'
    },
    { 
      id: 2, 
      title: 'Head of Events', 
      organization: 'Guild of Robotics',
      period: 'Jan 2025 - Dec 2025',
      desc: 'Organized and managed events for the Guild of Robotics, fostering community engagement and coordinating technical and social activities for members.',
      img: 'https://lh3.googleusercontent.com/pw/AP1GczNe4iwT7rjK_iTxUCs2hJdyxblBaO7RscS4Jy2hg3NcGAKAY2hvUK5VEUBx-jVR8hBGfRzboAm5kpbANa89impvJsilJZTgotw10JHT7rJ3Tz97gU_UiPHhpE68Stw7Sw5u2yi764bi6EyOMjMt_R-rq8R3dPLzMm9lhv_PNVjIuu5uA_7_VQosQyj49rvv6__7GAbJbHxXrMtTvoywDtMrGY2BSAdBc3XXkFjAwmg6lvTjlfiF0r6-XAOUofxX--r43jy3XDT_aeLFUDVxvmORp0fFm6l37CUncQG7dFJIQvQzI6Q5rQqyZTAnQ3lT97nhkYfAAd3k-yxLhPlbAkxnVBAaJ9Q9uOnUxmFm-yEtOBHn9PUTSAaPYjsHvpWavjMsh7OzOMU2SDzbdGIyw5VLBZw-O9FBS5KoZeZcGiqXzRCTRTm_YPjEDN-2G1owQaUWS0pZxUWghrjYJYkhoU8rU9AKQo4xV18W6tV0WKSdfy2d1DHEWDuOzsDCUn8GmfgA8y9oI73uvpSGLvqgZkmJCtXQxnJ1dBIeqbJDVoshtfmxHMM0lFS3FR5SPzg8q-r611xic5RzCdFao3nnQnVmR4ASJp_M7KICBCOKHiz6yfApchvar-PGbPORuBqqH6igKHXYv5xwo7DUB8WwaadvJpI__KmtgS19FKqtgWh9-1JIIWf6LMdgw8NvlWIz4A14yeLBMTxjW0fShgxVwJdLXi4ncbBqWg3ppFzMX4-T5ZIGK8ZoJ70RHPHmxJCgsCCqRmi9R7mFck_2XqlaQiQliUfv4Ogdx-JJn88QjTzuZymYpJu-HTH6u7tBYqV1eDRfC0lP2AzeqbtHBokIcnydpmI2zdrakJUAVOpp8Euc3V0ipjy_1QvWs6rWW_LuiW91gEmjqbQVfaWQfxV1UH1TnBaf2j6Q0dIRrx3Lu6TiuuMIC_0KzZAnOiFQYTniLmVGCdgz1UYdu9ZTeHnn9rC8=w2500-h2000-s-no?authuser=2'
    },
    { 
      id: 3, 
      title: '3rd Place - HVAC Control Hackathon', 
      organization: 'Koja Hackathon',
      period: '2026',
      desc: 'Designed and implemented an HVAC controller balancing energy efficiency, thermal comfort, and air quality using a DOAS building model in EnergyPlus. Competed to achieve the lowest total cost combining energy and penalties.',
      img: 'https://lh3.googleusercontent.com/pw/AP1GczOKriC_8O27Wp4hBsX7yO9ugG5a--98Z_YnVVJXRkGYSmarUcWuQH5l5YuM5Ag0SQrfYIphDBGn-VAt_n1qmddolSP8D2Ec55uM44hfiSwZJNbmFojEVbjVjIMMWQU5LlQpxaC0Szk9fULOq4AW2-5fz86SljKtEGm6zTersYjszrbZzqRwTdIld_oaHMYy9uF4DzyM-pKe2x3dnvIhExXCxe1NLYR-yvrnKGlyEBt6LhlViuT5v_EzMQYs0kOT8vSfzZDDaX6kJ7UuKdQYXkCVpssvgmcP72gBvHjR3qG8mEmeWPJwQIdZXDp_YxlQ-eLiT0yTNtZWDR_kDiJbRGLjeU9QwW_RhPerpZkmEEZ3TaP_iVsejEInNMyO2HqtHcmmM36v_DsraAIxURilaBrDMFbTQqfQce5aE7a_q5M5dGL9zuvAusDdfvDUwpHSI4FCRhhKLkHMrYhofSmgdUjqoRifyUTm83LCDg6b0h2gWdDD6HK9dz-IQ9uWfoEErb4Rb8t3nDylUNlOwcTEj8rS7H-tdMoS4oqOU1Qw8KdlfCeP83GtLcsa_e8SHrzVMT80KWMrW5cp6ltvVJjhjcKCc4ra5bjaKIHIUA1DMZ9ItBDsyXyw7aScwzs_NnCLr26w7CnCe1ovkaUFLuoI-WotxqrBcqq8YtwyErQANWtUM4d1hgr-jJxSPAvgU5gK1ID0M0wFKh1PwhmfiwWi6r_d7Qh4JhJMLbrfQINJSZ82v9Xco7yrcfUkLNrt-44imE_5gNCaIDZM5fzuxUu7p_7dfi8zl_jjCDZJrqiJKW5AgiuWpYkVWhO9Ry1cP74Wk5q-2SC8MXmVbFqwqCZAgLMdDz6n2KdMRYQIuw44YuHAVdIO-2Q-Ej6cJC0puUIJpjFgEYr-AOgDPhjdL0mB9YAfF-60qesa4hnEld81Ko7fE87VVVEwybZQgajbifIMHfsnlLeyXuUjgcHZ7pNsg-OL=w2666-h2000-s-no?authuser=2'
    },
    { 
      id: 4, 
      title: 'IdeaSquare Planet Pilot Program', 
      organization: 'CERN, Geneva',
      period: '2026',
      desc: 'Participated in an interplanetary exercise applying systems-thinking and future thinking methodologies to solve complex problems. Collaborated in a multidisciplinary environment inspired by CERN physicists and engineers to design a sustainable society for a crew of 10,000 venturing to Planet Y.',
      img: 'https://lh3.googleusercontent.com/pw/AP1GczNzQH1INWf19LousQbEST0tMoVNB595PdTM7nLmSXMfYTo8N_ZzOL0RidhMA6vqtOih2ewgZpYomGnrlTCHNkuQ8Eh8UQg5N3yGmDphlUlTXLIsHgmeam-E1n_qQPL-rSvUOrWd7htskzhPoIn3jQBicC3ykm5qjpSZt9HCCqu06ZuUofIxYv6sABHtXKX4jfcV4a6Y7TB3uoB9Mcbbm9HxhEIaBFsACcgYYsjf5IucLgqmLZO9nAROBWLTuZ_a7wtAQNceJxQaphmQ8N_VJ-Q8PQ3LPnmLY26Py8kZEzno2tJNdnOTG9RJxBH5TBGifuHTDuEKzly913b8RYK034O6bak9XqrpH7sSAprhVmmxp0M2YFDPkdD2QfJYb0EmmyOK4jdv3LMcBWm_8gXO4WxH_iV4SYN80hwsRAovfK3LO5oq68yvOYuW77pqEatjDOiUdn7HIENTZZvdGvz71s82ei5BFfCzX7B9AO9Hp2pbp93Y0MSQz8I-kwaKPysf6urvLJIuED44gwLKrP6ZcQCKX_pCsFli8QfD2sS_HlbbWPuD2kKOg6Loow1vQOf3JSEtKVh8MvDDvt52tEKu69Crfh6Vvu4sfCC6i7omDnFIFkXyaBrkYBqlBrvDof_blnpuoVwJQz29lEH2pnkUWQWCiavoLONBiMetkUaBe0NrOyanel95GHxCHG9Q6gb5yYOBooXN800ViExbxnYu5lguV0742ksoDIYWkuK3ZHH9bI7nLSqgxJl-enY6MbwHJ7LH9UnjuGC8r7s7UgwlcIKYxHtJwE1UUIexqDaDPv_-8Q-8wQlg5XIsqBtiPZXgSp-0havyaXf6e4QtHq_aJV4QsavuZa_jW2q2AtfGYL61FT4UdcKKs60JtidjHoU5I1RdwOjEj3eCv_bKL0KkdcjeAzd467yA_HcDj31CSHzEH2Iih0Rpjpq6pRbL3i0NJZviNbLHDfpjGdQGcQVbD2ZX=w1280-h960-s-no?authuser=2'
    },
    { 
      id: 5, 
      title: 'Tutor for New Robotics Students', 
      organization: 'Tampere University',
      period: 'Spring 2025 - Fall 2026',
      desc: 'Mentored and guided incoming robotics students, helping them integrate into university life and providing academic and social support during their first semesters.',
      img: 'https://lh3.googleusercontent.com/pw/AP1GczP6wTDKZK75x7jPziqgjGGD11Z5KOLfsXZVd0SbD7ASfNjAcekp7N7p7y4kmLZaB8gjp-QU9IsShWRkV08_PKkfplSQzbjonyKZdDrRHIo4TTmGubY4h1cAjPgwsQjQ0oeIk1zlo8zPdPE8uJPQHIFWcU1fXiNPyo-bNWGFYhnh5Hwmy31V9qebi06try9cHqk4pgf5rvrqm0siTHNJShI5Kez3q46VwLkbO8TdMRVXvcfUH5a_JtUyRBuyHCpL2Wf5HqodqrblhBxF9Q0z0WuXiZZCvgRrt-Vn3Vioteumh-H4r5doSI9m4jR_Q2O0vcxdIYLy3mj6UiqS8PrZ15KusVbva4tK2Gon6Wha9CKV33664q3--ppGwfU0dO8qYyeE-hzrLfGXikWvGdJEQvcflt-DaFXpCfPqh1B1ixgRjTRfujw50wzQ-flNhwv8asKJk6ZZN_NfnSKJ0hOeIHvQYS8PPu1NHrgEiIDaQvuhe726uaePzddBO7HrecFqScTeBeKRqbEtODsAPKS8TP7Mq81E8Oqo3HaEYHXcA8HPdPLGRgnO0KxVHf0khaIYVcUSO1fEplTs5FdYI75NHRdA3--WuGXpDVcnHdphfMPKq9BXsrrVy6KX1B9n7Wad4hWNKK2BICydqVx-YzUm58Q2ZcQRZuI8VdplrplT7q-4fycUchcOCJYcT6e5MhD30aQCyQINxRXM_YdLGV6AQ1Mt5rMWLl1p22Nhq3Necie1-4ZF3dWIHKiIo_bEDzZakhT8a7pvX27BY0UWwX_NS5g_vfiJ4Z-NPTtxYhCd-I_LtnUpt5DK-GKDb-nO3YAcubfqTzX_rwDIpYOV1QRV8vv0BnWd4cdk73bJuImg7TnanZdSsg3nJuceK6Aw7f4GmYg_uq_z6pAFn_6_RX5sEDWviTI3qhvFVrHWzNIzs_6BMMIHXYzpxUU9M7qd88LTiYkIQ64FO9r4h_nZi-IeaA4Q=w1126-h2000-s-no?authuser=2',
      imageClass: 'object-[center_20%]'
    },
    { 
      id: 6, 
      title: 'Tutor for INTO Exchange Students', 
      organization: 'Tampere University',
      period: 'Spring 2026',
      desc: 'Will assist international exchange students with their transition to studying in Finland, organizing activities and providing guidance on local culture and university practices.',
      img: 'https://lh3.googleusercontent.com/pw/AP1GczPTZD_BOvr0M06L01q1j9q1WzFsp3S13W84L_7gwuS3PQUd2G13lZwM8ucB30jjF1ne0LSc0MYZmSy9jKAQbMo8NV23mF8me-z_jhQIobvap8l744x8-SISDWiloLsF78wFMd2R2tlOlayp6P3jZvswCP9aqsS1zcmWkwOKb8RWBhFkT6uxYAo1yqC2UsL95hhsJbUnGWRmJ__UGhsuwEi819WXjlQmj3ewGXnCFCujbK-CV1KT2jaFMoBokq7DLhWDS7Na6s23yLkI0_qS9198c5-thTqFvFQdoUd4rLD5Da8fZmHFWJG784Q6BQCStQl7VvizxT9kJoGq-BLoQxrRDtV6IkUwHk1LFoQycitYXgX1akReg5g4m-T0zFMT_VTtpm3F_Yjx0P5yL06kv5MJnqF4dcQC19Wrh52M2uzopYvyBVAWVT23utf9eHCIxjoGK9VSiJ2A1CEt7wyB5mpino63Ojk0prpRSKkhmFwCV6Bd3tYOyaqR6uxLhVWWgW70K6Ao-Opt3GhCpGbIW1kgWs0U1TSBKhrjOMUKjs795sDS2_c7VpzirVxg8Qdvdm_tW93Elv3rdoNmanbuj7IRP7_wBCfzlNslf94ew-EHC54asPrk4SDqt6RXK0Z9_FPQoGkPaIQPgyK4DRHV7Xy6R2A3i1_A0PSOu4T-XJIV-qogCnM9V7GWZFgm3c_YqYRCYoOuBBtRF6JkcUbeB672H4HZyBVN0DYTruNBOpnKQFHjgfXfHw1GtXMOI9wUGFYTz4EgFE6xC3emdY-GFVeWt-I6aRN5HPZye4cmLfpS1YHSrcnobkhLvGUS_t3WJP1pm5oq1PDeTFhBdx1LGXdl9NGM0AbLcN_RKPq-F9Pvc7v760jbhpletqvAIXmuIkESs6Dl3y90s4V7bvF6IoD9w4X13k4RNpIV_3-IfMXpKxeubPmMznBHpX1mpWzFTaUC8zCROu-nSB-bYGJdThrX=w1334-h2000-s-no?authuser=2'
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
