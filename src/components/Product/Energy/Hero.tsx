

export const Hero = () => {
  return (
    <section className='-tracking-[0.04em] md:mb-[500px] bg-primary-light py-28 lg:py-52 md:h-[70lvh] 2xl:h-[40lvh] bg-service-bg'>
      <div className='container'>
        <div className="max-w-[538px] mx-auto text-center">
          <h2 className='text-dark text-[30px] md:text-[60px] font-medium md:leading-[100%]'>
            Energy & Natural Resources
          </h2>
          <p className="text-gray mt-3">We supply raw materials that fuel industries and support infrastructure across the globe. From clean energy alternatives to construction essentials, our exports are chosen for quality and long-term reliability.</p>
        </div>
        <div className="mx-auto">
          <img src='/images/energy.png' alt='' />
        </div>
      </div>
    </section>
  )
}