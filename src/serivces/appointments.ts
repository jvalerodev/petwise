import axiosClient from '@/config/axios';
import { API_ENDPOINTS } from '@/utils/consts';
import type {
  CreateAppointmentFormValues,
  AppointmentsResponse,
  Appointment,
  EditAppointmentFormValues
} from '@/types/types';

const AppointmentService = {
  create: async (data: CreateAppointmentFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.CREATE_APPOINTMENT, data);
    const appointments: AppointmentsResponse = res.data.appointments;
    return appointments;
  },

  getAll: async () => {
    const res = await axiosClient.get(API_ENDPOINTS.GET_APPOINTMENTS);
    const appointments: AppointmentsResponse = res.data.appointments;
    return appointments;
  },

  update: async (
    appointment: Appointment | null,
    data: EditAppointmentFormValues
  ) => {
    await axiosClient.put(
      `${API_ENDPOINTS.UPDATE_APPOINTMENT}/${appointment?.id}`,
      data
    );
  }
};

export default AppointmentService;
