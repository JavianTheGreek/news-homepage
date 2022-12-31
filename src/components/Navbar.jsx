import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Logo from '../assets/images/logo.svg'


function Navbar() {
  const [active, setActive] = useState(true);
  
  // 
  const handleMenu = () => {
    setActive(!active);
  }

  // 
  const listTitles = [
    {
      'name': 'Home',
      'link': '/',
      'id': 1
    },
    {
      'name': 'New',
      'link': '#new',
      'id': 2
    },
    {
      'name': 'Popular',
      'link': '#popular',
      'id': 3
    },
    {
      'name': 'Trending',
      'link': '#trending',
      'id': 4
    },
    {
      'name': 'Categories',
      'link': '#categories',
      'id': 5
    }
  ]

  return (
    // text-white flex justify-between items-center max-w-[1240px] mx-auto px-5 h-24
    <div className='flex justify-between items-center text-dark-grayish-blue max-w-[960px] mx-auto h-40 bg-off-white'>
      <a href="/"><img className='w-15 md:w-10 mx-2' src={Logo} alt="" /></a>
      
      <ul className='md:flex hidden'>
        {listTitles.map((list) => {
          // 
          let { name, link } = list;
          
          return (
            <li><a href={link} className='p-3 font-medium hover:text-soft-red duration-300 ease-in-out'>{name}</a></li>
          )
        })}
      </ul> 
    
      {/*  */}
      <div onClick={handleMenu} className='block md:hidden z-[2] px-5 right-0 top-25'>
                {!active ? <AiOutlineClose  className='fixed right-6 top-16' size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      
      {/*  */}
      <div className={!active ? 'fixed right-0 top-0 w-[65%] shadow-xl bg-off-white h-full ease-in duration-500' : 'fixed right-[-100%]'}>
        <ul className='px-4 mt-[150px] font-bold text-xl'>
          {/*  */}
          {listTitles.map((list) => {
            let { name, link } = list;
          
            return (
            <li className='p-3'><a href={link}  className='hover:text-soft-orange duration-300 ease-in-out'>{name}</a></li>
            )})}
        </ul>
      </div>
    </div>
  )
}

export default Navbar