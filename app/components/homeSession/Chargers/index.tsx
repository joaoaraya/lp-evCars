import './style.scss';

export default function Chargers() {

    const chargerOptions = [
        {
            imgPath: '/',
            title: 'Home Smart Charger',
            description: 'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.',
            oldPrice: '999',
            newPrice: '599'
        }, {
            imgPath: '/',
            title: 'Portable EV Charger',
            description: 'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.',
            oldPrice: '599',
            newPrice: '299'
        }, {
            imgPath: '/',
            title: 'Ultra-Fast Public Charging Station',
            description: 'A high-power Level 3 DC fast charger for public and commercial locations. Equipped with dual ports.',
            oldPrice: '20,999',
            newPrice: '12,999'
        }
    ]

    return (
        <div id='session-chargers'>
            <div>
                <h1>Versatile Power</h1>
                <h2>Discover Our Multi-functional chargers</h2>
            </div>

            <div id='chargers-cards'>
                {chargerOptions.map((charger, index) =>
                    <div key={index}>
                        <img src={charger.imgPath} alt="Card image" />
                        <h1>{charger.title}</h1>
                        <p>{charger.description}</p>

                        <div className='charger-price'>
                            <p>${charger.oldPrice}</p>
                            <p>${charger.newPrice}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}