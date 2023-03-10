import Image from 'next/image';
import { MdPets as PetIcon } from 'react-icons/md';

const Presentation = () => {
  return (
    <div className="space-y-5">
      <h1 className="flex items-center justify-center text-white text-6xl font-bold">
        P
        <PetIcon className="text-5xl" />
        tWise
      </h1>

      <p className="text-3xl text-gray-600">El mejor amigo de tu mejor amigo</p>

      <Image src="/pets.png" alt="Pets" width="230" height="220" className="mx-auto" />
    </div>
  );
};

export default Presentation;
