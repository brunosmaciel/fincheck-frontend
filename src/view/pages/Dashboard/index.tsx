import { Logo } from '../../components/Logo';
import { UserMenu } from '../../components/UserMenu';
import { DashboardProvider } from './DashboardContext';
import { Accounts } from './components/Accounts';
import { Transactions } from './components/Transactions/Transactions';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="p-4 md:px-8 md:pb-8 md:pt-6  h-full w-full flex flex-col gap-4">
        <header className="h-12 bg-gray-0 flex items-center justify-between">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>
        <main className="flex-1 flex-col flex md:flex-row gap-4 text-gray-900 max-h-full ">
          <div className="w-full lg:w-1/2 ">
            <Accounts />
          </div>
          <div className="w-full lg:w-1/2 ">
            <Transactions />
          </div>
        </main>
      </div>
    </DashboardProvider>
  );
}
