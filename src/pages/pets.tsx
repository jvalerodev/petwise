import { useState } from 'react';
import { HiPlus as AddIcon } from 'react-icons/hi';
import Layout from '@/components/layout/Layout';
import PetsTable from '@/components/pets/Table';
import CreatePetModal from '@/components/modals/Modal';
import CreatePetForm from '@/components/forms/CreatePet';
import SEO from '@/components/SEO';

const Pets = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <SEO title="Mascotas" />

      <Layout>
        <div className="flex flex-col py-5 space-y-5">
          <div className="place-self-end">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center bg-teal-500 hover:bg-teal-600 px-3 py-2 space-x-1 text-white font-bold rounded-lg duration-200"
            >
              <span>Agregar</span>
              <AddIcon className="text-xl" />
            </button>
          </div>

          <div className="bg-white rounded-lg border shadow-sm overflow-auto">
            <PetsTable />
          </div>
        </div>

        <CreatePetModal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        >
          <CreatePetForm />
        </CreatePetModal>
      </Layout>
    </>
  );
};

export default Pets;
