const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 py-5">
      <div className="col-span-1 lg:col-span-2 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-gray-600">
          <p className="text-2xl font-bold">$7,866</p>

          <span className="text-sm">Daily Revenue</span>
        </div>

        <div className="h-full flex justify-center items-center bg-green-200 rounded-lg">
          <p className="text-center text-green-700 font-bold px-2">+ 18%</p>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-2 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-gray-600">
          <p className="text-2xl font-bold">$1,437,846</p>

          <span className="text-sm">YTD Revenue</span>
        </div>

        <div className="h-full flex justify-center items-center bg-green-200 rounded-lg">
          <p className="text-center text-green-700 font-bold px-2">+ 11%</p>
        </div>
      </div>

      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border">
        <div className="text-gray-600">
          <p className="text-2xl font-bold">17,846</p>

          <span className="text-sm">Customers</span>
        </div>

        <div className="h-full flex justify-center items-center bg-green-200 rounded-lg">
          <p className="text-center text-green-700 font-bold px-2">+ 17%</p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
