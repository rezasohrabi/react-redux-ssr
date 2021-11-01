import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <main>
      <header className='header'>
        <Link to='/photos'>تصاویر</Link>
        <Link to='/users'>کاربران</Link>
        <Link to='/'>خانه</Link>
      </header>
      <section className='main-content'>{children}</section>
    </main>
  );
};

export default MainLayout;
