import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

interface IButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({
  className,
  isLoading,
  disabled,
  ...props
}: IButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      {...props}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:bg-transparent px-6 h-12 rounded-2xl transition-all text-white font-medium disable:text-gray-400 disabled:cursor-not-allowed flex items-center justify-center',
        className,
      )}
    >
      {isLoading ? <Spinner /> : <>{props.children}</>}
    </button>
  );
}
