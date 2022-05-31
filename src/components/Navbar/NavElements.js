import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa';

export const Nav = styled.nav `
    background: transparent;
    height : 80px;
    display : flex;
    justify-content : center;
    font-weight: bold;
    color: white;
    font-weight: 700;

`;

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    padding: 0 1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        color:  #F6BE00;
       
    }


    @media screen and (max-width: 400px) {
        postion: absolute;
        top: 10px;
        left : 25px;

    }
`;

export const  NavIcon = styled.div`
    display : block;
    position: absolute;
    top: 0;
    right: 0;
    cursor : pointer;
    color: #fff;
  
    p {
        transform : translate(-275%, 100%);
        font-family: 'Permanent Marker', cursive;
        font-weight: bold;
        display: block;
        font-size: 1.3rem;
        @media screen and (max-width: 400px) {
            display: none;
        }
    }
`;

export const Bars = styled(FaPizzaSlice)`
    transform : translate(-50%, 15%);
    display: none;
    @media screen and (max-width: 400px) {
        display: block;
        font-size: 2rem;
        margin-top: 15px;
    }


`;