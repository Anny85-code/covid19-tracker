import './Navbar.css';
import { IoIosArrowBack } from 'react-icons/io';
import { BiMicrophone, BiCog } from 'react-icons/bi';

const date = new Date().getFullYear();
const Navbar = () => (
  <div className="navbar">
    <IoIosArrowBack />
    <h2 className="date">{date}</h2>
    <p className="header-txt">Countries&apos;s Data</p>
    <span className="icons mic">
      <BiMicrophone />
    </span>
    <span className="icons">
      <BiCog />
    </span>
  </div>
);

export default Navbar;
