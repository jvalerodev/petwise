import type { User, Pet, Owner, Appointment, Report } from './types';

// USER
export interface UserState {
  user: User | null;
}

export interface SelectUser {
  user: UserState;
}

// PETS
export interface PetsState {
  pets: Pet[];
}

export interface SelectPets {
  pets: PetsState;
}

export interface AddPetAction {
  pet: Pet;
}

export interface GetAllPetsAction {
  pets: Pet[];
}

export interface UpdatePetAction extends AddPetAction {}

export interface DeletePetAction {
  id: string;
}

// OWNERS
export interface OwnersState {
  owners: Owner[];
}

export interface GetAllOwnersAction {
  owners: Owner[];
}

export interface SelectOwners {
  owners: OwnersState;
}

// APPOINTMENTS
export interface AppointmentsState {
  today: Appointment[];
  future: Appointment[];
}

export interface SelectAppointments {
  appointments: AppointmentsState;
}

export interface SetAllAppointmentsAction extends AppointmentsState {}

// REPORTS
export interface ReportsState {
  reports: Report[];
}

export interface SelectReports {
  reports: ReportsState;
}

export interface SetAllReportsAction extends ReportsState {}

export interface AddReportAction {
  report: Report;
}
