import { cn } from "@/lib/utils";
import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return <div className={cn("grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto", className)}>{children}</div>;
};

export const BentoGridItem = ({ className, title, description, header, icon, children }: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-3 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-3",
        className
      )}
    >
      {header}
      <div className="transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">{description}</div>
        {children}
      </div>
    </div>
  );
};
