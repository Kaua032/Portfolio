import { AreaProject } from "./ProjectStyled";

function Project({...props}){
    let stacks = props.stacks;
    return(
        <AreaProject>
            <div className="imgArea">
                <a className="githubProject" href={props.link}></a>
                <img src={props.url} alt="" />
            </div>
            <p className="projectTitle">{props.title}</p>
            <p className="projectText">{props.text}</p>
            <div className="stacks">
                {stacks ? stacks.map((stack, index) => (
                    <img key={index} src={stack}></img>
                )): ""}
            </div>
        </AreaProject>
    )
}

export default Project;