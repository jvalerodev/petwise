import dayjs from 'dayjs';
import { AiOutlineCalendar as CalendarIcon } from 'react-icons/ai';
import {
  FaRegEdit as EditIcon,
  FaRegTrashAlt as DeleteIcon
} from 'react-icons/fa';
import type { Appointment } from '@/types/types';

interface Props {
  appointment: Appointment;
  handleShowModal: (appointment: Appointment) => void;
}

const AppointmentCard = ({ appointment, handleShowModal }: Props) => {
  return (
    <li className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 text-gray-600">
          <span className="p-2 bg-teal-500/20 rounded-lg">
            <CalendarIcon className="text-2xl" />
          </span>

          <div className="space-y-1">
            <p className="space-x-2">
              <span className="font-bold">{appointment.petName}</span>
              <span>|</span>
              <span className="text-sm">
                {appointment.ownerName} {appointment.ownerLastName}
              </span>
            </p>

            <p className="text-sm">
              <span className="font-bold mr-2">Motivo:</span>
              <span>{appointment.reason}</span>
            </p>

            <p className="text-sm">
              <span className="font-bold mr-2">Fecha:</span>
              <span>{dayjs(appointment.date).format('DD/MM/YYYY')}</span>
            </p>
          </div>
        </div>

        <div className="md:hidden xl:flex">
          <span className="flex justify-center space-x-3 text-lg text-gray-700">
            <EditIcon
              onClick={() => handleShowModal(appointment)}
              className="cursor-pointer"
            />

            <DeleteIcon className="cursor-pointer" />
          </span>
        </div>
      </div>
    </li>
  );
};

export default AppointmentCard;
