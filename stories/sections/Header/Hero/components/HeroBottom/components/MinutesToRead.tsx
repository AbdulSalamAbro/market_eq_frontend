import { FC, ComponentProps } from "react";

export interface MinutesToReadProps extends ComponentProps<"span"> {
  mins: number;
}

export const MinutesToRead: FC<MinutesToReadProps> = ({ mins }) => {
  return (
    <div className="flex flex-row gap-1 items-start text-[10px] desktop:text-base tracking-[-0.11px] italic">
      <span className="font-light">{mins} mins</span>
      <span className="font-normal">Read</span>
    </div>
  );
};
