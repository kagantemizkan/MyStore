import { cn } from "@/lib/utils";
import React from "react";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoGridItemProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  footer?: React.ReactNode;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-[12rem] gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, title, description, header, icon, footer, children }: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "group relative row-span-1 rounded-2xl border border-border/60 bg-card/60 supports-[backdrop-filter]:bg-card/40 backdrop-blur-sm shadow-sm transition-all duration-200 hover:shadow-md hover:border-border overflow-hidden",
        "ring-1 ring-transparent hover:ring-primary/10",
        "flex flex-col",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-primary/5 opacity-80" />
      {header && (
        <div className="relative z-10 p-4 pb-0">
          {header}
        </div>
      )}
      <div className="relative z-10 p-4 space-y-2 flex-1 flex flex-col">
        {icon}
        {title && <div className="font-semibold text-foreground/90 text-base leading-tight">{title}</div>}
        {description && (
          <div className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </div>
        )}
        {children && <div className="mt-2 flex-1">{children}</div>}
      </div>
      {footer && (
        <div className="relative z-10 p-4 pt-0">
          {footer}
        </div>
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </div>
    </div>
  );
};
