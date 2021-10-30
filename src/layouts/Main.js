import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <main>
      <header className='header'>
        <a href='#'>تصاوير</a>
        <a href='#'>ليست يادداشت ها</a>
      </header>
      <section className='main-content'>{children}</section>
    </main>
  );
};

export default MainLayout;
