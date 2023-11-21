import { footerData } from "../constants/footer";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet ">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        <img src="/images/logo.svg" alt="logo" />
        {/*Menu */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {footerData.map((item, index) => (
            <FooterMenu
              key={index}
              title={item.title}
              listContetnt={item.listContetnt}
            />
          ))}
        </div>
        {/*Social Media */}
        <div className="flex space-x-6 ">
          <img
            src="/images/icon-facebook.svg"
            alt="facebook"
            className="ficon"
          />

          <img src="/images/icon-twitter.svg" alt="twitter" className="ficon" />

          <img
            src="/images/icon-pinterest.svg"
            alt="pinterest"
            className="ficon"
          />
          <img
            src="/images/icon-instagram.svg"
            alt="instagram"
            className="ficon"
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
