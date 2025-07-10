import { tv } from "tailwind-variants";
import { VariantProps } from "tailwind-variants";
import React, { ButtonHTMLAttributes, ElementType } from "react";
import { Spinner } from "./spinner";

const buttonVariant = tv({
  base: "px-4 py-2 rounded text-zinc-50 transition-colors flex gap-2 items-center justify-center",
  variants: {
    variant: {
      default: "bg-primary-main hover:bg-primary-dark",
      secondary: "bg-secondary-main text-background hover:bg-secondary-main/75",
      link: "bg-transparent text-primary-main underline w-fit",
      destructive: "bg-rose-600 text-rose-200 hover:bg-rose-700",
      ghost: "bg-zinc-200 text-zinc-500 hover:bg-zinc-200/75",
    },
    disabled: {
      true: "bg-zinc-600 hover:bg-zinc-700 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type ButtonProps = {
  as?: ElementType;
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ElementType;
  iconRight?: React.ElementType;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariant> &
  React.ComponentPropsWithoutRef<ElementType>;

export function Button({
  as,
  isLoading = false,
  asChild,
  variant,
  children,
  disabled,
  className,
  iconLeft,
  iconRight,
  ...rest
}: ButtonProps) {
  const As: ElementType = as || "button";

  const IconLeft = iconLeft;
  const IconRight = iconRight;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...rest,
      className: buttonVariant({ className, variant, disabled }),
    } as any);
  }

  if (isLoading) {
    return (
      <As {...rest} className={buttonVariant({ className, variant, disabled })}>
        <Spinner />
      </As>
    );
  }

  return (
    <As {...rest} className={buttonVariant({ className, variant, disabled })}>
      {IconLeft && <IconLeft size={16} />}
      {children}
      {IconRight && <IconRight size={16} />}
    </As>
  );
}

Button.displayName = "Button";