import usePets from '@/hooks/usePets';

interface Props {
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ReportSelect = ({ handleOnChange }: Props) => {
  const { pets } = usePets();

  return (
    <>
      <div className="w-1/3">
        <div className="flex items-center space-x-3">
          <label htmlFor="pet" className="text-gray-600 font-bold">
            Mascota:
          </label>
          <select
            id="pet"
            className="w-full bg-white p-2 text-gray-600 rounded-md outline-teal-500 border-r-[16px] border-r-transparent shadow-sm"
            defaultValue=""
            onChange={handleOnChange}
          >
            <option value="" disabled>
              ---
            </option>

            {pets.map((pet) => (
              <option key={`${pet.name}-${pet.id}`} value={pet.id}>
                {pet.name} - {pet.ownerName} {pet.ownerLastName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default ReportSelect;
