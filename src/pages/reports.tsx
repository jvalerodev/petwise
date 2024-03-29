import { useState, useEffect } from 'react';
import { HiPlus as AddIcon } from 'react-icons/hi';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import ReportSelect from '@/components/reports/ReportSelect';
import MedicalReports from '@/components/reports/MedicalReports';
import CreateReportModal from '@/components/modals/Modal';
import CreateReportForm from '@/components/forms/CreateReport';
import useReports from '@/hooks/useReports';
import usePets from '@/hooks/usePets';

const Reports = () => {
  const [showModal, setShowModal] = useState(false);

  const { reports, getReports, handleEmptyReports } = useReports();
  const { getPets } = usePets();

  useEffect(() => {
    handleEmptyReports();
    getPets();
  }, []);

  const handleOnChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const petId = e.target.value;
    await getReports(petId);
  };

  return (
    <>
      <SEO title="Informes" />

      <Layout>
        <div className="flex justify-between items-center py-5">
          <ReportSelect handleOnChange={handleOnChange} />

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center bg-teal-500 hover:bg-teal-600 px-3 py-2 space-x-1 text-white font-bold rounded-lg duration-200"
          >
            <span>Agregar</span>
            <AddIcon className="text-xl" />
          </button>
        </div>

        <MedicalReports reports={reports} />

        <CreateReportModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        >
          <CreateReportForm />
        </CreateReportModal>
      </Layout>
    </>
  );
};

export default Reports;
