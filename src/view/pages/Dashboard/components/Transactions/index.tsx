import emptyStateIllustration from '../../../../../app/assets/empty-state.svg';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import { SliderOption } from './SliderOption';
import { SliderNaviation } from './SliderNaviation';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { useTransactionsController } from './useTransactionsController';
import { cn } from '../../../../../app/utils/cn';
import { Spinner } from '../../../../components/Spinner';

interface ITransactionsProps {}

export function Transactions({}: ITransactionsProps) {
  const { areValuesVisible, isLoading, transactions, isInitialLoading } =
    useTransactionsController();
  const hasTransactions = transactions.length > 0;
  return (
    <div className="bg-gray-100 rounded-2xl h-full w-full  min-h-full lg:p-10 md:p-10 px-4 py-8 flex flex-col">
      {isInitialLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
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

          <main className=" mt-4 space-y-2 flex-1 overflow-y-auto">
            {!hasTransactions && (
              <div className="flex flex-col items-center h-full justify-center">
                <img
                  src={emptyStateIllustration}
                  alt="Empty state illustration"
                />
                <p className="text-gray-700">
                  Nao encontramos nenhuma transação
                </p>
              </div>
            )}

            {hasTransactions && isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <Spinner />
              </div>
            ) : (
              <>
                {transactions.map(({ date, name, type, value }) => (
                  <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <CategoryIcon type={type as 'income' | 'expense'} />
                      <div>
                        <strong className="block font-bold tracking-[-0.5px]">
                          {name}
                        </strong>
                        <strong className="text-sm text-gray-600">
                          {date}
                        </strong>
                      </div>
                    </div>
                    {type === 'income' ? (
                      <span
                        className={cn(
                          'text-green-800 tracking-[-0.5px] font-medium',
                          !areValuesVisible && 'blur-sm',
                        )}
                      >
                        + {formatCurrency(value)}
                      </span>
                    ) : (
                      <span
                        className={cn(
                          'text-red-800 tracking-[-0.5px] font-medium',
                          !areValuesVisible && 'blur-sm',
                        )}
                      >
                        - {formatCurrency(value)}
                      </span>
                    )}
                  </div>
                ))}
              </>
            )}
          </main>
        </>
      )}
    </div>
  );
}
