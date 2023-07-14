import Button from '@mui/material/Button';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

type Props = {};

const Menu = (props: Props) => {
  return (
    <>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <NavLink to={'/'} className="menu-link">
          Home
        </NavLink>
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <NavLink to={'/AboutUs'} className="menu-link">
          About Us
        </NavLink>
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <NavLink to={'/Destinations'} className="menu-link">
          Destinations
        </NavLink>
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <NavLink to={'/Gallery'} className="menu-link">
          Gallery
        </NavLink>
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <NavLink to={'/Stories'} className="menu-link">
          Stories
        </NavLink>
      </Button>
      <Button className="font-text" color="inherit" sx={{ color: 'brown' }}>
        <NavLink to={'/ContactUs'} className="menu-link">
          Contact Us
        </NavLink>
      </Button>
    </>
  );
};

export default Menu;
