import { tv } from "tailwind-variants";
import { VariantProps } from "tailwind-variants";
import { forwardRef, InputHTMLAttributes } from "react";
import { InputMask, InputMaskProps } from "@react-input/mask";

const variants = tv({
  base: "w-full bg-zinc-50 p-2 rounded",
  variants: {
    variant: {
      default: "border-2 border-zinc-200 focus-within:border-primary-main",
    },
    hasError: {
      true: "border-2 border-rose-500 focus-within:border-rose-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
} & VariantProps<typeof variants> &
  InputMaskProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ mask, error, className, ...rest }, ref) => (
    <>
      <div className={variants({ className, hasError: !!error })}>
        {mask ? (
          <InputMask
            ref={ref}
            {...rest}
            mask={mask}
            replacement={{
              _: /\d/,
            }}
            className="w-full bg-transparent outline-none"
          />
        ) : (
          <input
            ref={ref}
            {...rest}
            className="w-full bg-transparent outline-none"
          />
        )}
      </div>

      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </>
  )
);

Input.displayName = "Input";
