import './style.scss';

export default function Header() {

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

    return (
        <header>
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
        </header>
    )
}