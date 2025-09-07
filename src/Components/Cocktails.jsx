import cocktailsVideo from '../assets/cocktailsVideo.mp4'

const Cocktails = () => {

    const isMobile = window.innerWidth < 880;

    return (
        <div data-aos="fade-right" id='CocktailsNav' className="flex flex-col justify-center items-center relative h-screen md:h-screen pt-[25%] md:pt-[0%]">
            <h2 className='absolute top-[8%] md:top-[20%] left-0 right-0 w-fit mt-auto mb-auto mr-auto ml-auto text-4xl md:text-5xl text-[#e8cba2]'>Cocktails</h2>
            <div id='background' className='
            flex flex-col md:flex-row justify-start md:justify-center 
            w-[70%] 
            min-h-[90%] max-h-[100%] md:min-h-0 md:h-fit
            mt-auto mb-auto ml-auto mr-auto 
            bg-[#e8cba2] border-[10px] border-[#ab7852] rounded-lg shadow-lg'>
                <video src={cocktailsVideo} autoPlay loop muted playsInline className='
                will-change-transform 
                w-[100%] md:w-[240px] 
                min-h-[140px] max-h-[200px] md:h-[240px] md:max-h-[240px]
                object-cover p-3 border-none bg-transparent'></video>
                <p className='ResponsiveText w-[100%] p-2 bg-[#e8cba2] text-[0.9rem] md:text-xl text-[#885732] text-center md:text-left '>
                    {isMobile ?
                        <>
                            Here, you’ll find all the classic cocktails you know and love – from refreshing Mojitos and Margaritas to smooth Daiquiris and timeless Martinis.
                            Our signature creations, crafted with unique ingredients and a touch of flair, are what truly set us apart.
                            Discover options like the Exotic Trio with vodka and mango, Cyclades Highball with mastiha and gin, or Birthday Cake with rum and strawberry, plus more. Click
                            <a target='_blank' href="https://orca-3000431629.s2o.gr/#classic_cocktails" className='hover:text-[#5A3A22]'> <u><strong>here</strong></u> </a>
                            to view the full cocktail menu.
                        </> :
                        <>
                            At Orca Bar, you’ll find all the classic cocktails you know and love – from refreshing Mojitos and Margaritas to smooth Daiquiris and timeless Martinis.
                            But that’s not all. Our signature creations, crafted with unique ingredients and a touch of flair, are what truly set us apart.
                            Discover vibrant options like the Exotic Trio with vodka and mango, Will You Marry Me? with rosé and peach, Cyclades Highball with mastiha and gin, or Birthday Cake with rum and strawberry, plus more.
                            Classics like Espresso Martini and Negroni never go out of style. Click
                            <a target='_blank' href="https://orca-3000431629.s2o.gr/#classic_cocktails" className='hover:text-[#5A3A22]'> <u><strong>here</strong></u> </a>
                            to view the full cocktail menu.
                        </>

                        // <>
                        //     Here, you’ll find all the classic cocktails you know and love – from refreshing Mojitos and Margaritas to smooth Daiquiris and timeless Martinis.
                        //     Our signature creations, crafted with unique ingredients and a touch of flair, are what truly set us apart.
                        //     Discover vibrant options like the tropical Mai Tai, the exotic Zombie, or the herbal Gin Basil Smash.
                        //     Classics like Espresso Martini and Negroni never go out of style. Click
                        //     <a target='_blank' href="https://orca-3000431629.s2o.gr/#classic_cocktails" className='hover:text-[#5A3A22]'> <u><strong>here</strong></u> </a>
                        //     to view the full cocktail menu.</>
                        // :
                        // <>
                        //     At Orca Bar, you’ll find all the classic cocktails you know and love – from refreshing Mojitos and Margaritas to smooth Daiquiris and timeless Martinis.
                        //     But that’s not all. Our signature creations, crafted with unique ingredients and a touch of flair, are what truly set us apart.
                        //     Discover vibrant options like the tropical Mai Tai, the exotic Zombie, or the herbal Gin Basil Smash. Try the bold Kyoto with absinthe and melon liqueur.
                        //     Classics like Espresso Martini and Negroni never go out of style. Click
                        //     <a target='_blank' href="https://orca-3000431629.s2o.gr/#classic_cocktails" className='hover:text-[#5A3A22]'> <u><strong>here</strong></u> </a>
                        //     to view the full cocktail menu.
                        // </>
                    }


                </p>
            </div>
        </div>
    )
}

export default Cocktails