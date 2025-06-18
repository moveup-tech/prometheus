import { Avatar } from "@/components/ui/avatar";
import { Menu, MenuRootProps } from "../menu";
import { Text } from "@/components/typograph/text";
import { LifeBuoy, LogOut } from "lucide-react";
import { Button } from "@/components/ui/form/button";

export type HeaderMenuProps = MenuRootProps & {
  image: string;
  username: string;
  role: string;
};

export function HeaderMenu({
  role,
  image,
  username,
  children,
  ...rest
}: HeaderMenuProps) {
  return (
    <Menu.Root {...rest}>
      <Menu.Trigger>
        <Avatar image={image} username={username} />
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Header>
          <Avatar image={image} username={username} />
          <div className="flex flex-col">
            <Text as="strong">{username}</Text>
            <Text size="xs" as="small">
              {role}
            </Text>
          </div>
        </Menu.Header>
        <Menu.Content>{children}</Menu.Content>
        <Menu.Footer>
          <Menu.Item href="#" icon={LifeBuoy}>
            Ajuda
          </Menu.Item>
          <Button
            iconLeft={LogOut}
            className="w-full rounded-none rounded-b bg-foreground/10 text-primary-main hover:bg-foreground/25"
          >
            Sair
          </Button>
        </Menu.Footer>
      </Menu.Portal>
    </Menu.Root>
  );
}
