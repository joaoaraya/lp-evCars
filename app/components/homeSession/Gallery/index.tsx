import './style.scss';

export default function Gallery() {
    const imagesGallery = [
        {
            path: 'img-galery-inside-1.png',
            describle: 'inside'
        }, {
            path: 'img-galery-inside-2.png',
            describle: 'inside'
        }, {
            path: 'img-galery-inside-3.png',
            describle: 'inside'
        }
    ]

    return (
        <div id='session-gallery'>
            <div id='gallery-header'>
                <h1>Overview</h1>
                <h2>Future-Ready Comfort</h2>
            </div>

            <div id='gallery-media'>
                <div id='media-scroller'>
                    {imagesGallery.map((img, index) =>
                        <img key={index} src={'/assets/' + img.path} alt={img.describle} />
                    )}
                    {/*EFEITO INFINITO*/}
                    {imagesGallery.map((img, index) =>
                        <img key={index} src={'/assets/' + img.path} alt={img.describle} />
                    )}
                </div>
            </div>
        </div>
    )
}