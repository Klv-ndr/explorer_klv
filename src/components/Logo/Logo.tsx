import Typography from '@mui/material/Typography';
import logo from 'assets/logotype.png';
import './Logo.scss';

type Props = {};
const Logo = (props: Props) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <img className="logo" src={logo} alt="logo" />
    </Typography>
  );
};
export default Logo;
