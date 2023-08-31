import { Logo } from './Logo';
import { Transition } from '@headlessui/react';
interface IPageLoaderProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: IPageLoaderProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150 "
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="z-50 slide-out-bottom flex items-center justify-center bg-teal-900 fixed top-0 left-0 w-full h-full">
        <div className="flex flex-col items-center gap-2">
          <Logo className="text-white h-10" />
          {/* <Spinner className="text-teal-900 fill-white" /> */}
        </div>
      </div>
    </Transition>
  );
}
