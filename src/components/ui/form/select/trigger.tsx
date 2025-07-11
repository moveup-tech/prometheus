import * as SelectPrimitive from "@radix-ui/react-select";

export type SelectTriggerProps = {} & SelectPrimitive.SelectTriggerProps;

export function Trigger({ children, ...rest }: SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger
      {...rest}
      className="flex w-full items-start justify-between rounded border-2 border-zinc-200 bg-zinc-50 p-2 outline-primary-dark"
    >
      {children}
    </SelectPrimitive.Trigger>
  );
}
