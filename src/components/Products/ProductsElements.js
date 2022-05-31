import styled from 'styled-components';

export const ProductContainer = styled.div`
    width : 100vw;
    min-height : 100vh;
    padding : 5rem calc((100vw - 1300px)/2);
    background : #150f0f;
    color : #fff;
`;
export const ProductHeading = styled.h1`
    font-size : clamp(2rem, 2.5vw, 3rem);
    text-align : center;
    justify-content : center;
    margin-bottom : 5rem;
`;
export const WrapProduct = styled.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : center;
    margin : 0 auto;
`;

export const ProductCard = styled.div`
    margin : 0 2rem;
    line-height : 2;
    width : 300px;
`;

export const ProductsImg = styled.div`
    height : 300px;
    min-width : 300px;
    background-size : cover;
    background-position: center;  
    background : url(${props => props.img}) no-repeat center center;
    box-shadow : 8px 8px 8px rgba(128,128,128);
`;
export const ProductDetails = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    padding : 2rem;
    text-align : center;
`;
export const ProductName = styled.h2`
    font-size : 1.5rem;
    font-weight : bold;
`;
export const ProductDesc = styled.p`
    margin-bottom : 1rem;

`;
export const ProductPrice = styled.p`
    font-size : 2rem;
    margin-bottom : 1rem;
`;
export const ProductButton = styled.button`
    font-size : 1rem;
    padding : 1rem 4rem;
    border : none;
    border-radius : 5px;
    background : linear-gradient(to right, #ffb347, #ffcc33);
    box-shadow : 0px 5px 10px rgba(0,0,0,0.5);
    transition : 0.2s ease-out;
    &:hover {
        background : linear-gradient(to right, #ffcc33, #ffb347);
        transition : 0.2s ease-out;
        cursor : pointer;
    }
`;