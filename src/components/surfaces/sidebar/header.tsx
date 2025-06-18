import { HTMLAttributes } from "react";
import { useSidebar } from "./context/sidebar";
import { tv } from "tailwind-variants";

const variant = tv({
  base: "border-b-foreground/10 flex h-16 w-full items-center justify-between rounded-t border-b p-4 data-[state=close]:max-w-24 data-[state=close]:justify-center"
})

export type SidebarHeaderProps = {} & HTMLAttributes<HTMLElement>;

export function Header({ children, className, ...rest }: SidebarHeaderProps) {
  const { state } = useSidebar();
  return (
    <div
      {...rest}
      data-state={state}
      className={variant({ className })}
    >
      {children}
    </div>
  );
}
