import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.js'

const navigationItems = (props) => {
    return (
        <ul className={ classes.NavigationItems }>
           <NavigationItem link="/">Burger Builder</NavigationItem>
           <NavigationItem link="/orders">Orders</NavigationItem>
        </ul>
    )
};

export default navigationItems;