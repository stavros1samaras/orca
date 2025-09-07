import handWithBombay from '../assets/handWithBombayBlur1.png'


const Hand = () => {
    return (
        <div id='hand' data-aos="fade-up" className="flex flex-col justify-end items-center h-[450px] md:h-screen">
            <img src={handWithBombay} alt="" className='w-[55%] md:w-[25%] h-[100%] md:h-[100%] mx-auto' />
        </div>
    )
}

export default Hand;