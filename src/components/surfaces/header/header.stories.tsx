import { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";

import Logo from "@/assets/logo.svg";
import { Menu } from "../menu";
import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/typograph/text";
import { Bell, LifeBuoy, LogOut, MenuIcon, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/form/button";
import { Heading } from "@/components/typograph/heading";

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
        <Header.Item href="#" icon={User}>
          Perfil
        </Header.Item>
        <Header.Item href="#" icon={Bell}>
          Notificações
        </Header.Item>
        <Header.Item href="#" icon={Settings}>
          Configurações
        </Header.Item>
      </Header.Menu>
    </Header.Root>
  ),
};
