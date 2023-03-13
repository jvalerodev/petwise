import { TbDog } from 'react-icons/tb';
import { newPatients } from '@/utils/data';

const RecentPatients = () => {
  return (
    <div className="grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
      <p className="text-gray-600 text-lg font-bold">Pacientes Recientes</p>

      <div className="bg-gray-300 w-full h-[1px]" />

      <ul className="grid gap-3">
        {newPatients.map((patient) => (
          <li key={patient.id} className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-600">
                <span className="p-2 bg-teal-500/20 rounded-lg">
                  <TbDog className="text-xl" />
                </span>

                <div>
                  <p className="font-bold">{patient.pet}</p>

                  <span className="text-sm">{patient.owner}</span>
                </div>
              </div>

              <div className="md:hidden lg:flex">
                <p className="text-sm text-gray-600">{patient.date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentPatients;
