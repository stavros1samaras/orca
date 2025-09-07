import FoodVideo from '../assets/FoodVideo.mp4'

const Food = () => {

    const isMobile = window.innerWidth < 880;

    return (
        <div id='FoodNav' data-aos="fade-right" className="flex flex-col justify-center items-center relative h-screen md:h-screen pt-[25%] md:pt-[0%]">
            <h2 className='absolute top-[8%] md:top-[20%] left-0 right-0 w-fit mt-auto mb-auto mr-auto ml-auto text-4xl md:text-5xl text-[#e8cba2]'>Food</h2>
            <div id='background' className='
            flex flex-col md:flex-row justify-start md:justify-center 
            w-[70%] 
            min-h-[90%] max-h-[100%] md:min-h-0 md:h-fit 
            mt-auto mb-auto ml-auto mr-auto 
            bg-[#e8cba2] border-[10px] border-[#ab7852] rounded-lg shadow-lg'>
                <video src={FoodVideo} autoPlay loop muted playsInline className='
                w-[100%] md:w-[240px] 
                min-h-[140px] max-h-[200px] md:h-[240px] md:max-h-[240px]
                object-cover p-3 will-change-scroll'></video>
                <p className='ResponsiveText w-[100%] p-2 bg-[#e8cba2] text-[0.9rem] md:text-xl text-[#885732] text-center md:text-left'>
                    {isMobile ? <>
                        If you’re looking for a cozy spot to relax and enjoy your evening, Orca Bar is the perfect choice.
                        Taste our mini bruschetta trilogy, tortillas, club sandwiches, crispy breaded chicken, and fresh sushi.
                        Enjoy pizzas like Margherita, chicken & corn BBQ, and prosciutto with rocket and truffle oil.
                        For sharing, try our generous cold cuts and cheese platters, available for two or four people.
                        Click
                        <a target='_blank' href="https://orca-3000431629.s2o.gr/#fagito" className='hover:text-[#5A3A22]'> <u><strong>here</strong></u> </a>
                        to view our full food menu.
                    </>
                        :
                        <>
                            If you’re looking for a cozy spot to relax and enjoy your evening, Orca Bar is the perfect choice.
                            Taste our delicious mini bruschetta trilogy, fresh tortillas, hearty club sandwiches, crispy breaded chicken, and fresh sushi.
                            Enjoy pizzas like Margherita, chicken & corn BBQ, and prosciutto with rocket and truffle oil.
                            For sharing, try our generous cold cuts and cheese platters, available for two or four people.
                            Finish with a refreshing fruit salad to complete your meal.
                            Come join us at Orca Bar, where great food, good drinks, and unforgettable summer memories await you.Click
                            <a target='_blank' href="https://orca-3000431629.s2o.gr/#fagito" className='hover:text-[#5A3A22]'> <u><strong>here</strong></u> </a>
                            to view our full food menu.
                        </>
                    }

                </p>
            </div>
        </div>
    )
}

export default Food