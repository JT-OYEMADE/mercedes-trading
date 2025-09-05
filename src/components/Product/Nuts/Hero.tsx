import Image from "next/image"

export const Hero = () => {
  return (
    <section className='-tracking-[0.04em] md:mb-[500px] bg-primary-light py-28 lg:py-52 md:h-[70lvh] 2xl:h-[40lvh] bg-service-bg'>
      <div className='container'>
        <div className="max-w-[538px] mx-auto text-center">
          <h2 className='text-dark text-[30px] md:text-[60px] font-medium md:leading-[100%]'>
            Nuts & Oil Seeds
          </h2>
          <p className="text-gray mt-3">Africa’s soil is rich with plants that have been cherished for centuries for their flavor, health, and wellness benefits. At MTTL, we source and export high-quality herbs, spices, and botanicals that meet international standards, carefully harvested and prepared to retain their natural potency. Our products include dried split ginger, turmeric and hibiscus flowers.</p>
        </div>
        <div className="mx-auto">
          <img src='/images/herbs.png' alt='' />
        </div>
      </div>
    </section>
  )
}