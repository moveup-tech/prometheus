import { Text } from "@/components/typograph/text";
import { ElementType, HTMLAttributes } from "react";
import { useSidebar } from "./context/sidebar";
import { tv } from "tailwind-variants";

const variant = tv({
  base: "flex w-full gap-2 p-4 text-left transition-colors data-[state=close]:max-w-24 data-[state=close]:justify-center hover:bg-foreground/5",
});

export type SidebarItemProps = {
  icon?: ElementType;
} & HTMLAttributes<HTMLElement>;

export function Item({ children, icon, className, ...rest }: SidebarItemProps) {
  const Icon = icon;

  const { state } = useSidebar();

  return (
    <button {...rest} data-state={state} className={variant({ className })}>
      {Icon && <Icon />}
      <Text
        as="strong"
        data-state={state}
        className="data-[state=close]:hidden"
      >
        {children}
      </Text>
    </button>
  );
}
