import { StyledNavBar, StyledInput } from '../styles/NavBar.styled';
import Flex from '../styles/Flex.styled';
import { FaEnvelope, FaMapPin, FaWhatsapp } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../imgs/images1.png';

function NavBar() {
  return (
    <StyledNavBar>
      <div>
        <img src={logo} />
        <StyledInput type="text" placeholder="Search" />
        <BiSearchAlt2 style={{ color: 'black' }} />
      </div>
      <Flex>
        <li>
          <a href="#">
            <FaMapPin /> Endereço{' '}
          </a>
        </li>
        <li>
          <a href="#">
            <FaEnvelope /> Contato{' '}
          </a>
        </li>
        <li>
          <a href="#">
            <FaWhatsapp /> Contato{' '}
          </a>
        </li>
      </Flex>
    </StyledNavBar>
  );
}

export default NavBar;
