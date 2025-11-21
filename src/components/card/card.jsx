import { CardArea } from "./CardStyled";

function Card({...props}){
    return(
        <CardArea>
            <div class="imgArea">
                <img src={props.url} alt="" />
            </div>
            <p class="cardTitle">{props.title}</p>
            <p class="cardText">{props.text}</p>
        </CardArea>
    )
}

export default Card;