import { useEffect } from 'react';
import {
  FaRegEdit as EditIcon,
  FaRegTrashAlt as DeleteIcon
} from 'react-icons/fa';
import usePets from '@/hooks/usePets';
import LoadingSpinner from '@/components/layout/LoadingSpinner';

const PetsTable = () => {
  const { pets, getPets, loading } = usePets();

  useEffect(() => {
    getPets();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner loading={loading} />}

      <table className="w-full">
        <thead className="bg-teal-500/20 text-gray-600 tracking-wider">
          <tr>
            <th className="px-5 py-3 text-start">Nombre</th>
            <th className="px-5 py-3 text-start">Especie</th>
            <th className="px-5 py-3 text-start">Género</th>
            <th className="px-5 py-3 text-start">Edad</th>
            <th className="px-5 py-3 text-start">Peso</th>
            <th className="px-5 py-3 text-start">Dueño</th>
            <th className="px-5 py-3 text-start">Fecha de creación</th>
            <th className="px-5 py-3" />
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {pets.map((pet, i) => (
            <tr
              key={`pet-${i}`}
              className={`${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-100'
              } text-gray-600 whitespace-nowrap`}
            >
              <td className="px-5 py-3">{pet.name}</td>
              <td className="px-5 py-3">{pet.species}</td>
              <td className="px-5 py-3">{pet.gender}</td>
              <td className="px-5 py-3">{pet.age} año/s</td>
              <td className="px-5 py-3">{pet.weight} kg</td>
              <td className="px-5 py-3">
                {pet.ownerName} {pet.ownerLastName}
              </td>
              <td className="px-5 py-3">
                {new Date(pet.createdAt).toLocaleString()}
              </td>
              <td className="px-5 py-3">
                <span className="flex justify-center space-x-3 text-lg">
                  <EditIcon className="cursor-pointer" />
                  <DeleteIcon className="cursor-pointer" />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PetsTable;
