'use client'

import Link from "next/link"
import { Button } from "./Button"

export const footerData = [
  {
    header: 'Products',
    list: [

      {
        name: 'Herbs, Spices & Botanicals',
        link: '/product/herbs-spices-botanicals',
      },
      {
        name: 'Nuts & Oil Seeds',
        link: '/product/nuts-and-oil-seeds',
      },
      {
        name: 'Energy & Natural Resources',
        link: '/product/energy-and-natural-resources',
      },
      {
        name: 'Solid Minerals',
        link: '/product/solid-minerals',
      },
    ],
  },
  {
    header: 'About Us',
    list: [
      {
        name: 'Media',
        link: '/gallery',
      },
      {
        name: 'Track record',
        link: 'record',
        isScroll: true
      },
      { name: "Who we are", link: "whoarewe", isScroll: true },
      { name: "Vision", link: "vision", isScroll: true },
      { name: "Our Mission", link: "mission", isScroll: true },
      { name: "Our Team", link: "team", isScroll: true },
    ],
  },
  {
    header: 'What we do',
    list: [
      {
        name: 'Trading',
        link: 'trading',
        isScroll: true
      },
      {
        name: 'Logistics',
        link: 'logistics',
        isScroll: true
      },
      {
        name: 'Trade Advisory',
        link: 'consulting',
        isScroll: true
      },
    ],
  },
  {
    header: 'Socials',
    list: [
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/mercedestrading_ltd?igsh=MXNxdWhsOGN4anB6&utm_source=qr',
      },
      {
        name: 'Tiktok',
        link: 'https://www.tiktok.com/@mercedes_trading?_t=ZS-8zYlGTcDAnq&_r=1',
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/company/mercedes-trading-transport-ltd/',
      },
      {
        name: 'Facebook',
        link: 'https://www.facebook.com/share/16rM9EtypP/',
      },
    ],
  },
  {
    header: 'Contact',
    list: [
      {
        name: '📍Trade Fair Complex, Lagos State',
        link: '',
      },
      {
        name: '📍 Bida, Niger State',
        link: '',
      },
      {
        name: '📞 +234 902 799 1837',
        link: 'tel:09027991837',
      },
      {
        name: '📞 +234 708 123 2817',
        link: 'tel:07081232817',
      },
      {
        name: '📧 info@mercedestrading.com',
        link: 'mailto:info@mercedestrading.com',
      },
    ],
  },
];


export const Footer = () => {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }
  return (
    <footer className="p-[18px] md:p-6 -tracking-[0.04em] rounded-[20px] md:rounded-[40px] ">
      <div className='pt-24 relative bg-footer-mobile md:bg-footer-bg bg-cover bg-no-repeat min-h-fit sm:min-h-0 rounded-[20px] md:rounded-[40px]'>
        <div className="container">
          <div className=" md:w-[568px] mx-auto flex flex-col items-center text-center text-white space-y-3 mb-[66px]">
            <h1 className=" text-[40px] md:text-6xl leading-[40px] md:leading-[65px] font-semibold">Explore Our Global <br /> Capabilities</h1>
            <p className=" leading-[22px] font-medium">From sourcing and shipping to strategy and support, we’re equipped to move your business beyond borders.</p>
            <Link href='/contact'>
              <Button label='Contact Us' state="light" />
            </Link>
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
              <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-10">
                {footerData.map((x, i) => (
                  <div key={i}>
                    <h3 className="text-xl text-primary">{x.header}</h3>
                    <div className="mt-3">
                      {x.list.map((item, key) => (
                        <div key={key}>
                          {item.isScroll ? (
                            <button
                              onClick={() => handleScrollToSection(item.link)}
                              className="text-gray hover:text-primary transition-colors cursor-pointer text-left"
                            >
                              {item.name}
                            </button>
                          ) : (
                            <Link
                              href={item.link}
                              target={item.link.startsWith("http") ? "_blank" : undefined}
                              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-gray hover:text-primary transition-colors"
                            >
                              {item.name}
                            </Link>
                          )}
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