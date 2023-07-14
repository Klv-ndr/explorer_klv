import './Hiking.scss';
import HikingImg from 'assets/story4.jpg';
type Props = {};
const Hiking = (props: Props) => {
  return (
    <>
      <div className="hiking">
        <img className="hiking-img" src={HikingImg} alt="" />
        <div className="hiking-text">
          <h3 className="title-hiking-text">
            <span className="data-color"> 12 Oct</span>Hiking
          </h3>
          <p className="description-hiking-text">
            Lorem ipsum dolor sit amet, proin gravida nibh vel velit auctor
            aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
            consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit
            amet nibh vulputate cursus a sit amet maorbi accumsan ipsum velit.
            Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
            vitae erat consequat auctor eu in elit. Classaptent taciti sociosqu
            ad litora torquent per conubia nostra, per inceptos himenaeos.
            Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum
            sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
            condimentum fermentum nunc. Etiam pharetra.
          </p>
          <h4 className="subtitle-hiking-text">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi.
          </h4>
          <p className="description-hiking-text">
            Id velit senserit constituam eum. Ferri deleniti definitionem sea
            ut, mel ei oratio soluta. At altera virtute iuvaret nam, eam maiorum
            invidunt ut, ne has mollis iisque. Pri at mundi soleat deserunt, cum
            tota appareat in. Ne duo odio lorem commune, vocibus oporteat cu
            eum, ad animal timeam patrioque pri.Delectus ponderum atomorum ne
            has, ut qui unum neglegentur consequuntur, erant option argumentum
            in vel. Est id atomorum periculis instructior, fuisset appetere
            complectitur in usu. An movet liberavisse vix. Dicunt tractatos at
            nam, vis eu movet facete option, ne pri dolores contentiones. Nibh
            lobortis adipiscing ex sed, sumo virtute copiosae pri no, te erat
            feugait propriae mel eu prima.
          </p>
        </div>
      </div>
    </>
  );
};
export default Hiking;
