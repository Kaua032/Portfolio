import { AreaProject } from "./ProjectStyled";

function Project({...props}){
    return(
        <AreaProject>
            <div className="imgArea">
                <a className="githubProject" href={props.link}></a>
                <img src={props.url} alt="" />
            </div>
            <p className="projectTitle">{props.title}</p>
            <p className="projectText">{props.text}</p>
        </AreaProject>
    )
}

export default Project;