import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import AppointmentList from '@/components/appointments/AppointmentList';

const Appointments = () => {
  return (
    <>
      <SEO title="Citas" />

      <Layout>
        <AppointmentList />
      </Layout>
    </>
  );
};

export default Appointments;
