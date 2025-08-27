import Image from "next/image"
import { Badge } from "components/shared"

const partners = [
  {
    id: 1,
    image: 'domena-logo.svg'
  },
  {
    id: 2,
    image: 'moneda.svg'
  },
  {
    id: 3,
    image: 'valency.svg'
  },
  {
    id: 4,
    image: 'coscharis.svg'
  },
  {
    id: 5,
    image: 'afex.svg'
  },
  {
    id: 6,
    image: 'salid.svg'
  },
  {
    id: 7,
    image: 'fmn.svg'
  },
]

export const Partners = () => {
  return (
    <section className='py-6 lg:py-[50px] bg-white -tracking-[0.04em]'>
      <div className='container'>
        <Badge text='Here are our partners' />
        <div className="grid grid-cols-3 md:grid-cols-7 items-center gap-8 md:gap-11 mt-4">
          {partners.map((pat, key) => (
            <div key={key} className={` ${pat.id === 7 && 'md:flex justify-center'}`}>
              <Image src={`/images/${pat.image}`} alt={pat.image} width='125' height='49' />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}