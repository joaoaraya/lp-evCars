import './style.scss';

export default function Energy() {

    return (
        <div id='session-energy'>
            <div id='energy-outside-box'>
                <div id='energy-inside-box'>
                    <div id='energy-header'>
                        <h1>High-tech</h1>
                        <h2>Revolutionizing EV Mobility</h2>
                    </div>

                    <div id='energy-cards'>
                        <div id='energy-card-comments'>
                            <div id='card-header'>
                                <div>
                                    <h1>What People Say</h1>
                                    <img src='/assets/img-energy-logo-1.png' alt='' />
                                </div>

                                <div>
                                    <p>Sold to over 20M</p>
                                </div>
                            </div>

                            <div id='card-footer'>
                                <div id='persons'>
                                    <img src='/assets/img-person-1.png' alt='' />
                                    <img src='/assets/img-person-2.png' alt='' />
                                    <p>3,000+ Thrilled EV Owners</p>
                                </div>

                                <div id='counter'>
                                    <p>$50k+</p>
                                </div>
                            </div>
                        </div>

                        <div id='energy-card-charger'>
                            <div id='link'>
                                <p>evvoltage.com</p>
                            </div>

                            <div id='counter'>
                                <h1>500+</h1>
                                <p>Miles Per Charge</p>
                            </div>
                        </div>

                        <div id='energy-card-logo'>
                            <img src='/assets/img-energy-logo-3.png' alt='' />
                        </div>

                        <div id='energy-card-battery'>
                            <img src='/assets/img-energy-icon-battery.png' alt='' />
                            <p>Empowering Sustainable Mobility Through Innovation</p>
                        </div>

                        <div id='energy-card-mobile'>
                            <img id='logo' src='/assets/img-energy-logo-2.png' alt='' />
                            <img id='text' src='/assets/img-energy-text-logo-1.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}