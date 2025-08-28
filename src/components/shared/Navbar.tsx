'use client';

import Link from 'next/link';
import { Button } from './Button';
import { usePathname } from 'next/navigation';
import { HiMiniBars3 } from 'react-icons/hi2';
import { IoCloseSharp } from 'react-icons/io5';
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';



const navigationItems = [
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  {
    label: 'FAQ',
    href: '/faq',
  },
  { label: 'Gallery', href: '/gallery' },
];

export const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const darkNavLink = ["/services", "/gallery"];
  const isDarkNav = darkNavLink.includes(pathname);

  return (
    <div>
      <Transition show={sidebarOpen} as={Fragment}>
        <Dialog as='div' className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
          <TransitionChild
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'>
            <div className='fixed inset-0 bg-gray-900/80' />
          </TransitionChild>

          <div className='fixed inset-0 flex'>
            <TransitionChild
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'>
              <DialogPanel className='relative mr-16 flex w-full max-w-xs flex-1'>
                <TransitionChild
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'>
                  <div className='absolute left-full top-0 flex w-16 justify-center pt-5'>
                    <button
                      type='button'
                      className='-m-2.5 p-2.5'
                      onClick={() => setSidebarOpen(false)}>
                      <span className='sr-only'>Close sidebar</span>
                      <IoCloseSharp className='h-6 w-6 text-white' aria-hidden='true' />
                    </button>
                  </div>
                </TransitionChild>
                {/* SIDEBAR COMPONENT */}
                <div className='flex grow flex-col gap-y-10 overflow-y-auto bg-white px-6'>
                  <div className='flex mt-10 shrink-0 items-center'>
                    <Link href='/'>
                      <img className='h-6 w-auto' src='/images/mercedes-blue-logo.svg' alt='Bord' />
                    </Link>
                  </div>
                  <nav className='flex flex-1 flex-col'>
                    <ul role='list' className='space-y-6'>
                      {navigationItems.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className={`font-normal text-lg ${pathname === item.href || pathname?.startsWith(item.href + '/')
                              ? 'text-primary'
                              : 'text-gray'
                              }`}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className='mt-8'>
                      <Link href={`/waitlist`}>
                        <Button label='Contact Us' className='' fullWidth />
                      </Link>
                    </div>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <div className={`w-full z-50 md:z-[100] fixed  py-4 md:px-6 transition-all duration-300 ${isScrolled ? 'bg-[#F6F7FF]/70 backdrop-blur-md shadow-sm top-0' : 'bg-transparent top-5'}`}>
        <div className={`container ${isScrolled ? ' md:px-0' : 'px-8'}   flex items-center justify-between`}>
          <div className='flex items-center gap-8'>
            <Link href='/'>
              <img className='h:10 md:h-12 w-auto' src={isScrolled || isDarkNav ? '/images/mercedes-blue-logo.svg' : '/images/mercedes-logo-white.svg'} alt='Mercedes' />
            </Link>

            <div className={`hidden lg:flex gap-6 py-1 px-2 rounded-xl`}>
              {navigationItems.map(({ label, href }, key) => (
                <Link href={href} key={key}>
                  <p className={`font-normal ${isDarkNav && 'text-dark'} text-sm ${isScrolled ? 'text-primary' : 'text-[#FEFEFE]'}`}>{label}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className='hidden lg:flex gap-4'>
            <Link href={`/`}>
              <Button
                label='Contact Us'
                state={isScrolled || isDarkNav ? 'primary' : 'light'}
              />
            </Link>
          </div>

          <button
            type='button'
            className='-m-2.5 p-2.5 text-gray-700 lg:hidden'
            onClick={() => setSidebarOpen(true)}>
            <span className='sr-only'>Open sidebar</span>
            <HiMiniBars3 className={`h-6 md:h-8 w-6 md:w-8 ${isScrolled ? 'text-primary' : 'text-white'} font-bold`} aria-hidden='true' />
          </button>
        </div>
      </div>
    </div>
  );
};
