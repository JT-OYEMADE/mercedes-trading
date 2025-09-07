import Image from "next/image"
import { Badge } from "components/shared"

export const Services = () => {
  return (
    <section className='py-6 lg:py-28 bg-[#FEFEFE] -tracking-[0.04em]'>
      <div className='container'>
        <div className="max-w-[683px]">
          <Badge text='our services' />
          <h2 className='text-dark text-[30px] md:text-[40px] font-medium md:leading-[100%] mt-4'>
            Powering Africa’s Path to  <br />{' '}
            <span className=' text-gray'>Global Markets</span>{' '}
          </h2>
          <p className='text-base md:text-2xl text-gray leading-[22px] md:leading-8 mt-3'>At Mercedes Trading & Transport Limited, we offer complete solutions that power Africa’s participation in global trade. </p>
        </div>
        <div className="mt-12">
          <div className="space-y-8 md:space-y-16">
            {/* one */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <Image src="/images/strategic-trading.webp" alt="strategic-trading" width='500' height='500' />

              </div>
              <div className="w-full md:w-1/2 space-y-5 md:px-5 md:py-[30px]">
                <h2 className="text-black text-[30px] md:text-[40px] leading-[35px] ">Strategic Trading</h2>
                <div className="space-y-7 text-sm md:text-xl text-dark-light">
                  <p>Herbs & Spices: <span className="text-gray">Hibiscus Flower, Dried split Ginger, Turmeric.</span></p>
                  <p>Nuts & Oil Seeds: <span className="text-gray">Cashew Nuts, Shea Nuts, Cocoa, Sesame Seeds, Shea Nuts, Tiger Nuts, Soybean</span></p>
                  <p>Metals: <span className="text-gray">Tantalum, Lithium, Ilmenite, Rutile</span></p>
                  <p>Energy: <span className="text-gray">Bio char, Ethically sourced charcoal, Palm Kernel Shells.</span></p>
                  <ul className="list-disc pl-5">
                    <li>Exports</li>
                    <li>Sourcing & Brokerage</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* two */}
            <div className="flex flex-col md:flex-row-reverse gap-6">
              <div className="w-full md:w-1/2">
                <Image src="/images/swift-logistics.webp" alt="swift-logistics" width='500' height='500' />
              </div>
              <div className="w-full md:w-1/2 space-y-5 md:px-5 md:py-[30px]">
                <h2 className="text-black text-[30px] md:text-[40px] leading-[35px] ">Swift Logistics</h2>
                <div className="space-y-7 text-sm md:text-xl text-dark-light">
                  <p>We provide end-to-end logistics solutions that ensure the safe, timely, and cost-effective movement of goods.</p>
                  <ul className="list-disc pl-5">
                    <li>Haulage & Transportation services </li>
                    <li>Clearing & Forwarding</li>
                    <li>Warehousing & Fulfilment services</li>
                  </ul>
                </div>
              </div>
            </div>
            {/* three */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/2">
                <Image src="/images/expert-consulting.webp" alt="expert-consulting" width='500' height='500' />
              </div>
              <div className="w-full md:w-1/2 space-y-5 md:px-5 md:py-[30px]">
                <h2 className="text-black text-[30px] md:text-[40px] leading-[35px] ">Expert Consulting</h2>
                <div className="space-y-7 text-sm md:text-xl text-dark-light">
                  <p>Our consulting division is designed to support businesses looking to enter or scale within the African trade space. </p>
                  <ul className="list-disc pl-5">
                    <li>Trade Finance</li>
                    <li>Export Education</li>
                    <li>Supply Chain & Operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}