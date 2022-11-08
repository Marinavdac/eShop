import { StyledNavBar, StyledInput } from '../styles/NavBar.styled';
import Flex from '../styles/Flex.styled';
import { FaEnvelope, FaMapPin, FaWhatsapp } from 'react-icons/fa';
import { BiSearchAlt2 } from 'react-icons/bi';
import logo from '../../imgs/images1.png';

function NavBar(props) {
  return (
    <StyledNavBar>
      <div>
        <img src={logo} />
        <StyledInput type="text" placeholder="Search" value={props.search} onChange={props.handleSearch} />
        <button
         onClick={ () => props.handleSearchBtn(props.search)}><BiSearchAlt2 style={{ color: 'black' }} /></button>
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
