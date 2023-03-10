import type { IconType } from 'react-icons';

export interface MenuOption {
  title: string;
  url: string;
  Icon: IconType;
  gap?: boolean;
}
