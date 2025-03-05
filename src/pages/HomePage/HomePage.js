import ASSETS from "../../assets";
import CustomButton from "../../components/CustomButton/CustomButton";
import COLOR from "../../config/color";
import "./styles.css";
import { GiFullPizza } from "react-icons/gi";

function HomePage() {
  return (
    <div
      className="baseContainer"
      style={{
        backgroundImage: `url(${ASSETS.homePageBackImage})`,
      }}
    >
      {/* <img src={require("../../assets/images/HomePageBackImage.jpg")} alt="" /> */}
      {/* <img src={ASSETS.homePageImage} alt="" />
      <img id="second" src={ASSETS.homePageImage} alt="" />
      <img src={ASSETS.homePageImage} alt="" /> */}

      <div className="contentBaseContainer">
        <h1>PIZZA</h1>
        <GiFullPizza className="icon" />
        <CustomButton
          backgroundColor={COLOR.secondSecondaryColor}
          color={COLOR.blackColor}
          title={"Grab your Pizza"}
          onClick={() => alert("Click Done")}
        />
      </div>
    </div>
  );
}

export default HomePage;
