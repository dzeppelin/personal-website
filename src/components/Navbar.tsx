import React, { useState } from 'react';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { Popover } from '@headlessui/react';
import '../styles/navbar.css';

const Navbar: FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    // current page from useLocation
    const { pathname } = useLocation();
    const splitLocation = pathname.split('/');

    // makes text-black if the page is active
    const thePath = (path: string): string => {
        return splitLocation[1] === path ? 'text-black' : '';
    };

    const hamburgerHandler = () => {
        setOpen(!open);
    };

    return (
        <nav className="flex flex-row justify-between items-center">
            <span className="logo text-4xl pb-1">
                <Link to="/">talapov</Link>
            </span>
            {/* Desktop navbar menu */}
            <div className="hidden sm:block">
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
            </div>
            {/* Mobile navbar menu */}
            <div
                className="hamburger sm:hidden flex flex-col justify-center items-center hamburger w-7 h-7 cursor-pointer"
                onClick={hamburgerHandler}
            >
                <span className="bg-black w-4 mb-1"></span>
                <span className="bg-black w-4"></span>
            </div>
        </nav>
    );
};

export default Navbar;
