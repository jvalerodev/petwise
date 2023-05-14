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
  date: Date;
}

export interface CreateAppointmentResponse extends AppointmentsState {}

export interface SetAllAppointmentsAction extends AppointmentsState {}
