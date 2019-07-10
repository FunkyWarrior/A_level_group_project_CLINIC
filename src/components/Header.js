import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to="/">Main Page</Link>
            <Link to="/doctors">Doctors</Link>
            <Link to="/services">Services</Link>
        </div>
    );
};

export default Header;