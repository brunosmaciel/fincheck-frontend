import { ExitIcon } from '@radix-ui/react-icons';
import { DropdownMenu } from './DropdownMenu';
import { useAuth } from '../../app/contexts/AuthContext';
interface IUserMenuProps {}

export function UserMenu({}: IUserMenuProps) {
  const { signout } = useAuth();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="rounded-full bg-teal-0 w-12 h-12  flex items-center justify-center border-teal-200 border">
          <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">
            BR
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32 data-[side=bottom]:animate-slide-up-and-fade">
        <DropdownMenu.Item
          onSelect={() => signout()}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon className="w-6 h-6" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
