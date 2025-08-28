import clsx from 'clsx';
import { TextfieldProps } from './types';
import { RiSearchEyeLine } from 'react-icons/ri';

export const Textfield = ({
  type = 'text',
  id,
  ref,
  label,
  error,
  disabled = false,
  required,
  prefixIcon,
  surfixIcon,
  width,
  placeholder,
  register,
  className,
  hasError,
  showOptional,
  searchField,
  onChange,
  labelClassName,
  ...rest
}: TextfieldProps) => {
  const textfieldBaseClass = `bg-white block w-full rounded-[7px] border-0 py-3 ring-1 placeholder:text-gray shadow-sm ring-1 ring-inset ring-[#656565] focus:outline-none focus:ring-1 focus:ring-primary text-sm leading-6 ${width} disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed disabled:hover:ring-gray-300 h-[43px] text-[#5C5C5C]`;

  const textfieldState = error || hasError ? 'ring-red-500' : 'ring-[#EBEBEB]';

  const newPrefixIcon = searchField ? (
    <RiSearchEyeLine className='text-gray-400 h-5 w-5 bg-transparent' aria-hidden='true' />
  ) : (
    prefixIcon
  );

  const textfieldClasses = clsx(
    textfieldBaseClass,
    textfieldState,
    newPrefixIcon ? 'pl-10' : 'px-3',
    surfixIcon ? 'pr-10' : 'pr-3',
    className
  );

  return (
    <div>
      {typeof label === 'string' ? (
        <label htmlFor={id} className={`block text-[#868C98] text-sm mb-1 ${labelClassName}`}>
          {label}{' '}
          {!required && showOptional && <span className='text-gray-400'>(Optional)</span>}{' '}
          {required && <span className='text-primary'>*</span>}
        </label>
      ) : (
        label
      )}

      <div className='relative rounded-lg'>
        {!!newPrefixIcon && (
          <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
            {newPrefixIcon}
          </div>
        )}

        {surfixIcon && (
          <div className='absolute inset-y-0 right-0 flex items-center pr-3'>{surfixIcon}</div>
        )}
        <div className='flex'>
          <input
            id={id}
            ref={ref}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            onChange={onChange}
            {...(register ? register(id) : {})}
            {...rest}
            className={textfieldClasses}
          />
        </div>
      </div>

      {error && <p className='text-red-500 text-xs mt-2'>{error}</p>}
    </div>
  );
};
