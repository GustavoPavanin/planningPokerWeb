import "./ResultBoard.css";

const ResultBoard = ({frequenciaDeVotos, media, mediana}) => {

    const moda = () =>{
        Math.max(...frequenciaDeVotos.map(voto => voto[1]));
    }

    return(
        <div className="resultBoard">
            <div> 
                <div className="title">Moda:</div>
                <div className="resultNumber">{moda}</div>
            </div>
                <div className="verticalLine"/>
            <div> 
                <div className="title">Média:</div>
                <div className="resultNumber">{media}</div>
            </div>
            <div className="verticalLine"/>
            <div> 
                <div className="title">Mediana:</div>
                <div className="resultNumber">{mediana}</div>
            </div>
        </div>
    )
}

export default ResultBoard;