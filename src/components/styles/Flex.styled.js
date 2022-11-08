import styled from "styled-components";

const Flex = styled.div`
  background-color: ${props => props.background};
  border-radius: 0.4rem;
  display: flex;
  flex-direction: ${props => props.direction};
  flex-wrap: ${props => props.wrap};
  gap: 0.3rem;
  margin: 1rem;
  width: ${props => props.width};
  padding: ${props => props.padding};
  
  button {
    background-color: white;
    padding: 0.5rem;
    border-radius: 0.3rem;
    width: 12rem;
    border: transparent;
    box-shadow: 1px 1px 2px grey;
    cursor: pointer;

    &:hover {
    font-weight: 600;
    }
  }

  p {
    text-align: center;
    width: 100%;
    
  }

`
  export default Flex;