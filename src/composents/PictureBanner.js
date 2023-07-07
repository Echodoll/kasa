import Picture from '../picture/Image source 1.png'
import PictureBannerText from './PictureBannerText';

function BannerPicture() {
    return (
        <section className='picture__banner'>
            <img src={Picture} alt='Photos de Montagne'></img>
            <PictureBannerText />
        </section>
    );
};

export default BannerPicture;