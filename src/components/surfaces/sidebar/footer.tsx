import { HTMLAttributes } from "react";

import { useSidebar } from "./context/sidebar";
import { tv } from "tailwind-variants";

export type User = {
  name: string;
  image: string;
  role: string;
};

const variant = tv({
  base: "w-full rounded-b data-[state=close]:max-w-24",
});

export type SidebarFooterProps = {} & HTMLAttributes<HTMLElement>;

export function Footer({ children, className, ...rest }: SidebarFooterProps) {
  const { state } = useSidebar();

  return (
    <div {...rest} data-state={state} className={variant({ className })}>
      {children}
    </div>
  );
}