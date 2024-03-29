import Layout from '@/components/layout/Layout';
import TopCards from '@/components/dashboard/TopCards';
import RecentPatients from '@/components/dashboard/RecentPatients';
import LineChart from '@/components/dashboard/LineChart';
import TodayAppointments from '@/components/dashboard/TodayAppointments';
import SEO from '@/components/SEO';

const Home = () => {
  return (
    <Layout>
      <SEO title="Dashboard" />
      <TopCards />

      <div className="grid md:grid-cols-3 gap-x-5 gap-y-8 py-5">
        <LineChart />

        <RecentPatients />

        <TodayAppointments />
      </div>
    </Layout>
  );
};

export default Home;
