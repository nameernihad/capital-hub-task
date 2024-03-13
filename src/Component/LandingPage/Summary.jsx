export const Summary = () => {
  return (
    <div className=" w-full">
      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-5 md:p-10 bg-black text-white justify-around items-center">
        <div className="flex flex-col  md:flex-row gap-3 items-center mb-5 md:mb-0">
          <p className="text-[#cfd19b] text-5xl md:text-7xl font-bold">10 +</p>
          <div className="w-full md:w-1/2">
            <p className="text-sm">Children are back to school</p>
          </div>
        </div>
        <div className="flex flex-col  md:flex-row gap-3 items-center mb-5 md:mb-0">
          <p className="text-[#cfd19b] text-5xl md:text-7xl font-bold">2M+</p>
          <div className="w-full md:w-1/2">
            <p className="text-sm">Total money donated</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <p className="text-[#cfd19b] text-5xl md:text-7xl font-bold">100+</p>
          <div className="w-full md:w-1/2">
            <p className="text-sm">Hospital has been built</p>
          </div>
        </div>
      </div>

      <div className="flex md:px-20 px-10 py-5  w-full justify-center">
        <div className="flex flex-col justify-center  w-full h-full bg-[#c0e864]  rounded-md  py-10 md:px-10 px-5">
          <div className="flex justify-center ">
            <p className="md:w-1/2 w-full text-center text-3xl font-bold">
              Fundraising on Buddha Trust takes just a few minutes
            </p>
          </div>
          <div className="flex flex-col w-full  md:flex-row md:flex-wrap justify-around items-center p-20">
            <div className="flex flex-col w-full gap-5  justify-center items-center mb-8 md:mb-0 md:w-1/3">
              <img className="w-1/2 md:w-3/2" src="/imageSmile.png" alt="" />
              <div className="w-full md:w-3/4  text-center">
                <p className="text-lg font-semibold">Give Happiness</p>
                <p className="text-sm">
                  Giving happiness to others is one of the most fulfilling
                  things you can do in life.
                </p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-5 justify-center items-center mb-8 md:mb-0 md:w-1/3">
              <img className="w-1/2 md:w-3/2" src="/imageHeart.png" alt="" />
              <div className="w-full md:w-3/4   text-center">
                <p className="text-lg font-semibold">Share Love</p>
                <p className="text-sm">
                  When you share love with those around you, you create a ripple
                  effect of kindness.
                </p>
              </div>
            </div>
            <div className="flex flex-col  w-full gap-5 justify-center items-center md:w-1/3">
              <img className="w-1/2 md:w-3/2" src="/imageSocial.png" alt="" />
              <div className="w-full md:w-3/4  text-center">
                <p className="text-lg font-semibold">Build Socially</p>
                <p className="text-sm">
                  Building socially requires not just connecting with others,
                  but also actively contributing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
