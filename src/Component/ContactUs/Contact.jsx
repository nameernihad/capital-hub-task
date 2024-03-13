export const Contact = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-10 ">
        <div className="flex gap-1 text-2xl font-bold ">
          <p>Contact</p>
          <p className="text-[rgb(192,232,100)]">Us</p>
        </div>
        <p className="text-3xl">What can we help you with?</p>

        <form className="w-1/3  ">
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-[rgb(192,232,100)]  f font-medium rounded-lg text-sm px-4 py-2 "
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className=" lg:py-24 ">
        <div className="bg-slate-800  px-20 py-5 ">
          <div  className="flex flex-col gap-5 w-1/4">
            <div className="" >
              <p className="text-[rgb(192,232,100)] font-semibold">
                Contact Us
              </p>
              <p className="text-white">+91 9234567899</p>
            </div>
            <div>
              <p className="text-[rgb(192,232,100)] font-semibold">Location</p>
              <p className="text-white">
                Workingdom, Plot No 17, Sector-7, Palam Extension, Dwarka, New
                Delhi-110075 India
              </p>
            </div>
            <div>
              <p className="text-[rgb(192,232,100)] font-semibold">Email</p>
              <p className="text-white">Buddha@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:bg-white bg-slate-400">
      <form action="#" className="lg:absolute  space-y-8 w-1/3  lg:top-48 lg:end-40 shadow-xl p-5 bg-white rounded-xl">
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-200   text-white text-sm rounded-lg  block w-full p-2.5 " placeholder="name@flowbite.com" required></input>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-white bg-gray-200 rounded-lg shadow-sm " placeholder="Let us know how we can help you" required></input>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-white bg-gray-200 rounded-lg shadow-sm   " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 f ">Send message</button>
      </form>
      </div>
      
    </div>
  );
};
