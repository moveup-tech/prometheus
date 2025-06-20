import * as Popover from "@radix-ui/react-popover";
import { forwardRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const popoverContentVariation = tv({
  base: "bg-zinc-100 rounded shadow-lg",
});

export type PopoverContentProps = {} & Popover.PopoverContentProps &
  VariantProps<typeof popoverContentVariation>;

export const Content = forwardRef<any, PopoverContentProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <Popover.Content
        {...rest}
        ref={ref}
        sideOffset={5}
        className={popoverContentVariation({ className })}
      >
        {children}
      </Popover.Content>
    );
  }
);