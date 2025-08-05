import { CardArea } from "./cardStyled";

function Card({...props}){
    return(
        <CardArea>
            <div id="imgArea">
                <img src={props.url} alt="" />
            </div>
            <p id="cardTitle">{props.title}</p>
            <p id="cardText">{props.text}</p>
        </CardArea>
    )
}

export default Card;