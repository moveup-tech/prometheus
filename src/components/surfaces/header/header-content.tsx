import { ReactNode } from "react";
import { Menu as MenuElement, MenuRootProps } from "../menu";

export interface HeaderContentProps {
  children: ReactNode;
}

export function Content({ children, ...rest }: HeaderContentProps) {
  return <MenuElement.Content {...rest}>{children}</MenuElement.Content>;
}
