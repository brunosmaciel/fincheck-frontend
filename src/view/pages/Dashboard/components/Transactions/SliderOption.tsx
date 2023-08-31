import { useSwiper } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';
interface ISliderOptionProps {
  isActive: boolean;
  month: string;
  index: number;
}

export function SliderOption({ isActive, month, index }: ISliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        'text-sm text-gray-800 tracking-[-0.5px] font-medium w-full rounded-full h-12',
        isActive && 'bg-white',
      )}
    >
      {month}
    </button>
  );
}
