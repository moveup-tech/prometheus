import { AnchorHTMLAttributes, forwardRef } from "react";
import { tv } from "tailwind-variants";

const variant = tv({
  base: "flex w-full items-center gap-2 p-4 transition-colors hover:bg-background/75 hover:text-primary-dark",
});

export type MenuItemProps = {
  icon?: React.ElementType;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const Item = forwardRef<HTMLAnchorElement, MenuItemProps>(
  ({ children, icon: Icon, className, ...rest }: MenuItemProps, ref) => {
    return (
      <a {...rest} ref={ref} className={variant({ className })}>
        {Icon && <Icon size={14} />}
        {children}
      </a>
    );
  }
);
