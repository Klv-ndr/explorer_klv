import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const StyledInstagramIcon = styled(InstagramIcon)`
  color: brown;
`;
const StyledFacebookIcon = styled(FacebookIcon)`
  color: brown;
`;
const StyledTwitterIcon = styled(TwitterIcon)`
  color: brown;
`;
const StyledPinterestIcon = styled(PinterestIcon)`
  color: brown;
`;

const Social = () => {
  return (
    <>
      <NavLink to={'./ContactUs'}>
        <Button color="inherit" sx={{ color: 'brown' }}>
          <StyledInstagramIcon fontSize="small" />
        </Button>
      </NavLink>
      <NavLink to={'./ContactUs'}>
        <Button color="inherit" sx={{ color: 'brown' }}>
          <StyledFacebookIcon fontSize="small" />
        </Button>
      </NavLink>
      <NavLink to={'./ContactUs'}>
        <Button color="inherit" sx={{ color: 'brown' }}>
          <StyledTwitterIcon fontSize="small" />
        </Button>
      </NavLink>
      <NavLink to={'./ContactUs'}>
        <Button color="inherit" sx={{ color: 'brown' }}>
          <StyledPinterestIcon fontSize="small" />
        </Button>
      </NavLink>
    </>
  );
};

export default Social;
