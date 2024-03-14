import Landingpage from './components/landing/Landing-page';
import Marquee from './components/marquee/Marquee';
import Navbar from './components/navbar/Navbar';
import Strategy from './components/strategy/Strategy';

function App() {
    return (
        <>
            <main className='w-full h-screen'>
                <Navbar />
                <Landingpage />
                <Marquee />
                <Strategy />
            </main>
        </>
    );
}

export default App;
