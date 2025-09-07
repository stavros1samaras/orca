import orcaLogo from '../assets/orcaLogo.png';

const Navigation = () => {
    return (
        <nav data-aos="fade-right" className='flex justify-center items-center gap-3 lg:gap-8 absolute z-20 top-[2%] right-0 left-0 w-fit h-12 mr-auto ml-auto p-2 rounded-lg backdrop-blur-[100px]'>
            <img src={orcaLogo} alt="" className='w-[31px] h-[30px]' />

            <ul className='flex gap-3 lg:gap-8 items-center mt-[3px]'>
                <li className='navLinks inline-flex text-lg md:text-xl lg:text-2xl font-semibold text-[#CE9468]'><a href="#AboutUsNav" className='leading-none no-underline'>About</a></li>
                <li className='navLinks hidden md:inline-flex lg:inline-flex text-lg md:text-xl lg:text-2xl font-semibold text-[#CE9468]'><a href="#BrandsNav">Brands</a></li>
                <li className='navLinks md:inline-flex lg:inline-flex text-lg md:text-xl lg:text-2xl font-semibold text-[#CE9468]'><a href='#CocktailsNav'>Cocktails</a></li>
                <li className='navLinks hidden md:inline-flex lg:inline-flex text-lg md:text-xl lg:text-2xl font-semibold text-[#CE9468]'><a href='#FoodNav'>Food</a></li>
                <li className='navLinks inline-flex text-lg md:text-xl lg:text-2xl font-semibold text-[#CE9468]'><a target='_blank' href='https://orca-3000431629.s2o.gr/'>Menu</a></li>
                <li className='navLinks hidden md:inline-flex lg:inline-flex text-lg md:text-xl lg:text-2xl font-semibold text-[#CE9468]'><a href='#GalleryNav'>Gallery</a></li>
                <li className='navLinks inline-flex text-lg md:text-xl lg:text-2xl font-semibold text-[#CE9468]'><a href='#ContactNav'>Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navigation