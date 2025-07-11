import { LucideProps, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useSidebar } from "./context/sidebar";

export type SidebarIconProps = {} & LucideProps;

export function Icon({ ...rest }: SidebarIconProps) {
  const { toggle, state } = useSidebar();

  return state === "open" ? (
    <PanelLeftClose {...rest} className="cursor-pointer" onClick={toggle} />
  ) : (
    <PanelLeftOpen {...rest} className="cursor-pointer" onClick={toggle} />
  );
}
