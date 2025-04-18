import React from "react";
import "./styles.css";
import { TiSocialTwitter } from "react-icons/ti";
import { FaCircleUser } from "react-icons/fa6";
import COLOR from "../../config/color";
import { useNavigate } from "react-router-dom";

function CustomNavbar() {
  const navigate = useNavigate();
  const links = [
    { title: "Home", path: "/home" },
    { title: "About Us", path: "/about" },
    { title: "Products", path: "/product" },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <div className="customNavbarBaseContainer">
      <div className="customNavbarLogoContainer">
        <TiSocialTwitter
          className="navbarLogoIcon"
          size={40}
          color={COLOR.blackColor}
        />
      </div>
      <div className="customNavbarLinkContainer">
        {links.map((item) => {
          return <p onClick={() => navigate(item.path)}>{item.title}</p>;
        })}
      </div>
      <div className="customNavbarProfileContainer">
        <FaCircleUser
          size={40}
          color={COLOR.blackColor}
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
}

export default CustomNavbar;
