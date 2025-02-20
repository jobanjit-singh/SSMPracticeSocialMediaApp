import CustomInput from "../../components/CustomInput/CustomInput";
import "./styles.css";

function LoginPage() {
  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>Let's Connect</h1>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput type={"text"} placeholder={"Enter Email"} />
          <CustomInput type="password" placeholder={"Enter Password"} />
        </div>
        <div className="loginPageContentButtonContainer"></div>
        <div className="loginPageContentRegisterContainer"></div>
      </div>
    </div>
  );
}

export default LoginPage;
