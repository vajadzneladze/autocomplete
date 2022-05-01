import React from 'react';
import PropTypes from "prop-types";

const Header = ({ screen  }) => (
    
    <header>
        <h1>  Header : { screen } </h1>
    </header>
)

export default Header;

Header.propTypes = {
    screen: PropTypes.oneOf(['Desktop', 'Mobile']).isRequired
};