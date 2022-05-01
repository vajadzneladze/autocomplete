import React from 'react';
import PropTypes from "prop-types";

const Footer = ({ screen = 'Descktop' }) => (

    <footer>
        Footer : { screen }
    </footer>
)

export default Footer;

Footer.propTypes = {
    screen: PropTypes.oneOf(['Desktop', 'Mobile']).isRequired
};