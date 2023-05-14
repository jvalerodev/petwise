import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { type UseFormReset } from 'react-hook-form';
import type {
  SelectAppointments,
  CreateAppointmentFormValues,
  Appointment,
  EditAppointmentFormValues
} from '@/types/types';
import AppointmentService from '@/serivces/appointments';
import { setAllAppointments } from '@/redux/reducer/appointments';
import { removeMessage } from '@/utils/functions';
import { isAxiosError } from 'axios';

interface Props {
  reset?: UseFormReset<any>;
}

const useAppointments = (props: Props = {}) => {
  const { reset } = props;

  const appointments = useSelector(
    (state: SelectAppointments) => state.appointments
  );

  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleCreateAppointment = async (data: CreateAppointmentFormValues) => {
    setLoading(true);

    try {
      const appointmentsSaved = await AppointmentService.create(data);

      dispatch(setAllAppointments(appointmentsSaved));
      setResult('Cita creada exitosamente');
      reset?.();
      removeMessage(setResult);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.error);
        removeMessage(setError);
      }
    }

    setLoading(false);
  };

  const getAppointments = async () => {
    setLoading(true);

    try {
      const appointments = await AppointmentService.getAll();
      dispatch(setAllAppointments(appointments));
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const handleEditAppointment = async (
    appointment: Appointment | null,
    data: EditAppointmentFormValues
  ) => {
    setLoading(true);

    try {
      await AppointmentService.update(appointment, data);
      await getAppointments();
      setResult('Cita actualizada exitosamente');

      reset?.(() => ({
        reason: '',
        date: ''
      }));

      removeMessage(setResult);
    } catch (error) {
      if (isAxiosError(error)) {
        setError(error.response?.data.error);
        removeMessage(setError);
      }
    }

    setLoading(false);
  };

  return {
    appointments,
    result,
    error,
    loading,
    handleCreateAppointment,
    getAppointments,
    handleEditAppointment
  };
};

export default useAppointments;
