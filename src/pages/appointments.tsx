import { useState } from 'react';
import { HiPlus as AddIcon } from 'react-icons/hi';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import AppointmentList from '@/components/appointments/AppointmentList';
import CreateAppointmentModal from '@/components/modals/Modal';
import CreateAppointmentForm from '@/components/forms/CreateAppointment';

const Appointments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SEO title="Citas" />

      <Layout>
        <div className="flex flex-col py-3 space-y-5">
          <div className="place-self-end">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center bg-teal-500 hover:bg-teal-600 px-3 py-2 space-x-1 text-white font-bold rounded-lg duration-200"
            >
              <span>Agregar</span>
              <AddIcon className="text-xl" />
            </button>
          </div>

          <AppointmentList />
        </div>

        <CreateAppointmentModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        >
          <CreateAppointmentForm />
        </CreateAppointmentModal>
      </Layout>
    </>
  );
};

export default Appointments;
