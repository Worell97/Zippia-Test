import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  border-top: 1px solid #d8dee2;
  flex-direction: column;
  justify-content: space-around;
  padding: 5px;
  width: 100%;
  min-height: 6rem;
  background: #eee;

  scroll-snap-align: start;

  @media screen and (max-width: 768px){
    height: 40vh;
    flex-shrink: 0;
    border-radius: 10px;
    transform-origin: center center;
    transform: scale(1);
    transition: transform 0.5s;
    position: relative;
    justify-content: center;
    align-items: center;    
  }
`

export const StyledTitle = styled.h2`
  font-weight: 500;  
`;

export const StyledLocation = styled.h3`
  font-weight: 500;    
`;