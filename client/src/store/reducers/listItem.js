import * as actionTypes from '../actions';

const initialState = {
    showDialog: false
}

const listItemReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.ON_DIALOGUE_CLOSED:
            return{
                ...state,
                showDialog: false
            }

        case actionTypes.ON_DIALOGUE_OPEN:
            return{
                ...state,
                showDialog: true
            }
    }

    return state;
}

export default listItemReducer;