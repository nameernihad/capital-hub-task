export const Needs = () => {
  return (
    <div className="flex flex-col w-full gap-10 md:p-20 p-10 items-center ">
      <div className="text-center" >
        <p className="text-3xl font-bold">We Believe that We can Save</p>
        <p className="text-3xl font-bold">More Life’s with you</p>
      </div>

      <div className="flex md:flex-row flex-col gap-10  justify-around">
        <div className="flex flex-col shadow-lg shadow-current shadow-neutral-400 p-5 gap-3 rounded-md  items-center">
          <img className="w-1/2" src="/UsersColored.png" alt="" />
          <p className="text-2xl font-bold text-center">Become Volunteer</p>
          <p className="text-center" >
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem{" "}
          </p>
        </div>
        <div className="flex flex-col shadow-lg shadow-current shadow-neutral-400 p-5 rounded-md  items-center">
          <img className="w-1/2" src="/MoneyBag.png" alt="" />
          <p className="text-2xl font-bold text-center ">Quick Fundraise</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem{" "}
          </p>
        </div>
        <div className="flex flex-col shadow-lg shadow-current shadow-neutral-400 p-5 rounded-md  items-center">
          <img className="w-1/2" src="/giftBox.png" alt="" />
          <p className="text-2xl font-bold text-center " x>
            Start Donating
          </p>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.Lorem{" "}
          </p>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="text-white bg-gray-900 border hover:bg-gray-700  font-normal rounded-full text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 "
        >
          Donate Now
        </button>
      </div>
    </div>
  );
};
