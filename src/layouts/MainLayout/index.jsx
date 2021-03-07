import React from 'react';
import { Layout } from 'antd';

import SearchInput from '../../components/SearchInput';
import './MainLayout.scss';


const { Header, Content } = Layout;

 const MainLayout = ({children}) => {
    return (
        <Layout>
            <Header>
                <SearchInput />
            </Header>
            <Content className="main-container">{children}</Content>
        </Layout>
    )
};

export default MainLayout;