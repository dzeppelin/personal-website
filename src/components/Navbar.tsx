import React from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    return (
        <nav className="flex flex-row justify-between">
            <span className="logo">talapov</span>
            <ul className="flex flex-row px-10 last:pl-10 first:pr-10">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
