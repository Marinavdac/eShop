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
    width: 10rem;
  }

  p {
    text-align: center;
    width: 100%;
    
  }

`
  export default Flex;