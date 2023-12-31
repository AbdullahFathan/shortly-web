const Feature = () => {
  return (
    <section className="pb-32 bg-gray-100">
      <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
        {/*Horizontal line for desktop */}
        <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block" />
        {/*Vertical line for Mobile */}
        <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden" />

        {/*BOX 1 */}
        <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 ">
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src="/images/icon-brand-recognition.svg" alt="brand-reco" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Brand Recognition
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content
          </p>
        </div>
        {/*BOX 2 */}
        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-8 md:w-1/3 ">
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src="/images/icon-detailed-records.svg" alt="brand-reco" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Detailed records
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        {/*BOX 3 */}
        <div className="relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:mt-16 md:w-1/3 ">
          <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
            <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
              <img src="/images/icon-fully-customizable.svg" alt="brand-reco" />
            </div>
          </div>
          <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
            Fully customizable
          </h5>
          <p className="text-center text-gray-400 md:text-left">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Feature;
