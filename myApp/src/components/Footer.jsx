import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "../style/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContent">
        <p>Siteyi Oluşturan Rıdvan Korurer 2023 Tüm Hakları Saklıdır.</p>
      </div>
      <div className="social">
        <BsInstagram className="socialItem" />
        <BsFacebook className="socialItem" />
        <BsTwitter className="socialItem" />
      </div>
    </div>
  );
};

export default Footer;
