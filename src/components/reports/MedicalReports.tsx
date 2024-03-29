import { useState } from 'react';
import MedicalReport from './MedicalReport';
import EditMedicalReportModal from '@/components/modals/Modal';
import EditReportForm from '../forms/EditReport';
import { type Report } from '@/types/types';
import confirmationPopup from '@/components/alerts/ConfirmPopup';
import useReports from '@/hooks/useReports';

interface Props {
  reports: Report[];
}

const MedicalReports = ({ reports }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [reportEdit, setReportEdit] = useState<Report | null>(null);

  const { handleDeleteReport } = useReports();

  const handleShowModal = (report: Report) => {
    setReportEdit(report);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setReportEdit(null);
    setShowModal(false);
  };

  const handleDeletePopup = async (reportId: string) => {
    const text = '¿Estás seguro que deseas eliminar este informe?';
    const { isConfirmed } = await confirmationPopup(text);

    if (isConfirmed) {
      await handleDeleteReport(reportId);
    }
  };

  if (reports.length === 0) return null;

  return (
    <div className="py-10">
      <div className="md:col-span-2 grid gap-2 bg-white p-4 rounded-lg border shadow-sm">
        <h5 className="font-bold text-xl text-gray-700">Historial</h5>

        <div className="bg-gray-300 w-full h-[1px]" />

        <ul className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
          {reports.map((report) => (
            <MedicalReport
              key={report.id}
              report={report}
              handleShowModal={handleShowModal}
              handleDeletePopup={handleDeletePopup}
            />
          ))}
        </ul>
      </div>

      <EditMedicalReportModal isVisible={showModal} onClose={handleCloseModal}>
        <EditReportForm report={reportEdit} />
      </EditMedicalReportModal>
    </div>
  );
};

export default MedicalReports;
