import Picture from '../picture/Image source 1.png'


function BannerPicture() {
    return (
        <section className='picture__banner'>
            <img src={Picture} alt='Photos de Montagne'></img>
            <h1 className="picture__banner--text">Chez vous, partout et ailleurs</h1>
        </section>
    );
};

export default BannerPicture;