import {
    HIDE_LOADING,
    SHOW_LOADING,
} from '../actions/ui'


const initialState = {
    showLoading: false
}

const UIReducer = (state = initialState, payload) => {
    switch (payload.type) {
        case SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            }           
        case HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            }           
        default:
            return state;
    }
}

export default UIReducer