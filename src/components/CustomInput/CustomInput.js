import { useState } from "react";
import "./styles.css";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function CustomInput({
  type,
  placeholder,
  Icon,
  iconColor,
  isSecureEntry = false,
}) {
  const [showText, setShowText] = useState(false);

  return (
    <div className="customInputBaseContainer">
      <div className="customInputIconContainer">
        {Icon ? <Icon color={iconColor} size={15} /> : null}
      </div>
      <div className="customInputInputContainer">
        <input
          type={isSecureEntry ? (showText ? "text" : "password") : type}
          placeholder={placeholder}
        />
      </div>
      {isSecureEntry && (
        <div
          className="customInputPasswordContainer"
          onClick={() => {
            setShowText(!showText);
          }}
        >
          {showText ? <FaEye /> : <FaEyeSlash />}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
