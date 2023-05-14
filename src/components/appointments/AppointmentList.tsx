import { useEffect } from 'react';
import useAppointments from '@/hooks/useAppointments';
import AppointmentCard from './Appointment';

const AppointmentList = () => {
  const { appointments, getAppointments } = useAppointments();

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <div className="space-y-10">
      <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
        <h5 className="font-bold text-xl text-gray-700">Hoy</h5>

        <div className="bg-gray-300 w-full h-[1px]" />

        <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
          {appointments.today.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </ul>
      </div>

      <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
        <h5 className="font-bold text-xl text-gray-700">Próximas</h5>

        <div className="bg-gray-300 w-full h-[1px]" />

        <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
          {appointments.future.map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppointmentList;
