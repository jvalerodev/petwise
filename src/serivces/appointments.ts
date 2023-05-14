import axiosClient from '@/config/axios';
import { API_ENDPOINTS } from '@/utils/consts';
import type {
  CreateAppointmentFormValues,
  CreateAppointmentResponse
} from '@/types/appointments';

const AppointmentService = {
  create: async (data: CreateAppointmentFormValues) => {
    const res = await axiosClient.post(API_ENDPOINTS.CREATE_APPOINTMENT, data);
    const appointment: CreateAppointmentResponse = res.data.appointments;
    return appointment;
  }
};

export default AppointmentService;
