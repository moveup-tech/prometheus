import { HTMLAttributes } from "react";
import { tv } from "tailwind-variants";

const menuFooterVariant = tv({
  base: "bg-background border-t border-t-background-light rounded-b",
});

export type MenuFooterProps = {} & HTMLAttributes<HTMLElement>;

export function Footer({ children, className, ...rest }: MenuFooterProps) {
  return (
    <div className={menuFooterVariant({ className })} {...rest}>
      {children}
    </div>
  );
}
