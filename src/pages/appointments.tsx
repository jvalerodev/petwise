import { HiPlus as AddIcon } from 'react-icons/hi';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import AppointmentList from '@/components/appointments/AppointmentList';

const Appointments = () => {
  return (
    <>
      <SEO title="Citas" />

      <Layout>
        <div className="flex flex-col py-3 space-y-5">
          <div className="place-self-end">
            <button className="flex items-center bg-teal-500 hover:bg-teal-600 px-3 py-2 space-x-1 text-white font-bold rounded-lg duration-200">
              <span>Agregar</span>
              <AddIcon className="text-xl" />
            </button>
          </div>

          <AppointmentList />
        </div>
      </Layout>
    </>
  );
};

export default Appointments;
