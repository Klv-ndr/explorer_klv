import ScrollToTopButton from 'components/ScrollUp/ScrollUp';
import './Footer.scss';

type Props = {};
const Footer = (props: Props) => {
  return (
    <div className="footer-background">
      <div className="copyright">
        © Copyright Qode Interactive. This demo is part of the Bridge theme
      </div>
      <ScrollToTopButton />
    </div>
  );
};
export default Footer;
