import React from 'react';

import MainLayout from "../../layouts/MainLayout";
import './HomePage.scss'

const HomePage = () => {
    return (
        <MainLayout>
            <div className="home-container">
                <h1>Here You Can Find Github Repositories</h1>
            </div>
        </MainLayout>
    )
};

export default HomePage;