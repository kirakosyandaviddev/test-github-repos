import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Pagination, Space, Table } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import store from 'store2';

import MainLayout from "../../layouts/MainLayout"
import { ResultsActions } from '../../store/results/actions';
import { pageIndexSelector, repositoriesListSelector, repositoriesLoadingSelector, textSearchSelector } from '../../store/results/selectors';
import ScorePreview from '../../components/ScorePreview';
import {StorageKey} from '../../consts';

const { Column } = Table

const ResultsPage = () => {
    const [favoriteIds, setFavoriteIds] = useState(store.get(StorageKey.favoriteRepos, []));
    const dispatch = useDispatch();
    const searchValue = useSelector(textSearchSelector);
    const pageIndex = useSelector(pageIndexSelector);
    const repositories = useSelector(repositoriesListSelector);
    const isLoading = useSelector(repositoriesLoadingSelector);


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
            <Table dataSource={repositories} pagination={false}>
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
                    key="score" 
                    title={'Score'} 
                    render={(repo) => <ScorePreview count={repo.score} /> } 
                />
                <Column 
                    key="link" 
                    title={'Link'} 
                    render={(repo) => (
                        <a href={repo.html_url} target="_blank">
                            {repo.html_url}
                        </a>
                    )} 
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
                    current={pageIndex} 
                    total={1000} 
                    pageSize={10}
                    showSizeChanger={false}  
                    onChange={(page) => dispatch(ResultsActions.setPageIndex(page))}  
                    disabled={isLoading}            
                />
            </Space>
        </MainLayout>
    )
};

export default ResultsPage;