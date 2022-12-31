import retro from '../assets/images/image-retro-pcs.jpg'
import top from '../assets/images/image-top-laptops.jpg'
import Gaming from '../assets/images/image-gaming-growth.jpg'

const Featured = () => { 
    let featuredList = [
        {
            'img': retro,
            'heading': '01',
            'title': 'Reviving Retro PCs',
            'description': 'What happens when old PCs are given modern upgrades?',
            'id': 1
        },
        {
            'img': top,
            'heading': '02',
            'title': 'Top 10 Laptops of 2022',
            'description': 'Our best picks for various needs and budgets.',
            'id': 2
        },
        {
            'img': Gaming,
            'heading': '03',
            'title': 'The Growth of Gaming',
            'description': 'How the pandemic has sparked fresh opportunities.',
            'id': 3
        },
    ]

    return ( 
    <div className='w-full max-w-[1180px] mx-auto grid md:grid-cols-3 px-2 gap-[1.5rem] p-14'>
        {featuredList.map((e) => {
            let { img, heading, title, description } = e

            return (
            <div className=''>
                <div className="flex">
                    <img src={img} alt={title} className='w-[130px] md:w-[110px] object-contain' />
                    <div className='ml-4 md:ml-5'>
                        <h2 className='text-grayish-blue text-3xl md:text-4xl font-bold'>{heading}</h2>
                        <a href='/' className='py-6 text-very-dark-blue text-[18px] md:text-xl font-extrabold hover:text-soft-red duration-300 ease-in-out '>{title}</a>
                        <p className='text-sm md:text-xs text-dark-grayish-blue'>{description}</p>
                    </div>
                </div>
           </div>
           )
        })}
    </div>
     );
}
 
export default Featured;
