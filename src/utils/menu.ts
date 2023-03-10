import { FaHome, FaUserCircle, FaDog, FaSignOutAlt } from 'react-icons/fa';
import { TbReportMedical } from 'react-icons/tb';
import {
  IoCalendarNumberSharp as CalendarIcon,
  IoSettingsSharp as SettingsIcon
} from 'react-icons/io5';

import type { MenuOption } from '@/types/types';

const Menu: MenuOption[] = [
  { title: 'Inicio', url: '/', Icon: FaHome },
  { title: 'Dueños', url: '/owners', Icon: FaUserCircle, gap: true },
  { title: 'Mascotas', url: '/pets', Icon: FaDog },
  { title: 'Citas', url: '/appointments', Icon: CalendarIcon, gap: true },
  { title: 'Informes', url: '/reports', Icon: TbReportMedical },
  { title: 'Ajustes', url: '/settings', Icon: SettingsIcon, gap: true },
  { title: 'Salir', url: '/logout', Icon: FaSignOutAlt }
];

export default Menu;
