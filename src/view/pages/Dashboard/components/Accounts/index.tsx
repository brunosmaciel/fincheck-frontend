import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { AccountsSliderNavigation } from './AccountsSliderNavigation';
import { useAccountsController } from './useAccountsController';
import { cn } from '../../../../../app/utils/cn';
import { Spinner } from '../../../../components/Spinner';
import { PlusIcon } from '@radix-ui/react-icons';
interface IAccountsProps {}

export function Accounts({}: IAccountsProps) {
  const {
    setSliderState,
    sliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts,
  } = useAccountsController();
  return (
    <div className="flex flex-col text-white bg-teal-900 rounded-2xl h-full w-full lg:p-10 md:p-10 px-4 py-8">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}
      {!isLoading && (
        <>
          <div>
            <span>Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  'text-2xl tracking-[-1px] text-white',
                  !areValuesVisible && 'blur-md transition-all',
                )}
              >
                {formatCurrency(10230.65)}
              </strong>
              <button
                onClick={() => toggleValuesVisibility()}
                className="w-8 h-8 flex items-center justify-center"
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>
          <div className="flex-col  flex-1 flex justify-end">
            {accounts.length === 0 && (
              <>
                <div slot="container-start" className="mb-4">
                  <strong className="text-white tracking-[-1px] font-bold text-lg ">
                    Minhas contas
                  </strong>
                </div>
                <button className=" hover:bg-teal-950/10 transition-all mt-4 h-52 border-dashed border-2 border-teal-600 rounded-2xl flex flex-col items-center justify-center gap-4 text-white">
                  <div className="w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center">
                    <PlusIcon className="h-6 w-6" />
                  </div>
                  <span className="font-medium tracking-[-0.5px] block w-32 text-center">
                    Cadastre uma nova conta
                  </span>
                </button>
              </>
            )}
            {accounts.length > 0 && (
              <div>
                <Swiper
                  spaceBetween={16}
                  slidesPerView={windowWidth <= 500 ? 1.2 : 2.1}
                  onSlideChange={(swiper) => {
                    setSliderState({
                      isBeginning: swiper.isBeginning,
                      isEnd: swiper.isEnd,
                    });
                  }}
                >
                  <div
                    slot="container-start"
                    className="mb-4 flex items-center justify-between"
                  >
                    <strong className="text-white tracking-[-1px] font-bold text-lg ">
                      Minhas contas
                    </strong>

                    <AccountsSliderNavigation
                      isBeginning={sliderState.isBeginning}
                      isEnd={sliderState.isEnd}
                    />
                  </div>
                  <div className="mt-4">
                    <SwiperSlide>
                      <AccountCard
                        type="CHECKING"
                        balance={1000.23}
                        color={'#7950F2'}
                        name={'Nubank'}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AccountCard
                        type="CHECKING"
                        balance={1000.23}
                        color={'#7950F2'}
                        name={'Carteira'}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <AccountCard
                        type="CHECKING"
                        balance={23.53}
                        color={'#fff'}
                        name={'Nubank'}
                      />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
