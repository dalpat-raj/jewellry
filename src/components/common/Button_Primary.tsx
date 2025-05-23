import React, { ReactNode } from "react";

export const Button_Primary = ({ children }: { children: ReactNode }) => {
  return (
    <button className="uppercase border-[1px] border-black py-2 px-6 text-lg cursor-pointer">
      {children}
    </button>
  );
};

export const Button_light = ({
  Icon,
  size,
  text,
}: {
  Icon: React.ElementType;
  size: number;
  text: string;
}) => {
  return (
    <button className="bg-[var(--white)] dark:bg-sidebar border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-sm flex justify-center items-center gap-2  cursor-pointer">
      <Icon size={size} />
      <span className="text-[13px] font-medium max-sm:hidden">{text}</span>
    </button>
  );
};

export const Button_Dark = ({
  Icon,
  size,
  text,
}: {
  Icon: React.ElementType;
  size: number;
  text: string;
}) => {
  return (
    <button
      className={
        "border border-gray-200 dark:border-gray-800 bg-accent px-2 py-1 rounded-sm flex gap-2 items-center cursor-pointer"
      }
    >
      <Icon size={size} />
      <span className="text-[13px] font-medium ">{text}</span>
    </button>
  );
};

export const Button_Light_Height = ({
  Icon,
  size,
  text,
  py,
  pys,
}: {
  Icon: React.ElementType;
  size: number;
  text: string;
  py: string;
  pys: string;
}) => {
  return (
    <button
      className={`bg-[var(--white)] dark:bg-sidebar border border-gray-200 dark:border-gray-800 px-2 py-[${py}] max-sm:py-[${pys}] rounded-sm flex justify-center items-center gap-2  cursor-pointer hover:bg-accent`}
    >
      <Icon size={size} />
      <span className="text-[13px] font-medium">{text}</span>
    </button>
  );
};
