import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';

import menuList from 'utils/constants/menu';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <div className='relative'>
      <nav className='flex justify-between items-center'>
        <Link href='/'>
          <a className='text-4xl font-bold'>
            KEERATI<span className='text-sky-500'>.</span>
          </a>
        </Link>
        <div className='hidden md:block'>
          {menuList.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <a key={index} className='p-2 hover:text-sky-500'>
                  {item.name}
                </a>
              </Link>
            );
          })}
        </div>
        <div className='sm:block md:hidden'>
          <IconContext.Provider value={{ size: '2em' }}>
            {isOpen ? (
              <RiCloseFill onClick={handleClick} />
            ) : (
              <GiHamburgerMenu onClick={handleClick} />
            )}
          </IconContext.Provider>
        </div>
      </nav>
      {isOpen && (
        <div className='p-4 absolute bg-white/90 w-full z-50'>
          {menuList.map((item, index) => {
            return (
              <div
                key={index}
                className='hover:text-sky-500'
                onClick={() => handleNavigation(item.href)}
              >
                <p className='p-2 my-2 rounded-sm bg-gray-200'>{item.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
