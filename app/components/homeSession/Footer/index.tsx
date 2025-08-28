import './style.scss';

export default function Footer() {

    const footerLinks = [
        {
            headline: 'Company',
            links: [
                {
                    title: 'Features',
                    path: '/'
                }, {
                    title: 'Pricing',
                    path: '/'
                }, {
                    title: 'About Us',
                    path: '/'
                },
                {
                    title: 'Contact',
                    path: '/'
                }
            ]
        }, {
            headline: 'Resource',
            links: [
                {
                    title: 'Blog',
                    path: '/'
                }, {
                    title: 'Customer Stories',
                    path: '/'
                }, {
                    title: 'Information',
                    path: '/'
                },
                {
                    title: 'Legal',
                    path: '/'
                },
                {
                    title: 'Payments',
                    path: '/'
                },
            ]
        }, {
            headline: 'Career',
            links: [
                {
                    title: 'Jobs',
                    path: '/'
                }, {
                    title: 'Hiring',
                    path: '/'
                }, {
                    title: 'News',
                    path: '/'
                },
                {
                    title: 'Tips & Tricks',
                    path: '/'
                }
            ]
        }, {
            headline: 'Help',
            links: [
                {
                    title: 'FAQs',
                    path: '/'
                }, {
                    title: 'Help Center',
                    path: '/'
                }, {
                    title: 'Support',
                    path: '/'
                }
            ]
        }
    ]

    return (
        <footer>
            <div id='footer-outside-box'>
                <div id='footer-inside-box'>
                    <div id='main'>
                        <div id='logo'>
                            <img src='/assets/img-logo-white.png' alt='EV Voltedge Logo' />
                        </div>

                        <div id='links'>
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

                    <div id='bottom'>
                        <hr />

                        <div>
                            <div id='copyright'>
                                <p>&copy; 2025 <a href="https://joaoaraya.dev" target="_blank">João Araya</a></p>
                            </div>

                            <div id='links'>
                                <a href="/">
                                    <p>Term of Service</p>
                                </a>

                                <a href="/">
                                    <p>Privacy Policy</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}