import { HeaderMenuItem, HeaderMenuItemProps } from "./header-item";
import { HeaderMenu, HeaderMenuProps } from "./header-menu";
import { Image, ImageProps } from "./image";
import { HeaderRootProps, Root } from "./root";

export const Header = {
  Root,
  Image,
  Menu: HeaderMenu,
  Item: HeaderMenuItem,
};

export type {
  HeaderRootProps,
  ImageProps,
  HeaderMenuProps,
  HeaderMenuItemProps,
};
