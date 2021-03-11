import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Pagination, Space, Table } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import store from 'store2';

import MainLayout from "../../layouts/MainLayout"
import { ResultsActions } from '../../store/results/actions';
import { repositoriesListSelector, repositoriesLoadingSelector, textSearchSelector, totalCountSelector } from '../../store/results/selectors';
import {StorageKey} from '../../consts';
import { useNavigation } from '../../hooks';

const { Column } = Table

const ResultsPage = () => {
    const [favoriteIds, setFavoriteIds] = useState(store.get(StorageKey.favoriteRepos, []));
    const dispatch = useDispatch();
    const { routes, navigate } = useNavigation();
    const searchValue = useSelector(textSearchSelector);
    const repositories = useSelector(repositoriesListSelector);
    const isLoading = useSelector(repositoriesLoadingSelector);
    const totalCount = useSelector(totalCountSelector);
    const { page: pageIndex } = useParams();


    useEffect(() => {
        if(searchValue.length > 0) {
            dispatch(ResultsActions.getRepositories(searchValue, pageIndex))
        }
    }, [pageIndex]);

    const handleToggleFavoriteRepo = (repoId) => {
        if(favoriteIds.includes(repoId)) {
            const newIds = [...favoriteIds].filter(id => id !== repoId);
            store.set(StorageKey.favoriteRepos, newIds);
            setFavoriteIds(newIds)
        } else {
            const newIds = [...favoriteIds, repoId];
            store.set(StorageKey.favoriteRepos, newIds);
            setFavoriteIds(newIds)
        }
    }

    return (
        <MainLayout>
            <Table dataSource={repositories} pagination={false} loading={isLoading}>
                <Column 
                    key="fullname" 
                    title={'Fullname'} 
                    render={(repo) => repo.name} 
                />
                <Column 
                    key="author" 
                    title={'Author'} 
                    render={(repo) => repo.owner.login} 
                />
                <Column 
                    key="stargazers" 
                    title={'Stargazers'} 
                    render={(repo) => repo.stargazers_count } 
                />
                <Column 
                    key="details" 
                    title={'Details'} 
                    render={(repo) => <NavLink 
                        to={routes.repository(repo.owner.login, repo.name)}>
                            View
                        </NavLink>} 
                />
                <Column 
                    key="favorite" 
                    title={'Favorite'} 
                    render={(repo) => (
                        <Button onClick={() => handleToggleFavoriteRepo(repo.id)}>
                            {favoriteIds.includes(repo.id)  ? 
                            <HeartFilled /> 
                            : 
                            <HeartOutlined />
                            }
                        </Button>
                    )} 
                />
            </Table>
            <Space>
                <Pagination 
                    current={+pageIndex} 
                    total={totalCount > 1000 ? 1000 : totalCount} 
                    pageSize={10}
                    showSizeChanger={false}  
                    onChange={(page) => navigate(routes.search(page))}  
                    disabled={isLoading}            
                />
            </Space>
        </MainLayout>
    )
};

export default ResultsPage;