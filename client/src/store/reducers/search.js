import * as actionTypes from '../actions';

const initialState = {
    value: "",
    projects: null,
    response: [],
    requestFailed: false,
    showProgress: false,
    noResult: false,
    searched: false,
    selectBox: {
        show: false,
        value: 10
    }
};

const searchReducer = (state = initialState, action) => {

    switch(action.type){

        case actionTypes.INPUT_CHANGE:
            return {
                ...state,
                value: action.value
            }

        case actionTypes.FORM_SUBMITTED:
            return {
                ...state,
                showProgress: true,
                searched: true
            }
        
        case actionTypes.NO_RESULTS_FOUND:
            return {
                ...state,
                requestFailed: false, 
                showProgress: false, 
                noResult: true
            }

        case actionTypes.ON_RESULTS_FOUND:
            return {
                ...state,
                response: action.value.response, 
                projects: action.value.projects, 
                requestFailed: false, 
                showProgress: false, 
                noResult: false
            }

        case actionTypes.ON_REQUEST_FAILED:
            return {
                ...state,
                requestFailed: true, 
                showProgress: false, 
                noResult: false
            }

        case actionTypes.SELECT_CHANGE:
            return{
                ...state,
                projects: action.value.projects,
                selectBox: {
                    value: action.value.value
                }
            }
        default: 
            return {
                ...state
            }

    }

    return state;
}

export default searchReducer;