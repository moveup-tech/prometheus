import { tv } from "tailwind-variants";
import { forwardRef, TextareaHTMLAttributes } from "react";

const variants = tv({
  base: "w-full p-2 bg-zinc-50 border border-zinc-100 rounded outline-primary-dark",
  variants: {
    variant: {
      default: "border-2 border-zinc-200 focus-within:border-primary-dark",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, name, className, ...rest }, ref) => (
    <>
      <div className={variants({ className })}>
        <textarea
          ref={ref}
          {...rest}
          name={name}
          className="w-full bg-transparent outline-none"
        ></textarea>
      </div>

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </>
  )
);

TextArea.displayName = "TextArea";
