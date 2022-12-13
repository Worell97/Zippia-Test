import styled from 'styled-components';

export const StyledMenu = styled.nav`
    box-sizing: border-box;
    min-height: 68px;
    max-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #212529;
`;


export const StyledNavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

export const NavMenuHome = styled.button`
    font-family: "IBM Plex Sans",sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.125;   
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    display: inline-block;
    background: transparent;
`;

export const NavMenuItem = styled.button` 
    border: none;
    color: #ffffff;
    font-size: 1rem;
    width: 10rem;
    height: 3rem;
    background: transparent;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s, easy-in-out;  
    &:hover,
    &:focus {
        opacity: .5;
    }
`;

export const Img = styled.img`  
    aspect-ratio: auto 160 / 36;
    height: 36px;  
`;