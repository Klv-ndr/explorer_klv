import Typography from '@mui/material/Typography';
import logo from 'assets/logotype.png';

type Props = {};
const Logo = (props: Props) => {
  return (
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <img src={logo} />
    </Typography>
  );
};
export default Logo;
