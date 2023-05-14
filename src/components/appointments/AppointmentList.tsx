import { HiPlus as AddIcon } from 'react-icons/hi';
import AppointmentCard from './Appointment';
import { appointments } from '@/utils/data';

const AppointmentList = () => {
  return (
    <div className="flex flex-col py-3 space-y-5">
      <div className="place-self-end">
        <button className="flex items-center bg-teal-500 hover:bg-teal-600 px-3 py-2 space-x-1 text-white font-bold rounded-lg duration-200">
          <span>Agregar</span>
          <AddIcon className="text-xl" />
        </button>
      </div>

      <div className="space-y-10">
        <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
          <h5 className="font-bold text-xl text-gray-700">Hoy</h5>

          <div className="bg-gray-300 w-full h-[1px]" />

          <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
            {appointments.slice(0, 3).map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
          <h5 className="font-bold text-xl text-gray-700">Próximas</h5>

          <div className="bg-gray-300 w-full h-[1px]" />

          <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
            {appointments.slice(3, 6).map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
