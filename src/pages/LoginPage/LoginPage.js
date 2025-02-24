import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/color";
import "./styles.css";

function LoginPage() {
  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>Let's Connect</h1>
          <h4>Login</h4>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput type={"email"} placeholder={"Enter Email"} />
          <CustomInput type="password" placeholder={"Enter Password"} />
        </div>
        <div className="loginPageContentButtonContainer"></div>
        <div className="loginPageContentRegisterContainer"></div>
      </div>
    </div>
  );
}

export default LoginPage;
