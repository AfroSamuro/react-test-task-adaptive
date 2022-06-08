import './AdaptiveMain.css';
import React from 'react';
import classNames from 'classnames';

export default function AdaptiveMain(props) {
    const { tagname = 'div', children, className } = props;
    return React.createElement(tagname, { className: classNames('adaptive__main', className) }, children);
}