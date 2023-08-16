import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { AccountsSliderNavigation } from './AccountsSliderNavigation';
import { useAccountsController } from './useAccountsController';
interface IAccountsProps {}

export function Accounts({}: IAccountsProps) {
  const { setSliderState, sliderState, windowWidth } = useAccountsController();
  console.log(windowWidth);
  return (
    <div className="flex flex-col text-white bg-teal-900 rounded-2xl h-full w-full lg:p-10 md:p-10 px-4 py-8">
      <div>
        <span>Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            {formatCurrency(10230.65)}
          </strong>
          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>
      <div className="flex-col  flex-1 flex justify-end">
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
              className="flex items-center justify-between"
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
                  balance={1000.23}
                  color={'#7950F2'}
                  name={'Nubank'}
                />
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
