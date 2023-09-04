import * as RdxDropdownMenu from '@radix-ui/react-dropdown-menu';
import { cn } from '../../app/utils/cn';

interface IDropdownMenuProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
  side?: string;
}

export function DropdownMenuRoot({ children }: IDropdownMenuProps) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}
export function DropdownMenuContent({
  children,
  className,
}: IDropdownMenuProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        side="bottom"
        className={cn(
          'p-2 rounded-2xl bg-white  space-y-2 drop-shadow-[0px_11px_20px_0px rgba(0,0,0,0.10)]',
          className,
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}
export function DropdownMenuItem({
  children,
  className,
  onSelect,
}: IDropdownMenuProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        'cursor-pointer transition-colors px-4 py-2 text-sm text-gray-800 min-h-[40px] data-[highlighted]:bg-gray-50 outline-none flex items-center',
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}
export function DropdownMenuTrigger({ children }: IDropdownMenuProps) {
  return (
    <RdxDropdownMenu.Trigger className={cn('outline-none')}>
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Trigger: DropdownMenuTrigger,
};
