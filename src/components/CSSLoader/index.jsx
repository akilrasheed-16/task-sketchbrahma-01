import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _assign from 'lodash/assign';

import './style.scss';

const CSSLoader = ({ tailColor, pathColor, className, styles }) => {
    const inlineStyles = {
        borderColor: tailColor,
        borderTopColor: pathColor
    };
    const classes = classnames('k-loader', className);

    return <div className={classes} style={_assign(inlineStyles, styles)} />;
};

CSSLoader.propTypes = {
    tailColor: PropTypes.string,
    pathColor: PropTypes.string,
    styles: PropTypes.object
};

CSSLoader.defaultProps = {
    tailColor: '#000',
    pathColor: '#FFF',
    styles: {}
};

export default CSSLoader;