import mainVideo from '../assets/mainVideo.mp4';
import Navigation from './Navigation';
import PhoneMainVideo from '../assets/PhoneMainVideo480p.mp4';


const Main = () => {

    const isMobile = window.innerWidth < 880;


    return (
        <div data-aos="fade-right" id='cont' className='relative h-screen'>
            <Navigation />
            {isMobile ?
                <video src={PhoneMainVideo} autoPlay loop muted playsInline className='w-screen h-screen object-cover z-10'></video>
                :
                <video src={PhoneMainVideo} autoPlay loop muted playsInline className='w-screen h-screen object-cover z-10'></video>
            }
        </div>
    )
}

export default Main