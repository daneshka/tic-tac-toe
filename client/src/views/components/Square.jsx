import React from 'react';
import PropTypes from 'prop-types';

const svgStyle = {
    display: "block"
};


const Square = ({ classes, player }) => {
    switch (player) {
        case 1:
            return (<svg xmlns="http://www.w3.org/2000/svg" style={svgStyle}><rect x="20" y="20" width="60" height="60" rx="0" ry="15" /></svg>)
        case 2:
            return (<img src="../img/face.png" />)
        default:
            return '';
    }

};

const { object, number } = PropTypes;

Square.propTypes = {
  player: number.isRequired
};

export default Square;