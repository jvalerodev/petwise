import { AiOutlineCalendar as CalendarIcon } from 'react-icons/ai';

import type { Appointment } from '@/types/types';

interface Props {
  appointment: Appointment;
}

const AppointmentCard = ({ appointment }: Props) => {
  return (
    <li className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 text-gray-600">
          <span className="p-2 bg-teal-500/20 rounded-lg">
            <CalendarIcon className="text-xl" />
          </span>

          <div>
            <p className="font-bold">{appointment.pet}</p>

            <span className="text-sm">{appointment.owner}</span>

            <p className="text-sm">
              <span className="font-bold mr-2">Motivo:</span>
              <span>{appointment.reason}</span>
            </p>
          </div>
        </div>

        <div className="md:hidden xl:flex">
          <p className="text-sm text-gray-600">{appointment.date}</p>
        </div>
      </div>
    </li>
  );
};

export default AppointmentCard;
