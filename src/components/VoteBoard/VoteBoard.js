import { useState, useEffect } from "react";
import VoteCard from "../VoteCard/VoteCard";
import "./VoteBoard.css";

const VoteBoard = ({voteType, setSelected, selected}) =>{
    const fibonacci = [0, 1, 2, 3, 5, 8, 13, 21, 34, "?"];
    const fibonacci_mod = [0, "1/2", 1, 2, 3, 5, 8, 13, 20, 40, "?"];
    const integer = [0,1,2,3,4,5,6,7,8,9,10,"?"];
    const handleSelect = (vote) => {
        if((selected == null || selected != vote)){
            setSelected(vote);
        }
        else{
            setSelected(null);
            
        }
    }

    return(
        <div className="voteBoard">
            {voteType == 1 && fibonacci.map((vote) => <VoteCard id={"card"+vote} vote={vote} handleSelect={handleSelect} selected={selected}/> )}
            {voteType == 2 && fibonacci_mod.map((vote) => <VoteCard vote={vote} handleSelect={handleSelect} selected={selected}/>)}
            {voteType == 3 && integer.map((vote) => <VoteCard vote={vote} handleSelect={handleSelect} selected={selected}/>)}
        </div>
    );
}

export default VoteBoard;