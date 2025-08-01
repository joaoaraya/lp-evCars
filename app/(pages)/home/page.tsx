import './style.scss';
import NavBar from '@/app/components/nav/NavBar';
import Header from '@/app/components/homeSession/Header';
import Chargers from '@/app/components/homeSession/Chargers';
import Story from '@/app/components/homeSession/Story';
import Energy from '@/app/components/homeSession/Energy';
import Gallery from '@/app/components/homeSession/Gallery';
import Contact from '@/app/components/homeSession/Contact';
import Footer from '@/app/components/homeSession/Footer';

export default function Home() {

    return (
        <div id='home'>
            <NavBar />
            <Header />

            <Chargers />
            {/* <Story /> */}
            <Energy />
            {/* <Gallery /> */}
            <Contact />

            <Footer />
        </div>
    )
}