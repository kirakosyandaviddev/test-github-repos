import Api from "../../app/Api";
import { ResultsActionTypes } from "./types";

export const ResultsActions = {
    setTextSearch: (searchValue) => ({
        type: ResultsActionTypes.SET_TEXT_SEARCH,
        payload: searchValue
    }),

    setPageIndex: (page) => ({
        type: ResultsActionTypes.SET_PAGE_INDEX,
        payload: page
    }),


    getRepositories: (query, pageIndex) => async (dispatch) => {
        dispatch(ResultsActions.getRepositoriesRequest());

        try {
            const res = await Api.searchRepositories(query, pageIndex);
            dispatch(ResultsActions.getRepositoriesSuccess(res.data));
        } 
        catch (e) {
            dispatch(ResultsActions.getRepositoriesError(e))
        }
    },


    getRepositoriesRequest: (payload) => ({
        type: ResultsActionTypes.GET_REPOSITORIES_REQUEST,
        payload: payload
    }),

    getRepositoriesSuccess: (payload) => ({
        type: ResultsActionTypes.GET_REPOSITORIES_SUCCESS,
        payload: payload
    }),

    getRepositoriesError: (payload) => ({
        type: ResultsActionTypes.GET_REPOSITORIES_ERROR,
        payload: payload
    })
};