import ShishaVideo from '../assets/ShishaVideo1.mp4'

const Shisha = () => {

    const isMobile = window.innerWidth < 880;

    return (
        <div data-aos="fade-right" id='CocktailsNav' className="flex flex-col justify-center items-center relative h-screen md:h-screen pt-[25%] md:pt-[0%]">
            <h2 className='absolute top-[8%] md:top-[20%] left-0 right-0 w-fit mt-auto mb-auto mr-auto ml-auto text-4xl md:text-5xl text-[#e8cba2]'>Shisha</h2>
            <div id='background' className='
            flex flex-col md:flex-row justify-start md:justify-center 
            w-[70%] 
            min-h-[90%] max-h-[100%] md:min-h-0 md:h-fit
            mt-auto mb-auto ml-auto mr-auto 
            bg-[#e8cba2] border-[10px] border-[#ab7852] rounded-lg shadow-lg'>
                <video src={ShishaVideo} autoPlay loop muted playsInline loading="lazy" className='
                w-[100%] md:w-[290px] 
                min-h-[140px] max-h-[200px] md:h-[240px] md:max-h-[240px]
                object-cover p-3'></video>
                <p className='ResponsiveText w-[100%] p-2 bg-[#e8cba2] text-[0.9rem] md:text-xl text-[#885732] text-center md:text-left'>
                    {isMobile ? 
                    `We offer a laid-back shisha experience that's perfect for relaxing with friends. Choose from a variety of yellow or black
                    flavored tobaccos whether you’re into sweet, fruity, or more intense aromas, there’s something for every taste.
                    For those who want to take it a step further, you can enjoy your shisha served in a fresh pineapple bowl, adding a
                    tropical touch to your evening. Pair it with your favorite drink and enjoy the atmosphere.`
                    :
                    `We offer a laid-back shisha experience that's perfect for relaxing with friends. Choose from a variety of yellow or black
                    flavored tobaccos whether you’re into sweet, fruity, or more intense aromas, there’s something for every taste.
                    For those who want to take it a step further, you can enjoy your shisha served in a fresh pineapple bowl, adding a
                    tropical touch to your evening. Pair it with your favorite drink, sit back, and enjoy the atmosphere — no rush, just good vibes.`                    
                }
                    
                </p>
            </div>
        </div>
    )
}

export default Shisha;