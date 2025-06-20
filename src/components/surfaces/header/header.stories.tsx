import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

import Logo from "@/assets/logo.svg";

import { Bell, LifeBuoy, LogOut, MenuIcon, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/form/button";

export default {
  component: Header.Root,
  title: "Surfaces/Header",
  tags: ["autodocs"],
} as Meta<typeof Header>;

export const Default: StoryObj<typeof Header> = {
  render: ({ ...rest }) => (
    <Header.Root {...rest}>
      <Header.Image src={Logo} alt="Super Festval" />
      <Header.Menu
        role="Admin"
        username="User"
        image="https://placehold.co/600x400"
      >
        <Header.Content>
          <Header.Item href="#" icon={User}>
            Perfil
          </Header.Item>
          <Header.Item href="#" icon={Bell}>
            Notificações
          </Header.Item>
          <Header.Item href="#" icon={Settings}>
            Configurações
          </Header.Item>
        </Header.Content>
        <Header.Footer>
          <Header.Item href="#" icon={LifeBuoy}>
            Ajuda
          </Header.Item>
          <Button className="w-full" iconRight={LogOut}>
            Sair
          </Button>
        </Header.Footer>
      </Header.Menu>
    </Header.Root>
  ),
};
