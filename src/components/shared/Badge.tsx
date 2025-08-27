import type { ReactNode } from 'react';

interface BadgeProps {
  icon?: ReactNode;
  text?: string;
  className?: string;
}

export const Badge = ({
  text,
  className,
}: BadgeProps) => {
  return (
    <div
      className={` bg-white py-2 px-2.5 border border-[#EEEEEE] rounded-[10px] w-fit ${className}`}>
      <p className='text-sm md:text-base text-primary leading-1 -tracking-[0.04em]'>{text}</p>
    </div>
  );
};
