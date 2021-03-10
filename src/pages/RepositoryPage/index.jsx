import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';

import './RepositoryPage.scss'
import MainLayout from '../../layouts/MainLayout';
import { RepositoryActions } from '../../store/repository/actions';
import { repositoryDetailsSelector } from '../../store/repository/selectors';
import { useNavigation } from '../../hooks';

const RepositoryPage = () => {
    const { login, name } = useParams();
    const dispatch = useDispatch();
    const repoDetails = useSelector(repositoryDetailsSelector);
    const { back } = useNavigation();

    useEffect(() => {
        dispatch(RepositoryActions.getRepository(login, name))
    }, []);

    return (
        <MainLayout>
            {
                repoDetails ?
                    <section>
                        <Button onClick={() => back()}>
                            <LeftOutlined />
                            Back
                        </Button>
                        <div className="page-container">
                            <h2 className="repo-title">{repoDetails.name}</h2>
                            <a href={repoDetails.html_url} target="_blank">{repoDetails.html_url}</a>
                        </div>
                    </section>
                :
                    'Loading...'
            }
           
        </MainLayout>
    )
};

export default RepositoryPage;