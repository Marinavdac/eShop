import StyledNavBar, { StyledInput } from "../styles/NavBar.styled";
import Flex from "../styles/Flex.styled";
import { FaAtlas, FaEnvelope, FaLocationArrow, FaMapMarked, FaMapMarkedAlt, FaMapMarker, FaMapPin } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../imgs/images1.png';

function NavBar() {
  return (
    <StyledNavBar>
      <div>
        <img src={logo} />
        <StyledInput type="text" placeholder="Search" />
        <BiSearchAlt2 style={{color:"black"}} />
        <li><a href="#"><FaMapPin style={{ margin: "2rem", width: "2.8rem" }} />
          <p style={{ margin: "-2rem 0 0 2rem" }}> <br></br>informe <br></br>o seu <br></br>CEP
          </p>
          </a></li>
      </div>
      <Flex>
      <li><a href="#"><FaEnvelope />Contato</a></li>
      <li><a href="#"><FaEnvelope />Contato</a></li>
      <li><a href="#"><FaEnvelope />Contato</a></li>
      </Flex>
      
    </StyledNavBar>
  )
};

export default NavBar;