import './style.scss';

export default function Chargers() {

    const chargerOptions = [
        {
            imgPath: '/assets/img-charger-1.png',
            title: 'Home Smart Charger',
            description: 'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.',
            oldPrice: '999',
            newPrice: '599'
        }, {
            imgPath: '/assets/img-charger-2.png',
            title: 'Portable EV Charger',
            description: 'A lightweight, travel-friendly Level 1 charger designed for convenience. Plugs into standard wall outlets.',
            oldPrice: '599',
            newPrice: '299'
        }, {
            imgPath: '/assets/img-charger-3.png',
            title: 'Ultra-Fast Public Charging Station',
            description: 'A high-power Level 3 DC fast charger for public and commercial locations. Equipped with dual ports.',
            oldPrice: '20,999',
            newPrice: '12,999'
        }
    ]

    return (
        <div id='session-chargers'>
            <div id='chargers-header'>
                <h1>Versatile Power</h1>
                <h2>Discover Our Multi-functional chargers</h2>
            </div>

            <div id='chargers-cards'>
                {chargerOptions.map((charger, index) =>
                    <div key={index} className='chargers-card'>
                        <img src={charger.imgPath} alt='Card image' />
                        <h1>{charger.title}</h1>
                        <p>{charger.description}</p>

                        <div className='charger-price'>
                            <p className='old-price'>$<s>{charger.oldPrice}</s></p>
                            <p className='new-price'>${charger.newPrice}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}