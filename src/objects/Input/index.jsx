import Label from "../Label";

const Input = ({ id = "", value = "", type = "text"}) => (
        <input className="input" id={id} type={type} value={value} />
);

export default Input;