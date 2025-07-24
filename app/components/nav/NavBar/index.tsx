import './style.scss';

export default function NavBar() {

    const navbarLinks = [
        {
            title: 'Home',
            path: '/'
        }, {
            title: 'Products',
            path: '/'
        }, {
            title: 'Features',
            path: '/'
        }, {
            title: 'Gear Shop',
            path: '/'
        }
    ]

    return (
        <nav>
            <div id='navbar'>
                <div>
                    <a href="">
                        <img src="" alt="" />
                    </a>
                </div>

                <div id='links'>
                    {navbarLinks.map((link, index) =>
                        <a href={link.path} key={index} className='link'>
                            <p>{link.title}</p>
                        </a>
                    )}
                </div>

                <div id='cta'>
                    <button>
                        <p>Order Now</p>
                        <img src="" alt="l" />
                    </button>
                </div>
            </div>
        </nav>
    )
}