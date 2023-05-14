import MedicalReport from './MedicalReport';
import { reports } from '@/utils/data';

const MedicalReports = () => {
  return (
    <div className="py-10">
      <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
        <h5 className="font-bold text-xl text-gray-700">Historial</h5>

        <div className="bg-gray-300 w-full h-[1px]" />

        <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
          {reports.map((report) => (
            <MedicalReport key={report.id} report={report} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MedicalReports;
