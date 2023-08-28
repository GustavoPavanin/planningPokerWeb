import "./VoteCard.css";
import VoteCardLabel from "./VoteCardLabel";

const VoteCard = ({vote, handleSelect, selected}) => {
    const id = "card"+vote;
    const verify = () => {
        const element = document.getElementById(id);
        if(element.checked && selected == vote)       
            element.checked = false;
    }

    return(
        <>
                <input id={id} type="radio" name="VoteCard" onClick={() => {verify(); handleSelect(vote);}} />
                <VoteCardLabel id={id} vote={vote} />
        </>
    );
}

export default VoteCard;