import { Badge } from "components/shared"

const products = [
  {
    title: 'Herbs, Spices & Botanicals',
    img: 'product-1.png'
  },
  {
    title: 'Nuts & Oil Seeds',
    img: 'product-2.png'
  },
  {
    title: 'Solid Minerals',
    img: 'product-3.png'
  },
  {
    title: 'Energy & Natural Resources',
    img: 'product-4.png'
  },
]

export const Products = () => {
  return (
    <section className='py-6 lg:py-24 bg-white -tracking-[0.04em]'>
      <div className="container">
        <div className=" flex flex-col items-center">
          <Badge text='our products' />
          <div className="text-center md:max-w-[683px] w-full">
            <h2 className='text-dark text-[30px] md:text-[40px] font-medium md:leading-[100%] mt-4'>What We Export</h2>
            <p className='text-sm md:text-2xl text-gray mt-3'>
              From the heart of Africa to the global marketplace, we deliver high-quality commodities across multiple industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {products.map((p, key) => (
              <div key={key} className="relative">
                <img src={`/images/${p.img}`} alt={p.title} />
                <h2 className='text-white max-w-[200px] text-[40px] font-medium leading-10 absolute bottom-6 left-5'>{p.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}