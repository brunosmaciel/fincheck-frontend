import { Outlet } from 'react-router-dom';
import ilustration from '../../app/assets/ilustration.png';

import { Logo } from '../components/Logo';
export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className=" w-full h-full flex justify-center items-center flex-col gap-16 lg:w-1/2">
        <Logo className="h-6 text-gray-500" />

        <div className="w-full max-w-md px-8">
          <Outlet />
        </div>
      </div>
      <div className="w-1/2 hidden h-full  justify-center items-center p-8 relative lg:flex">
        <img
          src={ilustration}
          alt="ilustration"
          className="object-cover w-full h-full max-w-[656px] max-h-[960px] select-none rounded-[32px]"
        />
        <div className="max-w-[656px]  bottom-8 p-10  mx-8 rounded-b-[32px] bg-white absolute text-green-900">
          <Logo className="text-teal-900 h-8" />

          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}
