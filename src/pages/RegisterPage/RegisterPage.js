import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [buttonText, setButtonText] = useState("Register");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      if (email == "" || password == "" || confirmPassword == "") {
        alert("Please fill the fields");
      } else if (password != confirmPassword) {
        alert("Password is not matching");
      } else {
        setButtonText("Please Wait...");
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          confirmPassword
        );
        setButtonText("Register");
        if (response.user.uid) {
          navigate("/login");
        } else {
          alert("Failed to register");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        }
      }
    } catch (err) {
      setButtonText("Register");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(err);
    }
  };

  return (
    <div>
      <h1>Register Page</h1>
      <CustomInput
        placeholder={"Email"}
        inputValue={email}
        onChangeText={(e) => setEmail(e.target.value)}
      />
      <CustomInput
        placeholder={"Password"}
        inputValue={password}
        onChangeText={(e) => setPassword(e.target.value)}
        isSecureEntry={true}
      />
      <CustomInput
        placeholder={"Confirm Password"}
        inputValue={confirmPassword}
        onChangeText={(e) => setConfirmPassword(e.target.value)}
        isSecureEntry={true}
      />
      <CustomButton
        backgroundColor={"#0000FF"}
        title={buttonText}
        color={"#FFFFFF"}
        onClick={handleRegister}
      />
    </div>
  );
}

export default RegisterPage;
