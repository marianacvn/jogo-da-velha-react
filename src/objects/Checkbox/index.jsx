import Input from "../Input";
import Label from "../Label";
import './styles.css';

const CheckBox = ({id = "", value = "", content = ""}) => (
    <>
        <Input id={id} value={value} type="checkbox" content={content}/>
        <Label htmlFor={id} content= {content}/>
    </>
);

export default CheckBox;