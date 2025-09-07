import BrandsFoto from '../assets/BrandsFoto.webp'

const Brands = () => {

    const isMobile = window.innerWidth < 880;

    return (
        <div data-aos="fade-right" id='BrandsNav' className="flex flex-col justify-center items-center relative h-screen md:h-screen pt-[25%] md:pt-[0%]">
            <h2 id='Brands' className='absolute top-[8%] md:top-[20%] left-0 right-0 w-fit mt-auto mb-auto mr-auto ml-auto text-4xl md:text-5xl text-[#e8cba2]'>Brands</h2>
            <div id='background' className='
            flex flex-col md:flex-row justify-start md:justify-center 
            w-[70%] 
            min-h-[90%] max-h-[100%] md:min-h-0 md:h-fit 
            mt-auto mb-auto ml-auto mr-auto 
            bg-[#e8cba2] border-[10px] border-[#ab7852] rounded-lg shadow-lg'>
                <img src={BrandsFoto} className='
                w-[100%] md:w-[240px] 
                min-h-[140px] max-h-[200px] md:h-[240px] max-h-[240px]
                object-cover p-3'></img>
                <p className='ResponsiveText w-[100%] p-2 bg-[#e8cba2] text-[0.9rem] md:text-xl text-[#885732] text-center md:text-left'>
                    {isMobile ?
                        `At Orca Bar in Pefkochori, you’ll find premium spirits like Bombay, Hendrick’s, Beluga, Grey Goose, Stolichnaya, Bacardi, Captain Morgan, Zacapa, Cazadores, Patrón, Azul.
                    Whisky fans can enjoy Chivas Regal, Johnnie Walker Red, Black & Blue Label, Haig, Dewar’s, Four Roses, Tullamore Dew, and Jack Daniel’s.
                    Top it off with Luc Belaire, Moët & Chandon and Dom Pérignon.
                    Enjoy your drink by the sea — always responsibly.`
                        :
                        `At Orca Bar in Pefkochori, you’ll find premium spirits like Bombay, Hendrick’s, Blue Beetle, Beluga, Grey Goose, Stolichnaya, Bacardi, Captain Morgan, Malibu, Zacapa, Cazadores, Jose Cuervo, Patrón, Azul.
                    Whisky fans can enjoy Chivas Regal, Johnnie Walker Red, Black & Blue Label, Haig, Dewar’s, Four Roses, Tullamore Dew, Jack Daniel’s, Cutty Sark, and Southern Comfort.
                    Wines include Paranga, Ktima Alpha, Treis Magisses, Neraides, and Luc Belaire.
                    Top it off with Moët & Chandon and Dom Pérignon.
                    Enjoy your drink by the sea — always responsibly.`}
                </p>
            </div>
        </div>
    )
}

export default Brands