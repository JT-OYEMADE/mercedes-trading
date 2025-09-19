// 'use client';

// import Link from 'next/link';
// import { Button } from './Button';
// import { usePathname } from 'next/navigation';
// import { HiMiniBars3 } from 'react-icons/hi2';
// import { IoCloseSharp } from 'react-icons/io5';
// import React, { Fragment, useEffect, useState } from 'react';
// import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';

// const navigationItems = [
//   // {
//   //   label: 'Product',
//   //   href: '/product',
//   // },
//   // {
//   //   label: 'Products',
//   //   submenu: [
//   //     { label: 'Herbs, Spices & Botanicals', href: '/product/herbs-spices-botanicals' },
//   //     { label: 'Nuts & Oil Seeds', href: '/product/nuts-and-oil-seeds' },
//   //     { label: 'Energy & Natural Resources', href: '/product/energy-and-natural-resources' },
//   //     { label: 'Solid Minerals', href: '/product/solid-minerals' },
//   //   ],
//   // },
//   { label: 'Gallery', href: '/gallery' },
// ];

// export const Navbar = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const pathname = usePathname();
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     setSidebarOpen(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   const darkNavLink = ["/contact", "/gallery", "/product"];
//   const isDarkNav = darkNavLink.includes(pathname) || darkNavLink.some((link) => pathname?.startsWith(link + '/'));

//   return (
//     <div>
//       <Transition show={sidebarOpen} as={Fragment}>
//         <Dialog as='div' className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
//           <TransitionChild
//             as={Fragment}
//             enter='transition-opacity ease-linear duration-300'
//             enterFrom='opacity-0'
//             enterTo='opacity-100'
//             leave='transition-opacity ease-linear duration-300'
//             leaveFrom='opacity-100'
//             leaveTo='opacity-0'>
//             <div className='fixed inset-0 bg-gray-900/80' />
//           </TransitionChild>

//           <div className='fixed inset-0 flex'>
//             <TransitionChild
//               as={Fragment}
//               enter='transition ease-in-out duration-300 transform'
//               enterFrom='-translate-x-full'
//               enterTo='translate-x-0'
//               leave='transition ease-in-out duration-300 transform'
//               leaveFrom='translate-x-0'
//               leaveTo='-translate-x-full'>
//               <DialogPanel className='relative mr-16 flex w-full max-w-xs flex-1'>
//                 <TransitionChild
//                   as={Fragment}
//                   enter='ease-in-out duration-300'
//                   enterFrom='opacity-0'
//                   enterTo='opacity-100'
//                   leave='ease-in-out duration-300'
//                   leaveFrom='opacity-100'
//                   leaveTo='opacity-0'>
//                   <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
//                     <button
//                       type='button'
//                       className='-m-2.5 p-2.5'
//                       onClick={() => setSidebarOpen(false)}>
//                       <span className='sr-only'>Close sidebar</span>
//                       <IoCloseSharp className='h-6 w-6 text-white' aria-hidden='true' />
//                     </button>
//                   </div>
//                 </TransitionChild>
//                 {/* SIDEBAR COMPONENT */}
//                 <div className='flex grow flex-col gap-y-10 overflow-y-auto bg-white px-6'>
//                   <div className='flex mt-10 shrink-0 items-center'>
//                     <Link href='/'>
//                       <img className='h-6 w-auto' src='/images/mercedes-blue-logo.svg' alt='Bord' />
//                     </Link>
//                   </div>
//                   <nav className='flex flex-1 flex-col'>
//                     <ul role='list' className='space-y-6'>
//                       {navigationItems.map((item) => (
//                         <li key={item.label}>
//                           <Link
//                             href={item.href}
//                             className={`font-normal text-lg ${pathname === item.href || pathname?.startsWith(item.href + '/')
//                               ? 'text-primary'
//                               : 'text-gray'
//                               }`}>
//                             {item.label}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                     <div className='mt-8'>
//                       <Link href={`/waitlist`}>
//                         <Button label='Contact Us' className='' fullWidth />
//                       </Link>
//                     </div>
//                   </nav>
//                 </div>
//               </DialogPanel>
//             </TransitionChild>
//           </div>
//         </Dialog>
//       </Transition>

//       <div className={`w-full z-50 md:z-[100] fixed  py-4 md:px-6 transition-all duration-300 ${isScrolled ? 'bg-[#F6F7FF]/70 backdrop-blur-md shadow-sm top-0' : 'bg-transparent top-5'}`}>
//         <div className={`container ${isScrolled || isDarkNav ? ' md:px-0' : 'px-8'}   flex items-center justify-between`}>
//           <div className='flex items-center gap-8'>
//             <Link href='/'>
//               <img className='h:10 md:h-12 w-auto' src={isScrolled || isDarkNav ? '/images/mercedes-blue-logo.svg' : '/images/mercedes-logo-white.svg'} alt='Mercedes' />
//             </Link>

//             <div className={`hidden lg:flex gap-6 py-1 px-2 rounded-xl`}>
//               {navigationItems.map(({ label, href }, key) => (
//                 <Link href={href} key={key}>
//                   <p className={`font-normal ${isDarkNav && 'text-dark'} text-sm ${isScrolled ? 'text-primary' : 'text-[#FEFEFE]'}`}>{label}</p>
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className='hidden lg:flex gap-4'>
//             <Link href={`/contact`}>
//               <Button
//                 label='Contact Us'
//                 state={isScrolled || isDarkNav ? 'primary' : 'light'}
//               />
//             </Link>
//           </div>

//           <button
//             type='button'
//             className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
//             onClick={() => setSidebarOpen(true)}>
//             <span className='sr-only'>Open sidebar</span>
//             <HiMiniBars3 className={`h-6 md:h-8 w-6 md:w-8 ${isScrolled || isDarkNav ? 'text-primary' : 'text-white'} font-bold`} aria-hidden='true' />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client"

import Link from "next/link"
import { Button } from "./Button"
import { usePathname } from "next/navigation"
import { HiMiniBars3 } from "react-icons/hi2"
import { IoCloseSharp } from "react-icons/io5"
import { HiChevronDown } from "react-icons/hi2"
import { Link as ScrollLink } from "react-scroll"
import { Fragment, useEffect, useState } from "react"
import { Dialog, Transition, TransitionChild, DialogPanel } from "@headlessui/react"

interface NavigationItem {
  label: string;
  href?: string;
  isScroll?: boolean;
  submenu?: {
    label: string;
    href: string;
    isScroll?: boolean;
  }[];
}

const navigationItems: NavigationItem[] = [
  {
    label: "About Us",
    submenu: [
      { label: "Who are we", href: "whoarewe", isScroll: true },
      { label: "Vision", href: "vision", isScroll: true },
      { label: "Our mission", href: "mission", isScroll: true },
      { label: "Track record", href: "record", isScroll: true },
    ],
  },
  {
    label: "⁠What we do",
    submenu: [
      { label: "Trading", href: "trading", isScroll: true },
      { label: "Logistics", href: "logistics", isScroll: true },
      { label: "Trade Advisory", href: "consulting", isScroll: true },
    ],
  },
  {
    label: "Products",
    submenu: [
      { label: "Herbs & Spices", href: "/product/herbs-spices-botanicals" },
      { label: "Nuts & Oil Seeds", href: "/product/nuts-and-oil-seeds" },
      { label: "Energy", href: "/product/energy-and-natural-resources" },
      { label: "Solid Minerals", href: "/product/solid-minerals" },
    ],
  },
  { label: "Media", href: "/gallery" },
];


export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    setSidebarOpen(false)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const darkNavLink = ["/contact", "/gallery", "/product"]
  const isDarkNav = darkNavLink.includes(pathname) || darkNavLink.some((link) => pathname?.startsWith(link + "/"))

  return (
    <div>
      <Transition show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      <IoCloseSharp className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                {/* SIDEBAR COMPONENT */}
                <div className="flex grow flex-col gap-y-10 overflow-y-auto bg-white px-6">
                  <div className="flex mt-10 shrink-0 items-center">
                    <Link href="/">
                      <img className="h-6 w-auto" src="/images/mercedes-blue-logo.svg" alt="Bord" />
                    </Link>
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="space-y-6">
                      {navigationItems.map((item) => (
                        <li key={item.label}>
                          {item.submenu ? (
                            <div>
                              <p className="font-normal text-lg text-gray mb-3">{item.label}</p>
                              <ul className="ml-4 space-y-3">
                                {item.submenu.map((subItem) => (
                                  <li key={subItem.label}>
                                    {subItem.isScroll ? (
                                      <ScrollLink
                                        to={subItem.href}
                                        smooth={true}
                                        duration={500}
                                        className={`font-normal text-base cursor-pointer ${pathname === subItem.href || pathname?.startsWith(subItem.href + "/")
                                          ? "text-primary"
                                          : "text-gray-600"
                                          }`}
                                        onClick={() => setSidebarOpen(false)}
                                      >
                                        {subItem.label}
                                      </ScrollLink>
                                    ) : (
                                      <Link
                                        href={subItem.href}
                                        className={`font-normal text-base ${pathname === subItem.href || pathname?.startsWith(subItem.href + "/")
                                          ? "text-primary"
                                          : "text-gray-600"
                                          }`}
                                      >
                                        {subItem.label}
                                      </Link>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            <>
                              {item.isScroll ? (
                                <ScrollLink
                                  to={item.href || '#'}
                                  smooth={true}
                                  duration={500}
                                  className="cursor-pointer"
                                  onClick={() => setSidebarOpen(false)}
                                >
                                  <p className={`font-normal text-lg text-gray`}>{item.label}</p>
                                </ScrollLink>
                              ) : (
                                <Link
                                  href={item.href || '#'}
                                  className={`font-normal text-lg ${pathname === item.href || pathname?.startsWith(item.href + "/")
                                    ? "text-primary"
                                    : "text-gray"
                                    }`}
                                >
                                  {item.label}
                                </Link>
                              )}
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Link href={`/contact`}>
                        <Button label="Contact Us" className="" fullWidth />
                      </Link>
                    </div>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div
        className={`w-full z-50 md:z-[100] fixed  py-4 md:px-6 transition-all duration-300 ${isScrolled ? "bg-[#F6F7FF]/70 backdrop-blur-md shadow-sm top-0" : "bg-transparent top-5"}`}
      >
        <div
          className={`container ${isScrolled || isDarkNav ? " md:px-0" : "px-8"}   flex items-center justify-between`}
        >
          <div className="flex items-center gap-8">
            <Link href="/">
              <img
                className="h:10 md:h-12 w-auto"
                src={isScrolled || isDarkNav ? "/images/mercedes-blue-logo.svg" : "/images/mercedes-logo-white.svg"}
                alt="Mercedes"
              />
            </Link>

            <div className={`hidden lg:flex gap-6 py-1 px-2 rounded-xl`}>
              {navigationItems.map((item, key) => (
                <div key={key}>
                  {item.submenu ? (
                    <div className="relative group" onMouseEnter={() => { }} onMouseLeave={() => { }}>
                      <div
                        className={`flex items-center gap-1 font-normal ${isDarkNav && "text-dark"} text-sm ${isScrolled ? "text-primary" : "text-[#FEFEFE]"} hover:opacity-80 transition-opacity cursor-pointer`}
                      >
                        {item.label}
                        <HiChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                      </div>
                      <div className="absolute left-0 mt-2 w-72 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-out transform scale-95 group-hover:scale-100">
                        <div className="py-2">
                          {item.submenu.map((subItem) =>
                            subItem.isScroll ? (
                              <ScrollLink
                                key={subItem.label}
                                to={subItem.href}
                                smooth={true}
                                duration={500}
                                className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-50 hover:text-primary cursor-pointer ${pathname === subItem.href || pathname?.startsWith(subItem.href + "/")
                                  ? "text-primary font-medium"
                                  : "text-gray-700"
                                  }`}
                              >
                                {subItem.label}
                              </ScrollLink>
                            ) : (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-50 hover:text-primary ${pathname === subItem.href || pathname?.startsWith(subItem.href + "/")
                                  ? "text-primary font-medium"
                                  : "text-gray-700"
                                  }`}
                              >
                                {subItem.label}
                              </Link>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {item.isScroll ? (
                        <ScrollLink to={item.href || '#'} smooth={true} duration={500} className="cursor-pointer">
                          <p
                            className={`font-normal ${isDarkNav && "text-dark"} text-sm ${isScrolled ? "text-primary" : "text-[#FEFEFE]"} hover:opacity-80 transition-opacity`}
                          >
                            {item.label}
                          </p>
                        </ScrollLink>
                      ) : (
                        <Link href={item.href || '#'}>
                          <p
                            className={`font-normal ${isDarkNav && "text-dark"} text-sm ${isScrolled ? "text-primary" : "text-[#FEFEFE]"}`}
                          >
                            {item.label}
                          </p>
                        </Link>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex gap-4">
            <Link href={`/contact`}>
              <Button label="Contact Us" state={isScrolled || isDarkNav ? "primary" : "light"} />
            </Link>
          </div>

          <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
            <span className="sr-only">Open sidebar</span>
            <HiMiniBars3
              className={`h-6 md:h-8 w-6 md:w-8 ${isScrolled || isDarkNav ? "text-primary" : "text-white"} font-bold`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  )
}
