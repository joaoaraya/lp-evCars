import './style.scss';
import NavBar from '@/app/components/nav/NavBar';
import Header from '@/app/components/homeSession/Header';
import Chargers from '@/app/components/homeSession/Chargers';
import Story from '@/app/components/homeSession/Story';
import Energy from '@/app/components/homeSession/Energy';
import Gallery from '@/app/components/homeSession/Gallery';
import Footer from '@/app/components/homeSession/Footer';
import Contact from '@/app/components/homeSession/Contact';

export default function Home() {

    return (
        <div className='home'>
            <header>
                <NavBar />
                <Header />
            </header>

            <main>
                <Chargers />
                <Story />
                <Energy />
                <Gallery />
                <Contact />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}