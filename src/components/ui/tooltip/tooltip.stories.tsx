import { Meta, StoryObj } from "@storybook/react";

import { Tooltip, TooltipProps } from ".";
import { Text } from "@/components/typograph/text";

export default {
  component: Tooltip,
  title: "Surfaces/Tooltip",
  tags: ["autodocs"],
  render: ({ children, ...rest }) => (
    <Tooltip {...rest}>
      <Text>Teste</Text>
    </Tooltip>
  ),
} as Meta<TooltipProps>;

export const Default: StoryObj<TooltipProps> = {
  args: {},
};
