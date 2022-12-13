import styled from 'styled-components';

interface HiddenMenuProps {
    visible: boolean;
}

export const StyledMenu = styled.nav`
    box-sizing: border-box;
    min-height: 68px;
    max-height: 10vh;
    min-width: 100vw;
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

export const HiddenMenu = styled.div<HiddenMenuProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    transition: all .4s, easy-in-out;
    transform: translateX(${props => props.visible ? '0' : '100%'});
    bottom: 0;
    right: 0;
    top: 0;
    background-color: #212529;
    height: 250px;
    width: 100%;
    position: fixed;
`;