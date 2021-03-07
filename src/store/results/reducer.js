import { ResultsActionTypes } from "./types"


const initialState = {
    textSearch: '',
    pageIndex: 1,
    isLoading: false,
    list: [],
    totalCount: 0,
    error: null
};


 function resultsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ResultsActionTypes.SET_TEXT_SEARCH:
            return {
                ...state,
                textSearch: payload
            };
        case ResultsActionTypes.SET_PAGE_INDEX:
            return {
                ...state,
                pageIndex: payload
            };

        case ResultsActionTypes.GET_REPOSITORIES_REQUEST:
            return {
                ...state,
                isLoading: true
            };

        case ResultsActionTypes.GET_REPOSITORIES_SUCCESS:
            return {
                ...state,
                list: payload.items,
                totalCount: payload.total_count,
                isLoading: false
            };

        case ResultsActionTypes.GET_REPOSITORIES_ERROR:
            return {
                ...state,
                error: payload,
                isLoading: false
            };
        default:
            return state
    }
  }

  export default resultsReducer