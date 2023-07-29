

function BannerPicture({ banner, title, alt, className }) {
    return (
        <section className='picture__banner'>
            <img src={banner} alt={alt} className={className}></img>
            <h1 className="picture__banner--text">{title}</h1>
        </section>
    );
};

export default BannerPicture;