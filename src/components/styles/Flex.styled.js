import styled from "styled-components";

const Flex = styled.div`
  align-items: center;
  display: flex;
  gap: 3rem;
  justify-content: center;

  & > div,
  & > ul {
    flex: 1;
  };
`
  export default Flex;