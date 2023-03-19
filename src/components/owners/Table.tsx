import { FaRegEdit as EditIcon } from 'react-icons/fa';
import { owners } from '@/utils/data';

const OwnersTable = () => {
  return (
    <table className="w-full">
      <thead className="bg-teal-500/20 text-gray-600 tracking-wider">
        <tr>
          <th className="px-5 py-3 text-start">Nombre</th>
          <th className="px-5 py-3 text-start">Correo electrónico</th>
          <th className="px-5 py-3 text-start">Teléfono</th>
          <th className="px-5 py-3 text-start">Fecha de creación</th>
          <th className="px-5 py-3" />
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-100">
        {owners.map((owner, i) => (
          <tr key={owner.email} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-100'} text-gray-600 whitespace-nowrap`}>
            <td className="px-5 py-3">{owner.name}</td>
            <td className="px-5 py-3">{owner.email}</td>
            <td className="px-5 py-3">{owner.phone}</td>
            <td className="px-5 py-3">{owner.createdAt}</td>
            <td className="px-5 py-3">
              <EditIcon className="mx-auto text-lg cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OwnersTable;
