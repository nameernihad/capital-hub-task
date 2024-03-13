export const Campaign = () => {
  return (
    <div className="flex flex-col items-center px-20 gap-10">
      <p className="text-4xl font-bold">Our Campaign</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <img src="/Food.png" alt="" className="w-full h-auto" />
        <img src="/Clothes.png" alt="" className="w-full h-auto" />
        <img src="/Education.png" alt="" className="w-full h-auto" />
        <img src="/Medical.png" alt="" className="w-full h-auto" />
      </div>

      <div>
        <button
          type="button"
          className="text-white bg-gray-900 border hover:bg-gray-700  font-normal rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 "
        >
          Show More
        </button>
      </div>
    </div>
  );
};
