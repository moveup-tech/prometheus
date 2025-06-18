import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const variant = tv({
  base: "w-full",
});

export type SidebarContentProps = {} & HTMLAttributes<HTMLElement>;

export function Content({ children, className, ...rest }: SidebarContentProps) {
  return (
    <div {...rest} className={variant({ className })}>
      {children}
    </div>
  );
}
