import { HTMLAttributes } from "react";

import { useSidebar } from "./context/sidebar";
import { tv } from "tailwind-variants";

const variant = tv({
  base: "parent group grid h-full w-full max-w-60 grid-rows-[auto,1fr,auto] gap-4 rounded bg-white data-[state=close]:max-w-24",
});

export type SidebarContainerProps = {} & HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className,
  ...rest
}: SidebarContainerProps) {
  const { state } = useSidebar();

  return (
    <div {...rest} data-state={state} className={variant({ className })}>
      {children}
    </div>
  );
}
