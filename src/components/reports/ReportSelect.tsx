const ReportSelect = () => {
  return (
    <>
      <div className="w-1/3">
        <div className="flex items-center space-x-3">
          <label htmlFor="species" className="text-gray-600 font-bold">
            Mascota:
          </label>
          <select className="w-full bg-white p-2 text-gray-600 rounded-md outline-teal-500 border-r-[16px] border-r-transparent shadow-sm">
            <option defaultValue="" disabled>
              ---
            </option>
            <option value="1">Mascota 1</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ReportSelect;
