import React from 'react';
import { Col, Layout, Row } from 'antd';

import SearchInput from '../../components/SearchInput';
import Navigation from '../../components/Navigation';
import './MainLayout.scss';


const { Header, Content } = Layout;

 const MainLayout = ({children}) => {
  
    return (
        <Layout>
            <Header className="main-header">
                <Row align="middle">
                    <Col span={12}>
                        <Navigation />
                    </Col>
                    <Col span={12}>
                        <SearchInput />
                    </Col>
                </Row>
            </Header>
            <Content className="main-container">{children}</Content>
        </Layout>
    )
};

export default MainLayout;