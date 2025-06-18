import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import {
  LayoutDashboard,
  LifeBuoy,
  MessageCircle,
  Plus,
  Settings,
  Sticker,
  Ticket,
} from "lucide-react";
import { Menu } from "../menu";
import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/typograph/text";

export default {
  render: () => (
    <div className="h-screen">
      <Sidebar.Root>
        <Sidebar.Container>
          <Sidebar.Header>
            <Sidebar.Title>Menu</Sidebar.Title>
            <Sidebar.Icon />
          </Sidebar.Header>
          <Sidebar.Content>
            <Sidebar.Item icon={LayoutDashboard}>Dashboard</Sidebar.Item>
            <Menu.Root>
              <Menu.Trigger>
                <Sidebar.Item icon={MessageCircle}>Chats</Sidebar.Item>
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Content>
                  <Menu.Item>
                    <Sidebar.Item icon={Plus} className="w-full">
                      Novo
                    </Sidebar.Item>
                  </Menu.Item>
                </Menu.Content>
              </Menu.Portal>
            </Menu.Root>
            <Sidebar.Item icon={Ticket}>Tickets</Sidebar.Item>
            <Sidebar.Item icon={Sticker}>Feedbacks</Sidebar.Item>
          </Sidebar.Content>
          <Sidebar.Footer>
            <Sidebar.Item icon={Settings}>Configuraçoes</Sidebar.Item>
            <Sidebar.Item icon={LifeBuoy}>Ajuda</Sidebar.Item>
            <Sidebar.FooterContent>
              <Avatar
                image="https://github.com/moveup-tech.png"
                username="Jhon Doe"
              />
              <Sidebar.UserContainer>
                <Text as="strong">Daniel</Text>
                <Text size="sm" className="text-foreground">
                  Admin
                </Text>
              </Sidebar.UserContainer>
            </Sidebar.FooterContent>
          </Sidebar.Footer>
        </Sidebar.Container>
      </Sidebar.Root>
    </div>
  ),
  title: "Surfaces/Sidebar",
  tags: ["autodocs"],
} as Meta<typeof Sidebar>;

export const SidebarDefault: StoryObj = {};

