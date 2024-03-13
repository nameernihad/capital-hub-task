
export const Progress = () => {
  return (
    <div className="flex flex-col w-full md:p-20 p-5 gap-20" >
      <div className="w-3/1 px-20 " >
      <p className="md:text-4xl sm:text-2xl text-xl font-semibold text-center" >Join our community for donating and be a part of a positive change in the world. With over</p>
      </div>
      <div className="flex md:flex-row flex-col gap-5 " >
        <div><img className=" h-1/2 md:h-full"  src="/child1.png" alt="" /></div>
        <div className="flex flex-col md:flex-row items-center  gap-10">
        <div className="flex flex-col md:justify-start  w-full items-center  gap-10">
          <div className="md:text-start text-center" >
            <p className=" xl:text-9xl text-5xl   font-semibold ">130,987+</p>
          </div>

          <p className="md:text-start text-center text-3xl">
          People  already joined
          </p>
          <div className="flex  md:justify-start justify-center">
            <button
              type="button"
              className="text-white bg-gray-900 border hover:bg-gray-700  font-normal rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 "
            >
              Yes i want join community
            </button>
          </div>
        </div>
      </div>
        <div><img className=" h-1/2 md:h-full"   src="/child2.png" alt="" /></div>
      </div>
    </div>
  )
}
