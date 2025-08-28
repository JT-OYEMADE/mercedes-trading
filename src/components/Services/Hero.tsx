import { Button } from "components/shared"
import Link from "next/link"

export const Hero = () => {
  return (
    <section className='py-6 lg:py-28 bg-service-bg -tracking-[0.04em] mb-52'>
      <div className='container'>
        <div className="flex md:px-8 md:gap-[130px]">
          <div className="md:w-1/2">
            <h2 className='text-dark text-[30px] md:text-[50px] font-medium md:leading-[100%] mt-4'>
              Get in touch with Us
            </h2>
            <p className="text-gray text-xl mt-5">Get in touch letting us know your needs, wants and explore opportunities.</p>
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
            <Button label="Submit" fullWidth />
          </div>
        </div>
      </div>
    </section>
  )
}