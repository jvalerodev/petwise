import type { PageTitle } from '@/types/types';

export const Title: PageTitle = {
  '/': 'Dashboard',
  '/owners': 'Dueños',
  '/pets': 'Mascotas',
  '/appointments': 'Citas',
  '/reports': 'Informes',
  '/settings': 'Ajustes'
};

export const API_ENDPOINTS = {
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout'
};
