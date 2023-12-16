import React from 'react';

const Header = React.memo(() => {
    return (
        <header className="header">
            <div className='header__background-image'>
            </div>
            <h1 className='header__page-title'>Веб-продукты и&nbsp;как&nbsp;они&nbsp;устроены</h1>
        </header>
    );
});

export default Header;