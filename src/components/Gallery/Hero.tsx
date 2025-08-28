import Image from "next/image"

const gallery = [
  {
    pic: "gallery-1.png"
  },
  {
    pic: "gallery-2.png"
  },
  {
    pic: "gallery-3.png"
  },
  {

    pic: "gallery-4.png"
  },
  {
    pic: "gallery-5.png"
  },
  {
    pic: "gallery-6.png"
  },
  {
    pic: "gallery-7.png"
  },
  {
    pic: "gallery-8.png"
  },
  {
    pic: "gallery-9.png"
  },
  {
    pic: "gallery-10.png"
  },
  {
    pic: "gallery-11.png"
  },
  {
    pic: "gallery-12.png"
  },
  {
    pic: "gallery-13.png"
  },
  {
    pic: "gallery-14.png"
  },
  {
    pic: "gallery-15.png"
  },
  {
    pic: "gallery-16.png"

  },

  {
    pic: "gallery-17.png"
  },
  {
    pic: "gallery-18.png"
  }
]

export const Hero = () => {
  return (
    <section className='-tracking-[0.04em] mb-52 py-6 lg:py-52 bg-service-bg'>
      <div className='container'>
        <div className=" relative">

          <div className="max-w-[538px] mx-auto text-center">
            <h2 className='text-dark text-[30px] md:text-[60px] font-medium md:leading-[100%]'>
              Gallery
            </h2>
            <p className="text-gray mt-3">Take a visual journey through how MTTL brings commodities from source to market.</p>
          </div>
          {/* <div className=" grid grid-cols-3 md:grid-cols-6 absolute  ">
            {gallery.map((g, key) => (
              <div key={key} className="w-full h-full">
                <img src={`/images/${g.pic}`} alt={g.pic} className="w-full h-full" />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}