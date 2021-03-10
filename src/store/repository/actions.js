import Api from "../../app/Api";
import { RepositoryActionTypes } from "./types";

export const RepositoryActions = {
    getRepository: (login, repoName) => async (dispatch) => {
        dispatch(RepositoryActions.getRepositoryRequest());

        try {
            const res = await Api.getRepository(login, repoName);
            dispatch(RepositoryActions.getRepositorySuccess(res.data));
        } 
        catch (e) {
            dispatch(RepositoryActions.getRepositoryError(e))
        }
    },


    getRepositoryRequest: (payload) => ({
        type: RepositoryActionTypes.GET_REPOSITORY_REQUEST,
        payload: payload
    }),

    getRepositorySuccess: (payload) => ({
        type: RepositoryActionTypes.GET_REPOSITORY_SUCCESS,
        payload: payload
    }),

    getRepositoryError: (payload) => ({
        type: RepositoryActionTypes.GET_REPOSITORY_ERROR,
        payload: payload
    })
};