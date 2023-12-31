import { ChevronDownIcon } from '@radix-ui/react-icons';
import { TransactionsIcon } from '../../../../components/icons/TransactionsIcon';
import { DropdownMenu } from '../../../../components/DropdownMenu';
import { IncomeIcon } from '../../../../components/icons/IncomeIcon';
import { ExpensesIcon } from '../../../../components/icons/ExpensesIcon';

interface ITransactionTypeDropdownProps {}

export function TransactionTypeDropdown({}: ITransactionTypeDropdownProps) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex items-center gap-2">
          <TransactionsIcon />
          <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">
            Transações
          </span>
          <ChevronDownIcon className="text-gray-900" />
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="z-50 w-[279px] max-w-[279px]">
        <DropdownMenu.Item className="gap-2">
          <IncomeIcon />
          Despesas
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <ExpensesIcon />
          Receitas
        </DropdownMenu.Item>
        <DropdownMenu.Item className="gap-2">
          <TransactionsIcon />
          Transacoes
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
