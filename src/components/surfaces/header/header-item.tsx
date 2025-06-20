import { Menu, MenuItemProps } from "../menu";

export type HeaderMenuItemProps = MenuItemProps & {};

export function Item({
  href,
  children,
  icon: Icon,
  className,
}: HeaderMenuItemProps) {
  return (
    <Menu.Item className={className} href={href} icon={Icon}>
      {children}
    </Menu.Item>
  );
}
