import './Button.css'
import Copy from '../../assets/file_copy.svg'
const Button = ({theme, onClick, copy, children}) => {
    return (
        <>
        <button className={"btn " +theme} onClick={onClick}>  
        {copy && <img src={Copy} className='icon'/>}
        {children}
        </button>
        </>
    );
}

export default Button;