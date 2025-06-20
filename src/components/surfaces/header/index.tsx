import { Footer } from "./header-footer";
import { Item, HeaderMenuItemProps } from "./header-item";
import { Menu, HeaderMenuProps } from "./header-menu";
import { Content, HeaderContentProps } from "./header-content";
import { Image, ImageProps } from "./image";
import { HeaderRootProps, Root } from "./root";

export const Header = {
  Root,
  Image,
  Menu,
  Item,
  Footer,
  Content,
};

export type {
  HeaderRootProps,
  ImageProps,
  HeaderMenuProps,
  HeaderMenuItemProps,
  HeaderContentProps,
};
