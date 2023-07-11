import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Logo from 'components/Logo/Logo';
import Menu from 'components/Menu/Menu';
import './Header.scss';
import Social from 'components/Social/Social';

type Props = {};
const Header = (props: Props) => {
  return (
    <AppBar
      className="color-header"
      position="static"
      sx={{ backgroundColor: '#DCEBEB' }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Logo />
        <Menu />
        <Social />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
