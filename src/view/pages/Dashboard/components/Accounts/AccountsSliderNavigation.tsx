import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface IAccountsSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}

export function AccountsSliderNavigation({
  isBeginning,
  isEnd,
}: IAccountsSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div className="flex items-center">
      <button
        className="enabled:hover:bg-black/10 transition-colors py-3 pl-2.5 pr-3.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
        className="enabled:hover:bg-black/10 transition-colors py-3 pl-2.5 pr-3.5 rounded-full disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
