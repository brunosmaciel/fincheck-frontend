import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import { SliderOption } from './SliderOption';
import { SliderNaviation } from './SliderNaviation';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';

interface ITransactionsProps {}

export function Transactions({}: ITransactionsProps) {
  return (
    <div className="bg-gray-100 rounded-2xl h-full w-full lg:p-10 md:p-10 px-4 py-8 flex flex-col">
      <header className="">
        <div className="flex items-center justify-between ">
          <button className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
              Transações
            </span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper
            slidesPerView={3}
            centeredSlides
            onSwiper={(swiper) => swiper.slideTo(new Date().getMonth())}
          >
            <SliderNaviation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    index={index}
                    month={month}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className=" mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CategoryIcon type="income" />
            <div>
              <strong className="block font-bold tracking-[-0.5px]">
                Salário
              </strong>
              <strong className="text-sm text-gray-600">31/08/2023</strong>
            </div>
          </div>

          <span className="text-green-800 tracking-[-0.5px] font-medium">
            + {formatCurrency(1579.58)}
          </span>
        </div>

        <div className=" bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CategoryIcon type="expense" />
            <div>
              <strong className="block font-bold tracking-[-0.5px]">
                Almoço
              </strong>
              <strong className="text-sm text-gray-600">24/08/2023</strong>
            </div>
          </div>

          <span className="text-red-800 tracking-[-0.5px] font-medium">
            - {formatCurrency(24)}
          </span>
        </div>
      </div>
    </div>
  );
}
