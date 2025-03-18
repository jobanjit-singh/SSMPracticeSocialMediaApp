import { useState } from "react";
import ASSETS from "../../assets";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./styles.css";
import { GiFullPizza } from "react-icons/gi";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";
import { Outlet } from "react-router-dom";

function HomePage() {
  const [name, setName] = useState("");

  return (
    // <div
    //   className="baseContainer"
    //   style={{
    //     backgroundImage: `url(${ASSETS.homePageBackImage})`,
    //   }}
    // >
    //   {/* <img src={require("../../assets/images/HomePageBackImage.jpg")} alt="" /> */}
    //   {/* <img src={ASSETS.homePageImage} alt="" />
    //   <img id="second" src={ASSETS.homePageImage} alt="" />
    //   <img src={ASSETS.homePageImage} alt="" /> */}

    //   {/* <div className="contentBaseContainer">
    //     <h1>{name}</h1>
    //     <input type="text" maxLength={10} />
    //     <GiFullPizza className="icon" />
    //     <CustomButton
    //       backgroundColor={COLOR.secondSecondaryColor}
    //       color={COLOR.blackColor}
    //       title={"Grab your Pizza"}
    //       onClick={() => alert("Click Done")}
    //     />
    //   </div> */}
    // </div>
    <div className="homePageBaseContainer">
      <div className="homePageNavbarBaseContainer">
        <CustomNavbar />
      </div>
      <div className="homePageContentBaseContainer">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
