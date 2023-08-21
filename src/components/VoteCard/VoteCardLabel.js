import { useEffect } from "react";
import "./VoteCard.css";

const VoteCardLabel = ({id, vote, disabled, className}) => {
    return(
        <>
                {disabled && <div className="voteCard small">{vote}</div>}
                {!disabled && <label for={id} className="voteCard large">{vote}</label>}
        </>
    );
}

export default VoteCardLabel;