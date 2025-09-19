

export const Hero = () => {
  return (
    <section className='-tracking-[0.04em] md:mb-[500px] bg-primary-light py-28 lg:py-52 md:h-[70lvh] 2xl:h-[40lvh] bg-service-bg'>
      <div className='container'>
        <div className="max-w-[538px] mx-auto text-center">
          <h2 className='text-dark text-[30px] md:text-[60px] font-medium md:leading-[100%]'>
            Nuts & Oil Seeds
          </h2>
          <p className="text-gray mt-3">From the fertile farmlands of Africa, we deliver premium nuts and oil seeds that are vital for food production, cosmetics, and industrial uses worldwide. Our products are sourced directly from trusted farmers and cooperatives, ensuring quality and sustainability.</p>
        </div>
        <div className="mx-auto">
          <img src='/images/nuts.png' alt='' />
        </div>
      </div>
    </section>
  )
}