

function BannerPicture({ banner, title, alt }) {
    return (
        <section className='picture__banner'>
            <img src={banner} alt={alt}></img>
            <h1 className="picture__banner--text">{title}</h1>
        </section>
    );
};

export default BannerPicture;