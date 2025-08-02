import './style.scss';

export default function Story() {

    return (
        <div id='session-story'>
            <div id='story-outside-box'>
                <div id='story-inside-box'>
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
                        <div id='video'>
                            <div>
                                <a href='/'>
                                    <img src='/assets/img-power-video-thumb.png' alt='Video' />
                                </a>
                            </div>

                            <div>
                                <h1>Join a Connected Charging Network</h1>
                                <p>
                                    Be part of a growing network of EV drivers who share a
                                    passion for sustainability and innovation.
                                </p>
                            </div>
                        </div>

                        <div id='link'>
                            <div id='card'>
                                <div id='card-header'>
                                    <h1>EVs for Everyone</h1>
                                    <p>
                                        From eco-conscious drivers to performance enthusiasts, we believe
                                        electric vehicles should be accessible and exciting for all.
                                    </p>
                                </div>

                                <div id='card-cta'>
                                    <button>
                                        <p>Our Story</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}