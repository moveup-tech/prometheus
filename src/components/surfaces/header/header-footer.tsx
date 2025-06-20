import { ReactNode } from "react";
import { Menu, MenuFooterProps } from "../menu";

interface HeaderFooterProps extends MenuFooterProps {
  children: ReactNode;
}

export function Footer({ children, ...rest }: HeaderFooterProps) {
  return <Menu.Footer {...rest}>{children}</Menu.Footer>;
}
