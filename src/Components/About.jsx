import orcaSign from '../assets/orcaSign.webp';

import { useRef, useEffect } from "react";

const About = () => {

    const isMobile = window.innerWidth < 880;
// εδω το εκανα για το pixel 5 αλλα δεν χρειαζεται τελικα
//     const aboutResponsiveText = useRef(null);

//     useEffect(() => {
//         const H = window.screen.height;
//         const W = window.innerWidth;

//         if (W >= 385 && W <= 400 &&  H >= 845 && H <= 860) {
//         aboutResponsiveText.current.classList.add('pixel-5');
//     }
// }, []);

return (
    <div id='AboutUsNav' data-aos="fade-right" className="flex flex-col justify-center items-center relative h-screen md:h-screen pt-[25%] md:pt-[0%]">
        <h2 id='Brands' className='absolute top-[8%] md:top-[20%] left-0 right-0 w-fit mt-auto mb-auto mr-auto ml-auto text-4xl md:text-5xl text-[#e8cba2]'>About us</h2>
        <div id='background' className='
            flex flex-col md:flex-row justify-start md:justify-center 
            w-[70%] 
            min-h-[90%] max-h-[100%] md:min-h-0 md:h-fit 
            mt-auto mb-auto ml-auto mr-auto 
            bg-[#e8cba2] border-[10px] border-[#ab7852] rounded-lg shadow-lg'>
            <img src={orcaSign} alt="" className='
                w-[100%] md:w-[240px] 
                min-h-[140px] max-h-[200px] md:h-[240px] max-h-[240px]
                object-cover p-3'></img>
            <p  className='ResponsiveText w-[100%] p-2 bg-[#e8cba2] text-[0.9rem] sm:text-lg md:text-xl text-[#885732] text-center md:text-left'>
                {isMobile ?
                    `Welcome to Orca Bar, your ultimate destination for unforgettable nights in Pefkohori!  
                    Nestled in the heart of this beautiful seaside town, we offer a unique blend of expertly crafted cocktails, delicious food, and a vibrant atmosphere.  
                    Whether you are here to relax by the beach or celebrate with friends, Orca Bar is the perfect place to create lasting memories.  
                    Join us for refreshing drinks, tasty bites, and a welcoming environment that captures the spirit of Pefkohori.`
                    :
                    `Welcome to Orca Bar, your ultimate destination for unforgettable nights in Pefkohori!
                    Nestled in the heart of this beautiful seaside town, we offer a unique blend of expertly crafted cocktails, delicious food, and a vibrant atmosphere.
                    Whether you are here to relax by the beach, enjoy live music, or celebrate with friends, Orca Bar is the perfect place to create lasting memories.
                    Our friendly staff is dedicated to providing exceptional service and making sure every visit feels special.
                    Join us for refreshing drinks, tasty bites, and a welcoming environment that captures the spirit of Pefkohori.
                    Come and experience the true taste of summer at Orca Bar`}
            </p>
        </div>
    </div>
)
};

export default About