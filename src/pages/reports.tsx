import { HiPlus as AddIcon } from 'react-icons/hi';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import ReportSelect from '@/components/reports/ReportSelect';
import MedicalReports from '@/components/reports/MedicalReports';

const Reports = () => {
  return (
    <>
      <SEO title="Informes" />

      <Layout>
        <div className="flex justify-between items-center py-5">
          <ReportSelect />

          <button className="flex items-center bg-teal-500 hover:bg-teal-600 px-3 py-2 space-x-1 text-white font-bold rounded-lg duration-200">
            <span>Agregar</span>
            <AddIcon className="text-xl" />
          </button>
        </div>

        <MedicalReports />
      </Layout>
    </>
  );
};

export default Reports;
