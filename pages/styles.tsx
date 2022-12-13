import styled from "styled-components";

export const LeftSide = styled.div`
    width: 30%;
    @media only screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const RightSide = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 5rem;
    @media only screen and (max-width: 800px) {
        flex-direction: row;
        width: 100%;
        margin: 0;
    }
`;

export const JobsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 5rem;
    @media only screen and (max-width: 800px) {
        flex-direction: column;
        margin: 0 2rem;
    }
`;

export const JobsList = styled.ul`
  display: flex;
  
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  
  
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;    
`;

export const Title = styled.h1`
    text-align: start;
    margin-left: 3rem;
    font-weight: 400;
    @media only screen and (max-width: 800px) {
        text-align: center;        
    }
`;

export const Content = styled.main`
    height: 100%;
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