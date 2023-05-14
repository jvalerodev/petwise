import { useEffect, useState } from 'react';
import useAppointments from '@/hooks/useAppointments';
import AppointmentCard from './Appointment';
import EditAppointmentModal from '@/components/modals/Modal';
import EditAppointmentForm from '../forms/EditAppointment';
import confirmationPopup from '@/components/alerts/ConfirmPopup';
import type { Appointment } from '@/types/types';

const AppointmentList = () => {
  const [showModal, setShowModal] = useState(false);
  const [appointmentEdit, setAppointmentEdit] = useState<Appointment | null>(
    null
  );

  const { appointments, getAppointments, handleDeleteAppointment } =
    useAppointments();

  useEffect(() => {
    getAppointments();
  }, []);

  const handleShowModal = (appointment: Appointment) => {
    setAppointmentEdit(appointment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setAppointmentEdit(null);
    setShowModal(false);
  };

  const handleDeletePopup = async (appointmentId: string) => {
    const text = '¿Estás seguro que deseas eliminar esta cita?';
    const { isConfirmed } = await confirmationPopup(text);

    if (isConfirmed) {
      console.log(appointmentId);
      await handleDeleteAppointment(appointmentId);
    }
  };

  return (
    <>
      <div className="space-y-10">
        <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
          <h5 className="font-bold text-xl text-gray-700">Hoy</h5>

          <div className="bg-gray-300 w-full h-[1px]" />

          <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
            {appointments.today.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                handleShowModal={handleShowModal}
                handleDeletePopup={handleDeletePopup}
              />
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
          <h5 className="font-bold text-xl text-gray-700">Próximas</h5>

          <div className="bg-gray-300 w-full h-[1px]" />

          <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
            {appointments.future.map((appointment) => (
              <AppointmentCard
                key={appointment.id}
                appointment={appointment}
                handleShowModal={handleShowModal}
                handleDeletePopup={handleDeletePopup}
              />
            ))}
          </ul>
        </div>
      </div>

      <EditAppointmentModal isVisible={showModal} onClose={handleCloseModal}>
        <EditAppointmentForm appointment={appointmentEdit} />
      </EditAppointmentModal>
    </>
  );
};

export default AppointmentList;
