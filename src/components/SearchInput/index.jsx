import React from 'react';
import { Button, Input, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { HomeFilled } from '@ant-design/icons';

import { pageIndexSelector, textSearchSelector } from '../../store/results/selectors';
import { ResultsActions } from '../../store/results/actions';
import { useNavigation } from '../../hooks';
import './SearchInput.scss'

const { Search } = Input;

const SearchInput = () => {
  const textSearchValue = useSelector(textSearchSelector);
  const pageIndex = useSelector(pageIndexSelector);
  const dispatch = useDispatch();
  const { routes, navigate } = useNavigation();
  const { pathname } = useLocation();

  const handleInputChange = (e) => {
    dispatch(ResultsActions.setTextSearch(e.target.value))
  };

  const handleSearch = () => {
    if(textSearchValue.length > 0) {
      dispatch(ResultsActions.getRepositories(textSearchValue, pageIndex))

      if(pathname !== routes.results) {
        navigate(routes.results);
      }
    }
  };

  return (
    <div className="nav-container">
      <Button size="large" onClick={() => navigate(routes.home)}>
       <HomeFilled />
      </Button>
      <Search
        placeholder="type repository name"
        enterButton="Search"
        size="large"
        value={textSearchValue}
        onChange={handleInputChange}
        onSearch={handleSearch}
      />
    </div>
     
  )
}

export default SearchInput;