import React from 'react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar: FC = () => {
    // current page from useLocation
    const { pathname } = useLocation();
    const splitLocation = pathname.split('/');

    // makes text-black if the page is active
    const thePath = (path: string): string => {
        return splitLocation[1] === path ? 'text-black' : '';
    };

    return (
        <nav className="flex flex-row justify-between">
            <span className="logo text-4xl pb-2">
                <Link to="/">talapov</Link>
            </span>
            <ul className="flex flex-row items-center text-gray-500">
                <li>
                    <Link to="/" className={thePath('')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" className={thePath('portfolio')}>
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/blog" className={thePath('blog')}>
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/contacts" className={thePath('contacts')}>
                        Contacts
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
