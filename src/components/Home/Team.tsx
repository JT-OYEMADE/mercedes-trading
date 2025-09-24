"use client"

import { Badge } from "components/shared"
import Image from "next/image"
import { useState } from "react"

const team = [
  {
    title: "Vincent Uche",
    img: "coo.webp",
    role: "Chief Operating Officer",
    bio: "Vincent is an accomplished agribusiness professional with over a decade of hands-on experience in the agro-commodity sector. With a diverse background spanning operations, supply chain management and trade development, he has built his career around driving efficiency, sustainability, and value creation across commodity markets. Vincent has successfully managed aggregation networks, optimized processing systems and overseen large-scale commodity transactions —gaining both local expertise and international exposure. His leadership is grounded in precision, discipline, and practical problem-solving—ensuring that operational execution aligns with long-term strategic growth.As Chief Operating Officer of Mercedes Trading and Transport Ltd. (MTTL), Vincent brings this wealth of experience into partnership with the company’s vision. He is responsible for steering operational excellence, strengthening supply chains, and advancing Mercedes’ mission to deliver high-quality commodities with reliability and consistency and position MTTL as a trusted and resilient player in the global commodity space.He is a graduate of Chemistry from the National Open University of Nigeria.",
  },
  {
    title: "Sophia Ebikwo",
    img: "cos.webp",
    role: "Chief Marketing Officer",
    bio: "As the Co-Founder and Chief Marketing Officer of Mercedes Trading and Transport Ltd, Sophia Ebikwo brings extensive experience in marketing, brand strategy and stakeholder engagement to the agro-commodity sector. Sophia has been instrumental in shaping MTTL’s brand presence online and driving client engagement initiatives. She is passionate about connecting Nigerian commodities to global markets, educating buyers and building trust through consistent compelling storytelling. Under her leadership, MTTL has strengthened its visibility, enhanced investor confidence and established a brand identity that reflects professionalism, reliability and forward-thinking in the global agro-commodities space. She holds a BSc in International Relations and Diplomacy from Salem University, Nigeria and a Postgraduate Diploma in Education from the University of Ilorin and has built a strong track record in creating high-impact campaigns and positioning companies for growth.",
  },
]

export const Team = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="p-[18px] md:p-6 -tracking-[0.04em]">
      <div className="py-6 lg:py-24 bg-gray-light rounded-[20px] md:rounded-[40px]">
        <div className="container">
          <div className=" flex flex-col items-center">
            <Badge text="our team" />
            <div className="text-center md:max-w-[683px] w-full">
              <h2 className="text-dark text-[30px] md:text-[40px] font-medium md:leading-[100%] mt-4">Meet the Team</h2>
              <p className="text-sm md:text-2xl text-gray mt-3">
                Meet the passionate minds driving our operations. A dedicated team with deep expertise in supply chain, finance, marketing and project management.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10  md:max-w-[683px]">
              {team.map((t, key) => (
                <div key={key} className="group perspective-1000 h-full">
                  <div
                    className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCards.includes(key) ? "rotate-y-180" : ""
                      }`}
                  >
                    <div className=" inset-0 backface-hidden  rounded-lg p-3 flex flex-col items-center">
                      <Image
                        src={`/images/${t.img}`}
                        alt={t.title}
                        width="350"
                        height="350"
                        className="rounded-lg object-cover"
                      />
                      <div className="flex justify-between w-full items-center">
                        <div>
                          <h2 className="text-xl font-medium text-dark mt-2">{t.title}</h2>
                          <p className="text-gray">{t.role}</p>
                        </div>
                        <button
                          onClick={() => toggleFlip(key)}
                          className=" px-6 py-2 bg-primary text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          View Bio
                        </button>
                      </div>
                    </div>

                    <div className="absolute inset-0 backface-hidden rotate-y-180 min-h-[450px] overflow-y-auto bg-white rounded-lg  p-6 flex flex-col">
                      <div className="flex items-center mb-4">
                        <Image
                          src={`/images/${t.img}`}
                          alt={t.title}
                          width="60"
                          height="60"
                          className="rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="text-lg font-medium text-dark">{t.title}</h3>
                          <p className="text-sm text-gray">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-md font-medium text-dark mb-3">About</h4>
                        <p className="text-sm text-gray leading-relaxed">{t.bio}</p>
                      </div>
                      <button
                        onClick={() => toggleFlip(key)}
                        className="mt-4 px-6 py-2 bg-gray-200 text-dark rounded-lg hover:bg-gray-300 transition-colors"
                      >
                        Back to Photo
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// import { Badge } from "components/shared"
// import Image from "next/image"


// const team = [
//   {
//     title: 'Uche Vincent',
//     img: 'coo.png',
//     role: 'Co founder & COO'
//   },
//   {
//     title: 'Sophia Ebikwo',
//     img: 'cos.png',
//     role: 'Co founder & Chief of Staff'
//   },
// ]

// export const Team = () => {
//   return (
//     <section className="p-[18px] md:p-6 -tracking-[0.04em]">
//       <div className='py-6 lg:py-24 bg-gray-light rounded-[20px] md:rounded-[40px]'>
//         <div className="container">
//           <div className=" flex flex-col items-center">
//             <Badge text='our team' />
//             <div className="text-center md:max-w-[683px] w-full">
//               <h2 className='text-dark text-[30px] md:text-[40px] font-medium md:leading-[100%] mt-4'>Meet the Team</h2>
//               <p className='text-sm md:text-2xl text-gray mt-3'>
//                 Meet the experienced minds driving our operations  a passionate team with deep expertise in commodities, logistics, finance, and development.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10  md:max-w-[683px]">
//               {team.map((t, key) => (
//                 <div key={key}>
//                   <Image src={`/images/${t.img}`} alt={t.title} width='350' height='350' />
//                   <h2 className=" text-xl font-medium text-dark mt-2">{t.title}</h2>
//                   <p className="text-gray">{t.role}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }