import Link from "next/link"
import { Button } from "./Button"

export const footerData = [
  {
    header: 'Company',
    list: [
      {
        name: 'About Us',
        link: '/',
      },
      {
        name: 'Service',
        link: '/',
      },
      {
        name: 'FAQ',
        link: '/',
      },
    ],
  },
  {
    header: 'Legals',
    list: [
      {
        name: 'Privacy Policy',
        link: '/',
      },
      {
        name: 'Terms of Service',
        link: '/',
      },
      {
        name: 'Cookie Policy',
        link: '/',
      },
    ],
  },
  {
    header: 'Socials',
    list: [
      {
        name: 'Instagram',
        link: '/',
      },
      {
        name: 'Twitter (X)',
        link: '',
      },
      {
        name: 'LinkedIn',
        link: '/',
      },
      {
        name: 'Facebook',
        link: '/',
      },
    ],
  },
  {
    header: 'Contact',
    list: [
      {
        name: '📍Lagos, Nigeria',
        link: '/',
      },
      {
        name: '📍 Kabba, Kogi State',
        link: '/',
      },
      {
        name: '📞 +234 708 1232 817',
        link: 'tel:07078298382',
      },
      {
        name: '📧 mercedescommodities@gmail.com',
        link: 'mailto:mercedescommodities@gmail.com',
      },
    ],
  },
];


export const Footer = () => {
  return (
    <footer className="p-[18px] md:p-6 -tracking-[0.04em] rounded-[20px] md:rounded-[40px] ">
      <div className='pt-24 relative bg-footer-mobile md:bg-footer-bg bg-cover bg-no-repeat min-h-fit sm:min-h-0 rounded-[20px] md:rounded-[40px]'>
        <div className="container">
          <div className=" md:w-[568px] mx-auto flex flex-col items-center text-center text-white space-y-3 mb-[66px]">
            <h1 className=" text-[40px] md:text-6xl leading-[40px] md:leading-[65px] font-semibold">Explore Our Global <br /> Capabilities</h1>
            <p className=" leading-[22px] font-medium">From sourcing and shipping to strategy and support, we’re equipped to move your business beyond borders.</p>
            <Button label='Contact Us' state="light" />
          </div>
        </div>
        <div className="px-4 pb-5">
          <div className="bg-[#FEFEFE] rounded-[40px] px-5 md:px-10 pt-14">
            <div className="mb-8 flex flex-col lg:flex-row space-y-8 md:space-y-0 lg:items-start justify-between">
              <div className="flex items-end gap-x-1">
                <Link href='/'>
                  <img className='h-12 w-auto' src='/images/mercedes-blue-logo.svg' alt='Mercedes Blue Logo' />
                </Link>
                <p className="text-gray leading-snug">Mercedes Trading & <br /> Transport Limited (MTTL)</p>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-20">
                {footerData.map((x, i) => (
                  <div key={i}>
                    <h3 className="text-xl text-primary">{x.header}</h3>
                    <div className="mt-3">
                      {x.list.map((item, key) => (
                        <div key={key}>
                          <Link href={item.link} className="text-gray">{item.name}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img src="/images/mercedes-text.svg" alt="mercedes-text" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}