import { useEffect, useState } from 'react';
import { FaRegEdit as EditIcon } from 'react-icons/fa';
import useOwners from '@/hooks/useOwners';
import LoadingSpinner from '@/components/layout/LoadingSpinner';
import EditOwnerModal from '@/components/modals/Modal';
import EditOwnerForm from '@/components/forms/EditOwner';
import { type Owner } from '@/types/types';

const OwnersTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [ownerEdit, setOwnerEdit] = useState<Owner | null>(null);

  const { owners, loading, getOwners } = useOwners();

  useEffect(() => {
    getOwners();
  }, []);

  const handleShowModal = (owner: Owner) => {
    setOwnerEdit(owner);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setOwnerEdit(null);
    setShowModal(false);
  };

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <table className="w-full">
        <thead className="bg-teal-500/20 text-gray-600 tracking-wider">
          <tr>
            <th className="px-5 py-3 text-start">Nombre</th>
            <th className="px-5 py-3 text-start">Apellido</th>
            <th className="px-5 py-3 text-start">DNI</th>
            <th className="px-5 py-3 text-start">Correo electrónico</th>
            <th className="px-5 py-3 text-start">Teléfono</th>
            <th className="px-5 py-3 text-start">Fecha de creación</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {owners.map((owner, i) => (
            <tr
              key={owner.email}
              className={`${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } text-gray-600 whitespace-nowrap`}
            >
              <td className="px-5 py-3">{owner.name}</td>
              <td className="px-5 py-3">{owner.lastName}</td>
              <td className="px-5 py-3">{owner.dni}</td>
              <td className="px-5 py-3">{owner.email}</td>
              <td className="px-5 py-3">{owner.phone}</td>
              <td className="px-5 py-3">
                {new Date(owner.createdAt).toLocaleDateString('es-ES')}
              </td>
              <td className="px-5 py-3">
                <EditIcon
                  className="mx-auto text-lg cursor-pointer"
                  onClick={() => handleShowModal(owner)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditOwnerModal isVisible={showModal} onClose={handleCloseModal}>
        <EditOwnerForm owner={ownerEdit} />
      </EditOwnerModal>
    </>
  );
};

export default OwnersTable;
