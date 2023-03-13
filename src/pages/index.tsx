import Layout from '@/components/layout/Layout';
import TopCards from '@/components/TopCards';
import RecentPatients from '@/components/RecentPatients';
import LineChart from '@/components/LineChart';

const Home = () => {
  return (
    <Layout>
      <TopCards />

      <div className="grid md:grid-cols-3 gap-4 py-5">
        <LineChart />

        <RecentPatients />
      </div>
    </Layout>
  );
};

export default Home;
