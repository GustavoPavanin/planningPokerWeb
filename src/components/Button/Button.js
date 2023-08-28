import './Button.css'
import Img from '../Img/Img';
const Button = ({theme, onClick, copy, children}) => {
    return (
        <>
        <button className={"btn " +theme} onClick={onClick}>  
        {copy && <Img theme="Copy" />}
        {children}
        {theme == "expand" && <Img theme="Expand" />}
        </button>
        </>
    );
}

export default Button;