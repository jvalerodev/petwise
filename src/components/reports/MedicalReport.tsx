import { TbReport as ReportIcon } from 'react-icons/tb';
import {
  FaRegEdit as EditIcon,
  FaRegTrashAlt as DeleteIcon
} from 'react-icons/fa';
import { type Report } from '@/types/types';

interface Props {
  report: Report;
}

const MedicalReport = ({ report }: Props) => {
  return (
    <li className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-3 text-gray-600">
          <span className="p-2 bg-teal-500/20 rounded-lg">
            <ReportIcon className="text-2xl" />
          </span>

          <div className="space-y-1">
            <p className="space-x-2">
              <span className="font-bold">{report.pet}</span>
              <span>|</span>
              <span className="text-sm">{report.owner}</span>
            </p>

            <p className="text-sm">
              <span className="font-bold mr-2">Diagnóstico:</span>
              <span>{report.diagnosis}</span>
            </p>

            <p className="text-sm">
              <span className="font-bold mr-2">Tratamiento:</span>
              <span>{report.treatment}</span>
            </p>

            <p className="text-sm">
              <span className="font-bold mr-2">Fecha:</span>
              <span>{report.date}</span>
            </p>
          </div>
        </div>

        <div className="md:hidden xl:flex">
          <span className="flex justify-center space-x-3 text-lg text-gray-700">
            <EditIcon className="cursor-pointer" />

            <DeleteIcon className="cursor-pointer" />
          </span>
        </div>
      </div>
    </li>
  );
};

export default MedicalReport;
