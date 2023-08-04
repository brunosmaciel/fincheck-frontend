import { ComponentProps } from "react";
interface IInputProps extends ComponentProps<"input"> {}

export function Input({ placeholder, name, id, ...props }: IInputProps) {
  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={id ?? name}
        className="bg-white pt-4 rounded-md border w-full border-gray-500 h-[52px] text-gray-800 px-3 placeholder-shown:pt-0 peer transition-all focus:border-gray-800 outline-none"
        placeholder=" "
      />

      <label
        htmlFor={name}
        // className="absolute left-[13px] top-3.5 pointer-events-none text-gray-700"
        className="absolute  text-xs left-[13px] top-2 pointer-events-none text-gray-700
        peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all
        "
      >
        {placeholder}
      </label>
    </div>
  );
}
