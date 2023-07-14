import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SwiperSlider.scss';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const SwiperSlider = () => {
  const slideStyles = {
    height: '350px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <Slide autoplay={false}>
      <div className="each-slide-effect">
        <div className="SwiperSlider-1" style={{ ...slideStyles }}>
          <div className="back-img">
            <Container>
              <div className="stories-text">
                <h3 className="title-stories-text">Camping</h3>
                <p className="description-stories-text">
                  Lorem ipsum dolor sit amet, proin gravida nibh vel velit
                  auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                  auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                  elit. Duis sed odio sit amet nibh vulputate cursus a sit amet
                  maorbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                  auctor a ornare odio. Sed non mauris vitae erat consequat
                  auctor eu in elit. Classaptent taciti sociosqu ad litora
                  torquent per conubia nostra, per inceptos himenaeos. Mauris in
                  erat justo. Nullam ac urna eu felis dapibus condimentum sit
                  amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
                  condimentum fermentum nunc. Etiam pharetra.
                </p>
                <h4 className="subtitle-stories-text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi.
                </h4>
                <p className="description-stories-text">
                  Id velit senserit constituam eum. Ferri deleniti definitionem
                  sea ut, mel ei oratio soluta. At altera virtute iuvaret nam,
                  eam maiorum invidunt ut, ne has mollis iisque. Pri at mundi
                  soleat deserunt, cum tota appareat in. Ne duo odio lorem
                  commune, vocibus oporteat cu eum, ad animal timeam patrioque
                  pri.Delectus ponderum atomorum ne has, ut qui unum neglegentur
                  consequuntur, erant option argumentum in vel. Est id atomorum
                  periculis instructior, fuisset appetere complectitur in usu.
                  An movet liberavisse vix. Dicunt tractatos at nam, vis eu
                  movet facete option, ne pri dolores contentiones. Nibh
                  lobortis adipiscing ex sed, sumo virtute copiosae pri no, te
                  erat feugait propriae mel eu prima.
                </p>
              </div>
              <button className="read-more">
                <NavLink className="text-decoration" to={'./Camping'}>
                  Read More
                </NavLink>
              </button>
            </Container>
          </div>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="SwiperSlider-2" style={{ ...slideStyles }}>
          <Container>
            <div className="stories-text">
              <h3 className="title-stories-text">Hiking</h3>
              <p className="description-stories-text">
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                odio sit amet nibh vulputate cursus a sit amet maorbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio. Sed non mauris vitae erat consequat auctor eu in elit.
                Classaptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
                urna eu felis dapibus condimentum sit amet a augue. Sed non
                neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
                nunc. Etiam pharetra.
              </p>
              <h4 className="subtitle-stories-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi.
              </h4>
              <p className="description-stories-text">
                Id velit senserit constituam eum. Ferri deleniti definitionem
                sea ut, mel ei oratio soluta. At altera virtute iuvaret nam, eam
                maiorum invidunt ut, ne has mollis iisque. Pri at mundi soleat
                deserunt, cum tota appareat in. Ne duo odio lorem commune,
                vocibus oporteat cu eum, ad animal timeam patrioque pri.Delectus
                ponderum atomorum ne has, ut qui unum neglegentur consequuntur,
                erant option argumentum in vel. Est id atomorum periculis
                instructior, fuisset appetere complectitur in usu. An movet
                liberavisse vix. Dicunt tractatos at nam, vis eu movet facete
                option, ne pri dolores contentiones. Nibh lobortis adipiscing ex
                sed, sumo virtute copiosae pri no, te erat feugait propriae mel
                eu prima.
              </p>
            </div>
            <button className="read-more-2">
              <NavLink className="text-decoration" to={'./Hiking'}>
                Read More
              </NavLink>
            </button>
          </Container>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="SwiperSlider-3" style={{ ...slideStyles }}>
          <Container>
            <div className="stories-text">
              <h3 className="title-stories-text">Research</h3>
              <p className="description-stories-text">
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                odio sit amet nibh vulputate cursus a sit amet maorbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio. Sed non mauris vitae erat consequat auctor eu in elit.
                Classaptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
                urna eu felis dapibus condimentum sit amet a augue. Sed non
                neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
                nunc. Etiam pharetra.
              </p>
              <h4 className="subtitle-stories-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi.
              </h4>
              <p className="description-stories-text">
                Id velit senserit constituam eum. Ferri deleniti definitionem
                sea ut, mel ei oratio soluta. At altera virtute iuvaret nam, eam
                maiorum invidunt ut, ne has mollis iisque. Pri at mundi soleat
                deserunt, cum tota appareat in. Ne duo odio lorem commune,
                vocibus oporteat cu eum, ad animal timeam patrioque pri.Delectus
                ponderum atomorum ne has, ut qui unum neglegentur consequuntur,
                erant option argumentum in vel. Est id atomorum periculis
                instructior, fuisset appetere complectitur in usu. An movet
                liberavisse vix. Dicunt tractatos at nam, vis eu movet facete
                option, ne pri dolores contentiones. Nibh lobortis adipiscing ex
                sed, sumo virtute copiosae pri no, te erat feugait propriae mel
                eu prima.
              </p>
            </div>
            <button className="read-more-3">
              <NavLink className="text-decoration" to={'./Research'}>
                Read More
              </NavLink>
            </button>
          </Container>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="SwiperSlider-4" style={{ ...slideStyles }}>
          <Container>
            <div className="stories-text">
              <h3 className="title-stories-text">Discover</h3>
              <p className="description-stories-text">
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                odio sit amet nibh vulputate cursus a sit amet maorbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio. Sed non mauris vitae erat consequat auctor eu in elit.
                Classaptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
                urna eu felis dapibus condimentum sit amet a augue. Sed non
                neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
                nunc. Etiam pharetra.
              </p>
              <h4 className="subtitle-stories-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi.
              </h4>
              <p className="description-stories-text">
                Id velit senserit constituam eum. Ferri deleniti definitionem
                sea ut, mel ei oratio soluta. At altera virtute iuvaret nam, eam
                maiorum invidunt ut, ne has mollis iisque. Pri at mundi soleat
                deserunt, cum tota appareat in. Ne duo odio lorem commune,
                vocibus oporteat cu eum, ad animal timeam patrioque pri.Delectus
                ponderum atomorum ne has, ut qui unum neglegentur consequuntur,
                erant option argumentum in vel. Est id atomorum periculis
                instructior, fuisset appetere complectitur in usu. An movet
                liberavisse vix. Dicunt tractatos at nam, vis eu movet facete
                option, ne pri dolores contentiones. Nibh lobortis adipiscing ex
                sed, sumo virtute copiosae pri no, te erat feugait propriae mel
                eu prima.
              </p>
            </div>
            <button className="read-more-4">
              <NavLink className="text-decoration" to={'./Discover'}>
                Read More
              </NavLink>
            </button>
          </Container>
        </div>
      </div>
      <div className="each-slide-effect">
        <div className="SwiperSlider-5" style={{ ...slideStyles }}>
          <Container>
            <div className="stories-text">
              <h3 className="title-stories-text">Explore</h3>
              <p className="description-stories-text">
                Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
                aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
                elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed
                odio sit amet nibh vulputate cursus a sit amet maorbi accumsan
                ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare
                odio. Sed non mauris vitae erat consequat auctor eu in elit.
                Classaptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac
                urna eu felis dapibus condimentum sit amet a augue. Sed non
                neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum
                nunc. Etiam pharetra.
              </p>
              <h4 className="subtitle-stories-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi.
              </h4>
              <p className="description-stories-text">
                Id velit senserit constituam eum. Ferri deleniti definitionem
                sea ut, mel ei oratio soluta. At altera virtute iuvaret nam, eam
                maiorum invidunt ut, ne has mollis iisque. Pri at mundi soleat
                deserunt, cum tota appareat in. Ne duo odio lorem commune,
                vocibus oporteat cu eum, ad animal timeam patrioque pri.Delectus
                ponderum atomorum ne has, ut qui unum neglegentur consequuntur,
                erant option argumentum in vel. Est id atomorum periculis
                instructior, fuisset appetere complectitur in usu. An movet
                liberavisse vix. Dicunt tractatos at nam, vis eu movet facete
                option, ne pri dolores contentiones. Nibh lobortis adipiscing ex
                sed, sumo virtute copiosae pri no, te erat feugait propriae mel
                eu prima.
              </p>
            </div>
            <button className="read-more-5">
              <NavLink className="text-decoration" to={'./Explore'}>
                Read More
              </NavLink>
            </button>
          </Container>
        </div>
      </div>
    </Slide>
  );
};

export default SwiperSlider;
