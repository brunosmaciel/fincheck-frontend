import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface ISliderNaviationProps {}

export function SliderNaviation({}: ISliderNaviationProps) {
  const swiper = useSwiper();

  return (
    <>
      <button
        onClick={() => swiper.slidePrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10 bg-gradient-to-r from-gray-100 to-transparent"
      >
        <ChevronLeftIcon className="w-6 h-6 text-gray-800 top-1/2" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10 bg-gradient-to-l from-gray-100 to-transparent"
      >
        <ChevronRightIcon className="w-6 h-6 text-gray-800 top-1/2" />
      </button>
    </>
  );
}
