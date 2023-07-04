import './Button.css'

const Button = ({theme, onClick, label}) => {
    return (
        <>
        <button className={theme} onClick={onClick}>{label}</button>
        </>
    );
}

export default Button;