import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import store from 'store2';

import MainLayout from '../../layouts/MainLayout';
import { StorageKey } from '../../consts';
import Api from '../../app/Api';

const { Meta } = Card;

//TODO: Remove Login to Redux amd loading state
const FavoritesPage = () => {
    const [favoriteRepos, setFavoriteRepos] = useState([]);

    const getFavorites = async () => {
        const favoriteIds = store(StorageKey.favoriteRepos);
        if(favoriteIds) {
            const tempRepos = []
            for await (let repoId of favoriteIds) {
                const res = await Api.getRepositoryById(repoId);
                tempRepos.push(res.data)
            }
            setFavoriteRepos(tempRepos);
        }
       
    }


    useEffect(() => {
        getFavorites();
    }, []);


    return (
        <MainLayout>
            <Row gutter={[20, 30]}>
                {
                    favoriteRepos.length > 0 &&
                    favoriteRepos.map((repo, i) => (
                        <Col span={6} key={`fav-item-${repo.id}`}>
                            <Card
                                hoverable
                                cover={<img 
                                        alt={repo.owner.login}
                                        src={repo.owner.avatar_url} 
                                    />
                                }
                            >
                                <Meta 
                                    title={repo.name}
                                    description={<a 
                                        href={repo.html_url} 
                                        target="_blank"
                                        >
                                            {repo.html_url}
                                        </a>
                                    }
                                />
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </MainLayout>
    )
}

export default FavoritesPage