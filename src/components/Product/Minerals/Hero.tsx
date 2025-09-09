export const Hero = () => {
  return (
    <section className='-tracking-[0.04em] md:mb-[500px] bg-primary-light py-28 lg:py-52 md:h-[70lvh] 2xl:h-[40lvh] bg-service-bg'>
      <div className='container'>
        <div className="max-w-[538px] mx-auto text-center">
          <h2 className='text-dark text-[30px] md:text-[60px] font-medium md:leading-[100%]'>
            Solid Minerals
          </h2>
          <p className="text-gray mt-3">Africa is a hub for critical minerals that power modern industries, from energy to technology. At MTTL, we work closely with mining communities and aggregators to supply responsibly sourced solid minerals in their raw, export-ready state.</p>
        </div>
        <div className="mx-auto">
          <img src='/images/minerals.png' alt='' />
        </div>
      </div>
    </section>
  )
}