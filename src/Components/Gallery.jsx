import GalleryPhoto from '../assets//photos/galleryPhoto.webp';

const Gallery = () => {
    return (
        <div data-aos="fade-right" id='GalleryNav' className="flex flex-col justify-center items-center relative h-screen md:h-screen pt-[25%] md:pt-[0%]">
            <h2 className='absolute top-[8%] md:top-[20%] left-0 right-0 w-fit mt-auto mb-auto mr-auto ml-auto text-4xl md:text-5xl text-[#e8cba2]'>Gallery</h2>
            <div id='background' className='
            flex flex-col md:flex-row justify-start md:justify-center 
            w-[70%] 
            min-h-[90%] max-h-[95%] md:min-h-0 md:h-fit
            mt-auto mb-auto ml-auto mr-auto 
            bg-[#e8cba2] border-[10px] border-[#ab7852] rounded-lg shadow-lg'>
                <img src={GalleryPhoto} className='
                w-[100%] md:w-[240px] 
                min-h-[140px] max-h-[200px] md:h-[240px] md:max-h-[240px] 
                object-cover p-3'></img>
                <p className='ResponsiveText w-[100%] p-2 bg-[#e8cba2] text-[0.9rem] md:text-xl text-[#885732] text-center md:text-left'>
                    Orca Bar means good drinks, good music, and even better company. Whether you’re here for a chill evening or a full-on party night,
                    every moment has its own vibe — sunset cocktails, laughs with friends, or dancing 'til late. We love capturing these memories, the energy, the people, the summer feeling
                    and we share the best of them online. You can find all our photos on the Orca Bar Facebook page by clicking
                    <a target='_blank' href="https://web.facebook.com/orcabar/photos?locale=el_GR" className='hover:text-[#5A3A22]'> <u><strong>here</strong></u></a>.
                </p>
            </div>
        </div>
    )
}

export default Gallery;
