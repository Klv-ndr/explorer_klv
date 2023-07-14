import NewYorkMap from 'components/NewYorkMap/NewYorkMap';
import './ContactUs.scss';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';

type Props = {};
const ContactUs = (props: Props) => {
  return (
    <>
      <div className="contact-us-title">Contact Us</div>
      <div className="contact-us">
        <div className="contact-text">
          <h3 className="subTitle-contact">New York office</h3>
          <h1 className="title-contact">Get in touch with us</h1>
          <p className="description-contact">
            Pellentesque sed dictum arcu donec ut tellus quis justo suscipit
            lobortis mollis nec erat. Sed et eros leohasellus varius ligula.
          </p>
          <div className="data-contact">
            <div className="adress-contact">
              <MapOutlinedIcon style={{ color: '#c89454' }} />
              <span className="contact-margin">
                3724-3756 9th AveBrooklyn, NY 11232, USA 40.646642, -73.994452
              </span>
            </div>
            <div className="number-contact">
              <PhoneIphoneOutlinedIcon style={{ color: '#c89454' }} />
              <span className="contact-margin">(0080) 7777 - 666- 5345</span>
            </div>
            <div className="e-mail-contact">
              <LocalPostOfficeOutlinedIcon style={{ color: '#c89454' }} />
              <span className="contact-margin">bridge@example.com</span>
            </div>
          </div>
        </div>

        <NewYorkMap />
      </div>
    </>
  );
};
export default ContactUs;
