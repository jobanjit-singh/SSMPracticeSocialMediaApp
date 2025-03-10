import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import { auth } from "../../firebase";
import { useState } from "react";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
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
      <CustomButton
        backgroundColor={"#0000FF"}
        title={"Register"}
        color={"#FFFFFF"}
        onClick={handleRegister}
      />
    </div>
  );
}

export default RegisterPage;
