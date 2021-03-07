export const textSearchSelector = (state) => {
    return state.results.textSearch
};

export const pageIndexSelector = (state) => {
    return state.results.pageIndex
};

export const repositoriesListSelector = (state) => {
    return state.results.list
};

export const repositoriesLoadingSelector = (state) => {
    return state.results.isLoading
}

export const totalCountSelector = (state) => {
    return state.results.totalCount
}