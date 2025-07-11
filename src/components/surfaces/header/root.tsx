import { tv, VariantProps } from "tailwind-variants";

export const rootVariation = tv({
  base: "fixed left-0 top-0 w-full bg-foreground/5 border-b border-b-foreground/10",
});

export type HeaderRootProps = {} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof rootVariation>;

export function Root({ children, className, ...rest }: HeaderRootProps) {
  return (
    <header className={rootVariation({ className })} {...rest}>
      <div className="m-auto flex w-full max-w-7xl items-center justify-between p-4">
        {children}
      </div>
    </header>
  );
}
