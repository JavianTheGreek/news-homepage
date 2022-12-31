import React from 'react'
import DesktopImage from '../assets/images/image-web-3-desktop.jpg'
import MobileImage from '../assets/images/image-web-3-mobile.jpg'
// Custom hook used to make the breakpoints possible to see images..
import useMediaQuery from '../hooks/useMediaQuery';

function Hero() {

    // These variables will target the viewport for each breakpoint.
    const isDesktop = useMediaQuery('(max-width: 1024px)');
    const isMobile = useMediaQuery('(min-width: 768px)');

    return (
        // THis hero section, grid is used to follow the layout format.
        <div className='w-full max-w-[1180px] mx-auto grid md:grid-cols-6 px-2 gap-[1.5rem]'>
            
            {/* Left side of the hero template */}
            
            <div className='md:col-span-4'>
                <HandleMobileImage isMobile={isMobile} />
                <HandleDesktopImage isDesktop={isDesktop} />
                {/* <img src={MobileImage} alt="" className='md:hidden' />; */}
                {/* <img src={DesktopImage} alt="" className='' /> */}
                <div className="flex md:mt-8 flex-col md:flex-row">
                    <div className="">
                        <h1 className='text-black font-extrabold text-5xl w-atuo'>The Bright Future of Web 3.0?</h1>
                    </div>
                    <div className=" md:px-2  md:ml-10">
                        <p className='text-dark-grayish-blue text-xl md:text-sm my-4'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className='md:w-[250] bg-soft-red text-off-white px-6 py-3 mt-3 font-bold text-[20px] hover:bg-very-dark-blue active:bg-opacity-95 duration-300 ease-in-out'>READ MORE</button>
                    </div>
                </div>
            </div>

            {/* Right side of the hero template */}

            <div className="mx-auto w-full md:ml-6" id='new'>
                <div className='bg-very-dark-blue p-4 my-[50px] md:my-0 md:w-[300px] h-auto'>
                    {/* Heading for the right Container */}
                    <h2 className='text-4xl font-bold text-soft-orange'>New</h2>
                    
                    <div className='border-b-dark-grayish-blue border'>
                        <Container title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" />
                    </div>
                    <div className='border-b-dark-grayish-blue border'>
                        <Container title="The Downsides of AI Artisty" description="What are the possible adverse effects of on-demand AI image generation" />
                    </div>
                    
                    <Container className="border border-none" title="IS VC Funding Drying Up?" description="Will hydrogen-fueled cars ever catch up to EVs?" />
                    
                </div>
            </div>

        </div>
    )

}

// 
const HandleMobileImage = ( {isMobile} ) => (
    <div className="">
        <img src={MobileImage} alt="/" className='md:hidden' />
    </div>
);

// 
const HandleDesktopImage = ( {isDesktop} ) => (
    <div className="">
        <img src={DesktopImage} alt="/" className='max-md:hidden' />
    </div>
);

// 
const Container = ({title, description}) => (
    <div className="md:mt-6">
        <div className="">
            <div className='text-off-white my-2'>
                <h3 className='font-bold mt-6 mb-5 text-2xl md:text-lg hover:text-soft-orange duration-300 ease-in-out cursor-pointer'>{title}</h3>
                <p className='text-thin text-lg md:text-xs text-grayish-blue pr-2 mb-6'>{description}</p>
            </div>
        </div>
    </div>
)

export default Hero