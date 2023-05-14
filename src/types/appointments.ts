export interface Appointment {
  id: string;
  date: string;
  reason: string;
  petName: string;
  ownerName: string;
  ownerLastName: string;
}

export interface AppointmentsState {
  today: Appointment[];
  future: Appointment[];
}

export interface CreateAppointmentFormValues {
  petId: string;
  reason: string;
  date: string;
}

export interface EditAppointmentFormValues {
  reason: string;
  date: string;
}

export interface AppointmentsResponse extends AppointmentsState {}

export interface SetAllAppointmentsAction extends AppointmentsState {}
