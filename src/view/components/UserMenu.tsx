interface IUserMenuProps {}

export function UserMenu({}: IUserMenuProps) {
  return (
    <div className="rounded-full bg-teal-0 w-12 h-12  flex items-center justify-center border-teal-200 border">
      <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">
        BR
      </span>
    </div>
  );
}
