import styled from "styled-components";

export const LeftSide = styled.div`
    width: 30%;
    max-width: 320px;
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const RightSide = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        margin: 0;
    }
`;

export const JobsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    grid-gap: 1.5rem;
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 2rem;
    }
`;

export const JobsList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0;
  padding: 0;
  
  @media screen and (max-width: 768px){
    flex-direction: row;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    
    
    
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;  
  }  
`;

export const Title = styled.h1`
    text-align: start;
    margin-top: 36px;
    margin-bottom: 36px;
    font-weight: 500;
    @media only screen and (max-width: 768px) {
        text-align: center;        
    }
`;

export const Content = styled.main`
    display: block;
    height: 100%;  
    max-width: 1140px;  
    margin: 0 9rem;
    @media only screen and (max-width: 1280px) {
        margin: 0 5rem;    
    }
`;

export const Footer = styled.footer`    
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-height: 10vh;
  bottom: 0;
`