import { RepositoryActionTypes } from "./types"


const initialState = {
    isLoading: false,
    repo: null,
    error: null
};


 function repositoryReducer(state = initialState, {type, payload}) {
    switch (type) {
        case RepositoryActionTypes.GET_REPOSITORY_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case RepositoryActionTypes.GET_REPOSITORY_SUCCESS:
            return {
                ...state,
                repo: payload,
                isLoading: false
            };

        case RepositoryActionTypes.GET_REPOSITORY_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        default:
            return state
    }
  }

  export default repositoryReducer