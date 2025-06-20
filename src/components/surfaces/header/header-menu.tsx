import { Avatar } from "@/components/ui/avatar";
import { Text } from "@/components/typograph/text";

import { Menu as MenuElement, MenuRootProps } from "../menu";

export type HeaderMenuProps = MenuRootProps & {
  image: string;
  username: string;
  role: string;
};

export function Menu({
  role,
  image,
  username,
  children,
  ...rest
}: HeaderMenuProps) {
  return (
    <MenuElement.Root {...rest}>
      <MenuElement.Trigger>
        <Avatar image={image} username={username} />
      </MenuElement.Trigger>
      <MenuElement.Portal>
        <MenuElement.Header>
          <Avatar image={image} username={username} />
          <div className="flex flex-col">
            <Text as="strong">{username}</Text>
            <Text size="xs" as="small">
              {role}
            </Text>
          </div>
        </MenuElement.Header>
        {children}
      </MenuElement.Portal>
    </MenuElement.Root>
  );
}
