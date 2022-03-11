import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { BiMicrophone, BiCog } from 'react-icons/bi';

const Navbar = () => {
  const date = new Date().getFullYear();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <IoIosArrowBack onClick={handleNavigate} />
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
};

export default Navbar;
