import { FC } from "react";

export interface MenuProps {
  intent: string;
  menuData: any;
}

export const Menu: FC<MenuProps> = ({ intent, menuData }) => {
  return <nav>Menu</nav>;
};
