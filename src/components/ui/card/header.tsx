import { ElementType, HTMLAttributes, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

export const headerVariant = tv({
  base: "flex items-start justify-between rounded-t bg-zinc-200 p-4",
});

export const iconVariant = tv({
  base: "rounded bg-zinc-500/25 p-2 text-zinc-500",
  variants: {
    variant: {
      alert: "rounded bg-primary-main0/25 p-2 text-primary-main0",
      info: "rounded bg-blue-500/25 p-2 text-blue-500",
      success: "rounded bg-green-500/25 p-2 text-green-500",
      destructive: "rounded bg-red-500/25 p-2 text-red-500",
    },
  },
});

export type HeaderProps = {
  icon?: ElementType;
  iconColor?: "alert" | "info" | "success" | "destructive" | undefined;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof headerVariant>;

export const Header = ({
  children,
  iconColor,
  icon: Icon,
  className,
}: HeaderProps) => {
  return (
    <div className={headerVariant({ className })}>
      {children}
      {Icon && (
        <div className={iconVariant({ variant: iconColor, className })}>
          <Icon size={16} />
        </div>
      )}
    </div>
  );
};
