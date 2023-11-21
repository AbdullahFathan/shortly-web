const LinkCard = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
      <p className="font-bold text-center text-veryDarkViolet md:text-left">
        https://www.linkedin.com
      </p>
      <div className=" flex flex-row items-center justify-end flex-1 space-x-4 space-y-2 md:space-y-0">
        <div className="font-bold text-cyan">https:bit.ly/web4</div>
        <button
          type="button"
          className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none"
        >
          Copy
        </button>
      </div>
    </div>
  );
};
export default LinkCard;
