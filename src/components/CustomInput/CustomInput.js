import "./styles.css";

function CustomInput({ type, placeholder }) {
  return (
    <div className="customInputBaseContainer">
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default CustomInput;
