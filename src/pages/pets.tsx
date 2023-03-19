import Layout from '@/components/layout/Layout';
import PetsTable from '@/components/pets/Table';
import { HiPlus as AddIcon } from 'react-icons/hi';

const Pets = () => {
  return (
    <Layout>
      <div className="py-5 space-y-5">
        <div className="text-end">
          <button className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-lg duration-200">
            <AddIcon className="text-lg" />
          </button>
        </div>

        <div className="bg-white rounded-lg border shadow-sm overflow-auto">
          <PetsTable />
        </div>
      </div>
    </Layout>
  );
};

export default Pets;
