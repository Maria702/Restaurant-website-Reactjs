import styled from "styled-components";
import DealTwo from '../../images/ff.jpg';
import NewDeal from '../../images/feature.jpg';

export const FeatureContainer = styled.div`
    background : linear-gradient(to right, rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)),
    url(${NewDeal});
    height : 300vh;
    max-height : 500px;
    background-position : center;
    background-size : cover;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    text-align : center;
    padding : 0 1rem;
`;
export const FeatureTitle = styled.h1`
    font-size : clamp(3rem, 5vw, 5rem);
    color: white;
    font-weight : bold;
`;
export const FeatureText = styled.p`
    font-size : clamp(1rem, 3vw, 2rem);
    margin-bottom : 1rem;
    color : white;
`;
export const FeatureBtn = styled.button`
    font-size : 1.4rem;
    padding : 0.6rem 3rem;
    border : none;
    border-radius : 5px;
    background : linear-gradient(to right, #ffb347, #ffcc33);
    box-shadow : 0px 5px 10px rgba(0,0,0,0.5);
    transition : 0.2s ease-out;
    &:hover {
        color : white;
        background : linear-gradient(to right, #ffcc33, #ffb347);
        transition : 0.2s ease-out;
        cursor : pointer;
    }

`;



// Features

export const FContainer = styled.div`
    background : linear-gradient(to right, rgba(0,0,0,0.7), 
    rgba(0,0,0,0.1)),
    url(${DealTwo});
    height : 300vh;
    max-height : 500px;
    background-position : center;
    background-size : cover;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    text-align : center;
    padding : 0 1rem;
`;