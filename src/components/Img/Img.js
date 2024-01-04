import "./Img.css";
import Copy from "../../assets/file_copy.svg";
import Expand from "../../assets/expand.svg";
import Card from "../../assets/card.svg";
import Ilustracao from "../../assets/Ilustracao.svg";
import Logo from "../../assets/logo.svg";
import Logout from "../../assets/logout.svg";
import Person from "../../assets/person.svg";
import Owner from "../../assets/owner.svg";

const Img = ({ theme }) => {
  return (
    <>
      {theme == "Copy" && <img src={Copy} className={theme} alt={theme} />}
      {theme == "Expand" && <img src={Expand} className={theme} alt={theme} />}
      {theme == "Card" && <img src={Card} className={theme} alt={theme} />}
      {theme == "Ilustracao" && (
        <img src={Ilustracao} className={theme} alt={theme} />
      )}
      {theme == "Logo" && <img src={Logo} className={theme} alt={theme} />}
      {theme == "Logout" && <img src={Logout} className={theme} alt={theme} />}
      {theme == "Person" && <img src={Person} className={theme} alt={theme} />}
      {theme == "Owner" && <img src={Owner} className={theme} alt={theme} />}
    </>
  );
};

export default Img;
