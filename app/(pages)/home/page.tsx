import { describe } from 'node:test';
import './style.scss';
import { title } from 'process';

export default function Home() {

    const navbarLinks = [
        {
            title: 'home',
            path: '/'
        }, {
            title: 'products',
            path: '/'
        }, {
            title: 'features',
            path: '/'
        }, {
            title: 'gear shop',
            path: '/'
        }
    ]

    const counters = [
        {
            title: '14M',
            description: 'Battery Cost Reduction'
        }, {
            title: '89%',
            description: 'Battery Cost Reduction'
        }, {
            title: '1.2M',
            description: 'Charging infrastructure Expansion'
        }
    ]

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
        <div className='home'>

            <div id='navbar'>
                <div>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>

                <div>
                    {navbarLinks.map((link, index) =>
                        <a href={link.path} key={index}>
                            <p>{link.title}</p>
                        </a>
                    )}
                </div>

                <div>
                    <button>
                        <p>Order Now</p>
                        <img src="" alt="" />
                    </button>
                </div>
            </div>

            <div id='header-banner'>
                <img src="" alt="Smooth EV Cars" />
                <img src="" alt="Car" />
            </div>

            <div id='header-counters'>
                {counters.map((counter, index) =>
                    <div key={index}>
                        <p className='counter-title'>{counter.title}</p>
                        <p className='counter-description'>{counter.description}</p>
                    </div>
                )}
            </div>

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

            <div id='session-story'>
                <div id='story-header'>
                    <h1>Our Story</h1>
                    <h2>Powering a Greener Future, One Drive at a Time</h2>
                    <p>
                        We are here to support your journey towards sustainable driving.
                        Explore cutting-edge EV technology, a growing charging network,
                        and exclusive resources designed to enhance your electric vehicle
                        experience.
                    </p>
                </div>

                <div id='story-media'>
                    <div>
                        <div>
                            <img src="" alt="Background video" />
                            <img src="" alt="Button play" />
                        </div>
                        <div>
                            <h1>Join a Connected Charging Network</h1>
                            <p>
                                Be part of a growing network of EV drivers who share a
                                passion for sustainability and innovation.
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src="" alt="background card" />

                        <div>
                            <h1>EVs for Everyone</h1>
                            <p>
                                From eco-conscious drivers to performance enthusiasts, we believe
                                electric vehicles should be accessible and exciting for all.
                            </p>
                            <button>
                                <p>Our Story</p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}