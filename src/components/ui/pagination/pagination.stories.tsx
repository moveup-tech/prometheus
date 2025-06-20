import { Meta, StoryObj } from "@storybook/react";

import { Pagination, PaginationProps } from "./index";

export default {
  component: Pagination,
  title: "Display/Pagination",
  tags: ["autodocs"],
  args: {
    currentPage: 1,
    perPage: 30,
    totalCount: 100,
  },
} as Meta<PaginationProps>;

export const Default: StoryObj<PaginationProps> = {
  render: ({ totalCount, perPage, currentPage, ...rest }) => (
    <Pagination
      currentPage={currentPage}
      totalCount={totalCount}
      perPage={perPage}
      {...rest}
    />
  ),
};
