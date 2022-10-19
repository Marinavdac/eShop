import StyledNavBar, { StyledInput } from "../styles/NavBar.styled";
import Flex from "../styles/Flex.styled";
import { FaEnvelope } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';

function NavBar() {
  return (
    <StyledNavBar>
      <div>
        <StyledInput type="text" placeholder="Search" />
        <BiSearchAlt2 style={{color:"white"}} />
      </div>
      <Flex>
      <li><a href="#"><FaEnvelope />Contato</a></li>
      <li><a href="#"><FaEnvelope />Contato</a></li>
      <li><a href="#"><FaEnvelope />Contato</a></li>
      <li><a href="#"><FaEnvelope />Contato</a></li>
      </Flex>
      
    </StyledNavBar>
  )
};

export default NavBar;