'use client';

import clsx from 'clsx';
import { TextAreaFieldProps } from './types';

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  rows = 4,
  label,
  error,
  disabled,
  width,
  placeholder,
  register,
  required,
  className,
  hasError,
  allowResize,
  defaultValue,
  labelClassName,
  showOptional,
}) => {
  const textAreaFieldBaseClass = `block bg-white w-full mt-3 rounded-[7px] border-0 py-[14px] px-3 ring-1 placeholder:text-gray focus:ring-1 !focus:ring-primary focus:ring-primary text-sm leading-6 ${width} disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:ring-gray-300 ${allowResize ? '' : 'resize-none '
    }`;

  const textAreaFieldState = error || hasError ? 'ring-red-500' : 'ring-[#EBEBEB]';

  const textAreaFieldClasses = clsx(textAreaFieldBaseClass, textAreaFieldState, className);
  return (
    <div className='w-full'>
      {typeof label === 'string' ? (
        <label htmlFor={id} className={`block text-[#868C98] text-sm mb-1 ${labelClassName}`}>
          {label}{' '}
          {!required && showOptional && <span className='text-gray-400'>(Optional)</span>}{' '}
          {required && <span className='text-primary'>*</span>}
        </label>
      ) : (
        label
      )}
      <textarea
        style={{ width: '100%' }}
        id={id}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        {...(register ? register(id) : {})}
        className={textAreaFieldClasses}
        defaultValue={defaultValue || ''}
      />
      <p className='text-red-500 text-xs mt-2'>{error}</p>
    </div>
  );
};
