export const Motive = () => {
  return (
    <div className="flex flex-col gap-10 md:p-20 p-10">
      <div className="flex flex-col md:flex-row  items-center gap-10">
        <div>
          <img src="/multyimage.png" alt="" />
        </div>
        <div className="flex flex-col md:justify-start  items-center gap-10 ">
          <div className="md:text-start text-center" >
            <p className=" text-3xl font-bold ">No More Homeless</p>
            <p className=" text-3xl font-bold ">No More Hunger</p>
          </div>

          <p className="md:text-start text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nisi
            quo reiciendis maxime quae doloribus! Voluptates expedita atque
            magni architecto.
          </p>
          <div className="flex  md:justify-start justify-center">
            <button
              type="button"
              className="text-white bg-gray-900 border hover:bg-gray-700  font-normal rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 "
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="flex flex-col md:justify-start  items-center gap-10">
          <div className="md:text-start text-center" >
            <p className=" text-3xl  font-bold ">Great futures are built</p>
            <p className=" text-3xl font-bold ">with a small trust</p>
          </div>

          <p className="md:text-start text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nisi
            quo reiciendis maxime quae doloribus! Voluptates expedita atque
            magni architecto.
          </p>
          <div className="flex  md:justify-start justify-center">
            <button
              type="button"
              className="text-white bg-gray-900 border hover:bg-gray-700  font-normal rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 "
            >
              Donate Now
            </button>
          </div>
        </div>
        <div>
          <img src="/childimage.png" alt="" />
        </div>
      </div>
    </div>
  );
};
