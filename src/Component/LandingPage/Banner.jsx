
export const Banner = () => {
  return (
    <div className="flex  h-full w-screen md:p-40 p-10  gap-10 bg-[#eef8d7]">
      <div className="flex flex-col  gap-10 md:w-1/2 w-full">
        <img className="w-full" src="/imageText.png" alt="" />

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint nisi
          quo reiciendis maxime quae doloribus! Voluptates expedita atque magni
          architecto.
        </p>
        <div className="" >
          <button
            type="button"
            className="text-white bg-gray-900 border hover:bg-gray-700  font-normal rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 "
          >
            Donate Now
          </button>
        </div>
        <div className="w-1/2" >
        <img src="/imageUsers.png" alt="" />
        </div>
      </div>
      <div className="  md:flex md:justify-end md:items-center md:w-1/2 hidden">
        <img className="h-full" src="/imagebudha.png" alt="" />
      </div>
    </div>
  )
}
