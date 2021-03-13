import React from 'react';
import { Menu } from 'antd';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';


import { useNavigation } from '../../hooks';


const Navigation = () => {
    const { routes } = useNavigation();
    const location = useLocation();

    return (
        <Menu
            defaultSelectedKeys={[routes.home]}
            selectedKeys={[location.pathname]}
            mode="horizontal"
            theme="dark"
        >
            <Menu.Item key={routes.home}>
                <NavLink to={routes.home}>Home</NavLink> 
            </Menu.Item>
            <Menu.Item key={routes.favorites}>
                <NavLink to={routes.favorites}>Favorites</NavLink>
            </Menu.Item>
        </Menu>
    )
};

export default Navigation;