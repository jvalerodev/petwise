import type { IconType } from 'react-icons';

export interface MenuOption {
  title: string;
  url: string;
  Icon: IconType;
  gap?: boolean;
}

export interface PageTitle {
  '/': string;
  '/owners': string;
  '/pets': string;
  '/appointments': string;
  '/reports': string;
  '/settings': string;
}
