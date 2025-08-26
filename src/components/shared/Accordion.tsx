'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowDownSLine, RiArrowDownWideLine, RiArrowUpSLine, RiArrowUpWideLine } from 'react-icons/ri';

interface AccordionProps {
  title: string;
  content: string | React.ReactNode;
  isActive: boolean;
  handleToggleAccordion: (val: any) => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  [key: string]: any;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isActive,
  className,
  variant = 'primary',
  handleToggleAccordion,
  rest,
}) => {
  const isPrimaryVariant = variant === 'primary';

  return (
    <div
      className={` w-full px-5 rounded-xl  bg-[#F4F4F4]/50 ${className}`}
      {...rest}>
      <div
        className='flex justify-between gap-4  items-center cursor-pointer py-4'
        onClick={handleToggleAccordion}>
        <p
          className={`${isPrimaryVariant ? 'lg:text-lg font-medium text-black' : 'lg:text-lg'}`}>
          {title}
        </p>
        <div className='min-h-[40px] h-[40px]'>
          <div className='flex justify-center h-full w-full items-center'>
            {isActive ? (
              <RiArrowUpSLine className='text-dark w-6 h-6' />
            ) : (
              <RiArrowDownSLine className='text-dark w-6 h-6' />
            )}
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.section
            key='content'
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}>
            <div className='pb-3 pr-2 text-sm md:text-base leading-6 max-h-[400px] text-light max-w-[584px] text-black/70'>
              {content}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};
