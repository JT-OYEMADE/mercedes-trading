import { Button } from "components/shared"

export const Hero = () => {
  return (
    <section className="p-[18px] md:p-6 -tracking-[0.04em]">
      <div className='pt-44 pb-60 relative bg-home-bg bg-cover bg-no-repeat min-h-fit sm:min-h-0 rounded-[20px] md:rounded-[40px]'>
        <div className="container">
          <div className=" md:w-[447px] mx-auto flex flex-col items-center text-center text-white">
            <div className="py-2.5 px-5 bg-white/10 w-fit rounded-[100px] text-xs leading-[100%] -tracking-[0.04em] text-white">
              🌍 Powering African exports with ease.
            </div>
            <h1 className=" text-[40px] md:text-6xl leading-[40px] md:leading-[65px] font-semibold mt-2 mb-3">Unlocking <br /> Africa’s Richest Resources</h1>
            <p className=" leading-[22px] font-medium">Trading & Transporting Africa’s valuable commodities to global markets through reliable sourcing, seamless logistics, and expert consulting.</p>
            <div className="flex flex-col md:justify-center md:flex-row gap-x-2 gap-y-4 mt-3 w-full">
              <Button
                label="Learn More"
                state="white"
              />
              <Button label='Contact Us' state="light" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}