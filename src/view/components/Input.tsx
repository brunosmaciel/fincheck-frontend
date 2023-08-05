import { ComponentProps, forwardRef } from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';
interface IInputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, name, id, error, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          {...props}
          name={name}
          ref={ref}
          id={id ?? name}
          className={cn(
            'bg-white pt-4 rounded-md border w-full border-gray-500 h-[52px] text-gray-800 px-3 placeholder-shown:pt-0 peer transition-all focus:border-gray-800 outline-none',
            error && 'border-red-900',
          )}
          placeholder=" "
        />

        <label
          htmlFor={name}
          className={cn(
            'absolute  text-xs left-[13px] top-2 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all',
          )}
        >
          {placeholder}
        </label>

        {error && (
          <div className="transition-all text-red-900  flex items-center gap-2 mt-4">
            <CrossCircledIcon />
            <span className="text-xs ">{error}</span>
          </div>
        )}
      </div>
    );
  },
);
