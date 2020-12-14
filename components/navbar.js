import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const toggleStyles = () => {
    document.querySelector('.navbar-burger').classList.toggle('is-active');
    document.querySelector('.navbar-menu').classList.toggle('is-active');
  };

  const menuList = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About Us' },
    { href: '/resume', name: 'Resume' },
    { href: '/projects', name: 'Projects' },
    { href: '/blogs', name: 'Blogs' },
    { href: '/contact', name: 'Contact' },
  ];

  return (
    <>
      <nav className='navbar navbar-web' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link href='/'>
            <a className='navbar-item is-size-3 logo-web'>
              RAITEKE<span>.</span>
            </a>
          </Link>
          <a
            role='button'
            className='navbar-burger burger'
            aria-label='menu'
            aria-expanded='false'
            data-target='navbarBasic'
            onClick={toggleStyles}
          >
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div id='navbarBasic' className='navbar-menu'>
          <div className='navbar-end'>
            {menuList.map((item, index) => {
              return (
                <Link key={index} href={item.href}>
                  <a key={index} className='navbar-item is-size-5' onClick={toggleStyles}>
                    {item.name}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
