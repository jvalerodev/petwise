import Layout from '@/components/layout/Layout';
import OwnersTable from '@/components/owners/Table';

const Owners = () => {
  return (
    <Layout>
      <div className="py-5">
        <div className="bg-white rounded-lg border shadow-sm overflow-auto">
          <OwnersTable />
        </div>
      </div>
    </Layout>
  );
};

export default Owners;
