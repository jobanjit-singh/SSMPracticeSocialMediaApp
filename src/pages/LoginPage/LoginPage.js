import { useState } from "react";
import CustomInput from "../../components/CustomInput/CustomInput";
import COLOR from "../../config/color";
import "./styles.css";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import CustomButton from "../../components/CustomButton/CustomButton";

function LoginPage() {
  // let count = 0;
  // const [count, setCount] = useState(0);

  const [email, setEmail] = useState("@gmail.com");

  const handleLogin = () => {
    localStorage.setItem("uid", "EpLNmyXt6ZfVOiSHV7t3nE7cEyI3");
  };

  return (
    <div className="loginPageBaseContainer">
      <div className="loginPageContentBaseContainer">
        <div className="loginPageContentTitleContainer">
          <h1>Let's Connect</h1>
          <h4>{`Welcome ${email}`}</h4>
        </div>
        <div className="loginPageContentInputContainer">
          <CustomInput
            type={"email"}
            placeholder={"Enter Email"}
            Icon={FaUserAlt}
            inputValue={email}
            onChangeText={(e) => {
              // alert(e.target.value)
              setEmail(e.target.value);
            }}
          />
          <CustomInput
            type="password"
            placeholder={"Enter Password"}
            Icon={FaKey}
            isSecureEntry={true}
          />
          {/* <p>{count}</p>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increment
          </button> */}
          <CustomButton onClick={handleLogin} />
        </div>
        <div className="loginPageContentButtonContainer"></div>
        <div className="loginPageContentRegisterContainer"></div>
      </div>
    </div>
  );
}

export default LoginPage;
