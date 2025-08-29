import { Button, Textfield, TextAreaField } from "components/shared"
import Link from "next/link"

export const Hero = () => {
  return (
    <section className='py-20 lg:py-28 bg-service-bg md:h-[70lvh] 2xl:h-[40lvh] -tracking-[0.04em] md:mb-[500px]'>
      <div className='container'>
        <div className="flex flex-col md:flex-row md:px-8 gap-10 md:gap-[130px]">
          <div className="md:w-1/2">
            <h2 className='text-dark text-[30px] md:text-[50px] font-medium md:leading-[100%] mt-4'>
              Get in touch with Us
            </h2>
            <p className="text-gray text-xl mt-2.5 md:mt-5">Get in touch letting us know your needs, wants and explore opportunities.</p>
            <div className="mt-12">
              <Link href='mailto:support@usetechrevolve.com' target="_blank" rel="noopener noreferrer" className=" text-black ">
                mttlmited@email.com
              </Link>
              <div className="flex gap-4 mt-4 text-dark-light underline">
                <Link href='mailto:support@usetechrevolve.com' target="_blank" rel="noopener noreferrer">
                  Instagram
                </Link>
                <Link href='mailto:support@usetechrevolve.com' target="_blank" rel="noopener noreferrer">
                  Twitter (X)
                </Link>
                <Link href='mailto:support@usetechrevolve.com' target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
                <Link href='mailto:support@usetechrevolve.com' target="_blank" rel="noopener noreferrer">
                  Facebook
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <form>
              <div className="space-y-4 mb-6">
                <Textfield id='' placeholder="Full name" />
                <Textfield id='' placeholder="Company name (optional)" />
                <Textfield id='' placeholder="Email address" />
                <Textfield id='' placeholder="Phone number" />
                <Textfield id='' placeholder="Destination" />
                <Textfield id='' placeholder="Interested Commodity" />
                <Textfield id='' placeholder="If others, please specify" />
                <Textfield id='' placeholder="Preferred grade expectation" />
                <Textfield id='' placeholder="Quantity required per (MT)" />
                <Textfield id='' placeholder="Delivery Timeline" />
                <TextAreaField id='' placeholder='Additional Note/Requirement' />
              </div>
            </form>
            <Button label="Submit" fullWidth />
          </div>
        </div>
      </div>
    </section>
  )
}