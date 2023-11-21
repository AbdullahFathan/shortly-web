const FooterMenu = ({ title, listContetnt }) => {
  return (
    <div className="flex flex-col items-center w-full md:items-start">
      <p className="mb-5 font-bold text-white capitalize ">{title}</p>
      <div className="flex flex-col items-center space-y-3 md:items-start">
        {listContetnt.map((item, index) => (
          <a
            key={index}
            href="#"
            className="capitalize text-grayishViolet hover:text-cyan"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};
export default FooterMenu;
