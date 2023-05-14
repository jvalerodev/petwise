import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editAppointmentSchema } from '@/helpers/yup/schemas';
import useAppointments from '@/hooks/useAppointments';
import Message from '@/components/alerts/Message';
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import type { Appointment, EditAppointmentFormValues } from '@/types/types';

interface Props {
  appointment: Appointment | null;
}

const EditAppointmentForm = ({ appointment }: Props) => {
  const today = new Date().toISOString().split('T')[0];

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm<EditAppointmentFormValues>({
    resolver: yupResolver(editAppointmentSchema),
    defaultValues: { reason: appointment?.reason, date: appointment?.date }
  });

  const { result, loading, error, handleEditAppointment } = useAppointments({
    reset
  });

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <form
        onSubmit={handleSubmit(
          async (data) => await handleEditAppointment(appointment, data)
        )}
        className="bg-white px-8 py-5 rounded-xl space-y-8 shadow-sm"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-600">Editar cita</h1>

          <p className="text-lg text-gray-400">
            Ingresa los datos que deseas modificar.
          </p>
        </div>

        {result && <Message text={result} />}

        {error && <Message text={error} isError />}

        <div className="space-y-5">
          <div>
            {errors.reason && (
              <Message className="mb-1" text={errors.reason.message} isError />
            )}

            <label htmlFor="reason" className="text-gray-600 pt-1">
              Motivo *
            </label>

            <input
              id="reason"
              type="text"
              placeholder="La mascota no quiere comer"
              className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
              {...register('reason')}
            />
          </div>

          <div className="flex flex-col">
            {errors.date && (
              <Message className="mb-1" text={errors.date.message} isError />
            )}

            <label htmlFor="date" className="text-gray-600 pt-1">
              Fecha *
            </label>

            <input
              type="date"
              id="date"
              placeholder={new Date().toISOString().split('T')[0]}
              min={today}
              className="bg-gray-100 px-4 py-4 w-full rounded-md text-gray-600 outline-teal-500"
              {...register('date')}
            />
          </div>

          <div className="py-5">
            <button className="w-full bg-teal-500 py-3 rounded-md text-white text-lg font-bold hover:bg-teal-600 transition-colors duration-150">
              Guardar cambios
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditAppointmentForm;
