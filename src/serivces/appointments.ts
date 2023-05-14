import axiosClient from '@/config/axios';
import { API_ENDPOINTS } from '@/utils/consts';
import type {
  CreateAppointmentFormValues,
  AppointmentsResponse
} from '@/types/appointments';

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
  }
};

export default AppointmentService;
