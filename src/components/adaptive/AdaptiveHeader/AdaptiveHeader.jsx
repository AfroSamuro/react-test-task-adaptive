import './AdaptiveHeader.css';
import React from 'react';
import classNames from 'classnames';

export default function AdaptiveHeader(props) {
    const { tagname = 'div', children, className } = props;
    return React.createElement(tagname, { className: classNames('adaptive__header', className) }, children);
}