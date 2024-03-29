import type { PageTitle } from '@/types/types';

export const Title: PageTitle = {
  '/': 'Dashboard',
  '/owners': 'Propietarios',
  '/pets': 'Mascotas',
  '/appointments': 'Citas',
  '/reports': 'Informes'
  // '/settings': 'Ajustes'
};

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/api/auth/login',
  LOGOUT: '/api/auth/logout',
  GET_USER: '/api/auth/user',

  // Users
  REGISTER: '/api/users/register',

  // Pets
  CREATE_PET: '/api/pets/create',
  GET_PETS: '/api/pets',
  UPDATE_PET: '/api/pets/update',
  DELETE_PET: '/api/pets/delete',

  // Owners
  GET_OWNERS: '/api/owners',
  UPDATE_OWNER: '/api/owners/update',

  // Appointments
  CREATE_APPOINTMENT: '/api/appointments/create',
  GET_APPOINTMENTS: '/api/appointments',
  UPDATE_APPOINTMENT: '/api/appointments/update',
  DELETE_APPOINTMENT: '/api/appointments/delete',

  // REPORTS
  CREATE_REPORT: '/api/reports/create',
  GET_REPORTS: '/api/reports',
  UPDATE_REPORT: '/api/reports/update',
  DELETE_REPORT: '/api/reports/delete'
};
