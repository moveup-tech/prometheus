import { Trigger, MenuTriggerProps } from "./trigger";
import { Content, MenuContentProps } from "./content";
import { Header, MenuHeaderProps } from "./header";
import { Footer, MenuFooterProps } from "./footer";
import { Root, MenuRootProps } from "./root";
import { Portal, MenuPortalProps } from "./portal";
import { Item, MenuItemProps } from "./item";

export const Menu = {
  Root,
  Trigger,
  Portal,
  Header,
  Content,
  Item,
  Footer,
};

export type {
  MenuTriggerProps,
  MenuContentProps,
  MenuHeaderProps,
  MenuFooterProps,
  MenuRootProps,
  MenuPortalProps,
  MenuItemProps,
};
