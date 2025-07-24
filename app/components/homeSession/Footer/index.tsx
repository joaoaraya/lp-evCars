import './style.scss';

export default function Footer() {

    const footerLinks = [
        {
            headline: 'company',
            links: [
                {
                    title: 'a',
                    path: '/'
                }, {
                    title: 'b',
                    path: '/'
                }, {
                    title: 'c',
                    path: '/'
                },
                {
                    title: 'd',
                    path: '/'
                },
                {
                    title: 'e',
                    path: '/'
                },
            ]
        }, {
            headline: 'resource',
            links: [
                {
                    title: 'a',
                    path: '/'
                }, {
                    title: 'b',
                    path: '/'
                }, {
                    title: 'c',
                    path: '/'
                },
                {
                    title: 'd',
                    path: '/'
                },
                {
                    title: 'e',
                    path: '/'
                },
            ]
        }
    ]

    return (
        <footer>
            <div id='footer'>
                <div>
                    <div>
                        <div>
                            <img src="" alt="EV Voltedge Logo" />
                        </div>

                        <div>
                            {footerLinks.map((session, index) =>
                                <div key={index}>
                                    <h1>{session.headline}</h1>

                                    {session.links.map((link, index) =>
                                        <a key={index} href={link.path} target='_blank'>
                                            <p>{link.title}</p>
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    <div>
                        <div><p>&copy; 2025</p></div>
                        <div>
                            <a href="/">
                                <p>Term of Service</p>
                            </a>

                            <a href="/">
                                <p>Privacy Policy</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </footer>
    )
}