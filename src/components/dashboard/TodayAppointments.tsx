import { AiOutlineCalendar as CalendarIcon } from 'react-icons/ai';
import { todayAppointments } from '@/utils/data';

const TodayAppointments = () => {
  return (
    <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
      <p className="text-gray-600 text-lg font-bold">Citas de hoy</p>

      <div className="bg-gray-300 w-full h-[1px]" />

      <ul className="grid lg:grid-cols-3 gap-3">
        {todayAppointments.map((appointment) => (
          <li key={appointment.id} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="p-2 bg-teal-500/20 rounded-lg">
                  <CalendarIcon className="text-xl" />
                </span>

                <div>
                  <p className="font-bold">{appointment.pet}</p>

                  <span className="text-sm">{appointment.owner}</span>
                </div>
              </div>

              <div className="md:hidden xl:flex">
                <p className="text-sm text-gray-600">{appointment.hour}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodayAppointments;
