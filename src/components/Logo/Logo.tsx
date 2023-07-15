import Typography from '@mui/material/Typography';
import logo from 'assets/logotype.png';
import './Logo.scss';
import { NavLink } from 'react-router-dom';

type Props = {};
const Logo = (props: Props) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <NavLink to={'/'}>
        <img className="logo" src={logo} alt="logo" />
      </NavLink>
    </Typography>
  );
};
export default Logo;
