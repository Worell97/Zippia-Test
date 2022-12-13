import styled from "styled-components";

interface DateOptionsProps {
  selected: boolean;
}

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d8dee2;
  padding: 10px;
`;

export const FilterItem = styled.div`
  border-bottom: 1px solid #d8dee2;
`;

export const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid #d4d4d4;
  border-radius: 4px;
  color: #333;
  height: 40px;
  padding: 0.375rem 0.75rem;
  font-size: 16px;
  line-height: 1.33;
  margin-bottom: 22px;
`;

export const DateOption = styled.span<DateOptionsProps>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid #d8dee2;
  padding: 0.375rem 0.75rem;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;

  color: ${(props) => (props.selected ? "#fff" : "#7d878f")};
  background: ${(props) => (props.selected ? "#3174ee" : "#fff")};
  transition: all .3s ease-in-out;  
  margin-bottom: 22px;
`;