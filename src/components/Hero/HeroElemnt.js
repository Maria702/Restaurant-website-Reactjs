import styled from "styled-components";
import imgBg from "../../images/bg.jpg";

export const HeroContainer = styled.div`
    background : linear-gradient(to right, rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)),
    url(${imgBg});
    height : 100vh;
    background-position: center;
    background-size : cover;
`;

export const HeroContent = styled.div`
    height: calc(100vh -80px);
    max-height: 100%;
    width : 100vw;
    padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items: flex-start;
    height : 100vh;
    max-height : 100%;
    width : 650px;
    padding : 0 2rem;
    color : white;
    text-transform : uppercase;
    line-height : 1;
    font-weight :  bold;
    @media screen and (max-width : 650px) {
        width : 100%;
    }
`;

export const HeroHead = styled.h1`
    font-size : clamp(2.5rem, 10vw, 5rem);
    margin-bottom : 1rem;
    box-shadow : 3px 5px 5px rgba(0,0,0,69);
    letter-spacing : 3px;
`;
export const HeroPara = styled.p`
    font-size : clamp(2rem, 2.5vw, 3rem);
    margin-bottom : 2rem;
`;
export const HeroBtn = styled.button`
    font-size : 1.4rem;
    padding: 1rem 4rem;
    border : none;
    border-radius : 5px;
    background : linear-gradient(to right, #ffb347, #ffcc33);
    box-shadow : 0px 5px 10px rgba(0,0,0,0.5);
    transition : 0.2s ease-out;
    &:hover {
        background : linear-gradient(to right, #ffcc33, #ffb347);
        transition : 0.2s ease-out;
        cursor : pointer;
        color : white;
    }
`;