import { PlusIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import BankAccountIcon from '../../../../components/icons/BankAccountIcon';

interface IindexProps {}

export function Fab({}: IindexProps) {
  return (
    <div className="bottom-16 right-16 fixed">
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div
            className="fixed text-white bg-teal-900 h-12 w-12 
        rounded-full flex items-center justify-center"
          >
            <PlusIcon className="h-6 w-6" />
          </div>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="data-[side=top]:animate-slide-down-and-fade">
          <DropdownMenu.Item className="gap-2">
            <CategoryIcon type="expense" />
            Nova Despesa
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            {' '}
            <CategoryIcon type="income" />
            Nova Receita
          </DropdownMenu.Item>
          <DropdownMenu.Item className="gap-2">
            <BankAccountIcon />
            Nova Conta
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
}
