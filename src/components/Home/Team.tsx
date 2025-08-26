import { Badge } from "components/shared"

const team = [
  {
    title: 'Uche Vincent',
    img: 'coo.png',
    role: 'Co founder & COO'
  },
  {
    title: 'Sophia Ebikwo',
    img: 'cos.png',
    role: 'Co founder & Chief of Staff'
  },
]

export const Team = () => {
  return (
    <section className="p-[18px] md:p-6 -tracking-[0.04em]">
      <div className='py-6 lg:py-24 bg-gray-light rounded-[20px] md:rounded-[40px]'>
        <div className="container">
          <div className=" flex flex-col items-center">
            <Badge text='our team' />
            <div className="text-center md:max-w-[683px] w-full">
              <h2 className='text-dark text-[30px] md:text-[40px] font-medium md:leading-[100%] mt-4'>Meet the Team</h2>
              <p className='text-sm md:text-2xl text-gray mt-3'>
                Meet the experienced minds driving our operations  a passionate team with deep expertise in commodities, logistics, finance, and development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10  md:max-w-[683px]">
              {team.map((t, key) => (
                <div key={key}>
                  <img src={`/images/${t.img}`} alt={t.title} />
                  <h2 className=" text-xl font-medium text-dark mt-2">{t.title}</h2>
                  <p className="text-gray">{t.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}