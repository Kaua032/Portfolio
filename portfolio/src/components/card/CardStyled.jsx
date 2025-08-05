import styled from "styled-components";

export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    width: 350px;
    height: 350px;
    border-radius: 10px;
    padding-top: 30px;
    gap: 40px;
    padding: 30px 40px 0 40px;

    box-shadow: 0 6px 12px rgb(50, 50, 93, 0.25);
    #imgArea{
        background-color: #00ACC1;
        padding: 25px;
        border-radius: 100%;
    }
    #cardTitle{
        font-family: Roboto;
        font-size: 30px;
        font-weight: bold;
        color: #212226;
    }
    #cardText{
        font-family: Roboto;
        font-size: 15px;
        font-weight: 500;
        color: #5F6673;
        text-align: justify;
    }
`