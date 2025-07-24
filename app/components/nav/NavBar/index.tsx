import './style.scss';

export default function NavBar() {

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

    return (
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
    )
}