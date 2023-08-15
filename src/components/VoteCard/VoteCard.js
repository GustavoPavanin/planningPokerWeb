import { useEffect } from "react";
import "./VoteCard.css";

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
                <label for={id} className="voteCard">{vote}</label>
        </>
    );
}

export default VoteCard;