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
            <div id='navbar-outside-box'>
                <div id='navbar-inside-box'>
                    <div id='logo'>
                        <img src='/assets/img-logo-black.png' alt='logo' />
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
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.86333 0.151176H14.3488V12.6366H12.9481V2.54634L1.64564 13.8488L0.651123 12.8549L11.9542 1.55182H1.86333V0.151176Z" fill="black" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}