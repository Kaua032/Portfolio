import styled from "styled-components"

export const AreaProject = styled.div`
    width: 350px;

    background-color: #fff;
    border-radius: 10px;
    padding: 20px 15px 15px 15px;

    box-shadow: 0 6px 12px rgb(50, 50, 93, 0.25);
    .imgArea{
        display: flex;
        flex-direction: column;
    }
    .imgArea .githubProject{
        position: static;
        z-index: 2;
        align-self: flex-end;
        margin-bottom: -28px;
        margin-right: 8px;
    }
    .imgArea .githubProject img{
        width: 17px;
        height: 17px;
    }
    .imgArea .background{
        width: 320px;
    }
    .projectTitle{
        font-family: Roboto;
        font-size: 20px;
        font-weight: bold;
        color: #212226;
        margin-top: 15px;
    }
    .projectText{
         font-family: Roboto;
        font-size: 13px;
        font-weight: 400;
        color: #5F6673;
        margin-top: 10px;
    }
    .stacks{
        align-self: flex-end;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 40px;
    }
`
