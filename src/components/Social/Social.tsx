import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

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
      <Button>
        <StyledInstagramIcon fontSize="small" />
      </Button>
      <Button>
        <StyledFacebookIcon fontSize="small" />
      </Button>
      <Button>
        <StyledTwitterIcon fontSize="small" />
      </Button>
      <Button>
        <StyledPinterestIcon fontSize="small" />
      </Button>
    </>
  );
};

export default Social;
