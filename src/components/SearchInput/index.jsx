import React from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { textSearchSelector } from '../../store/results/selectors';
import { ResultsActions } from '../../store/results/actions';
import { useNavigation } from '../../hooks';
import './SearchInput.scss'

const { Search } = Input; 

const SearchInput = () => {
  const textSearchValue = useSelector(textSearchSelector);
  const dispatch = useDispatch();
  const { routes, navigate } = useNavigation();

  const handleInputChange = (e) => {
    dispatch(ResultsActions.setTextSearch(e.target.value))
  };

  const handleSearch = () => {
    if(textSearchValue.length > 0) { 
      dispatch(ResultsActions.getRepositories(textSearchValue))
      navigate(routes.search());
    }
  };

  return (
    <div className="nav-container">
      <Search
        allowClear={true}
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