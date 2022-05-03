import {batchActions} from 'redux-batched-actions'
import { showLoading, hideLoading } from "../actions/ui";
import { fetchSuccess, fetchFailure } from "../actions/todo";


const fetchTodos = () => {
    return async (dispatch, _getState, api) => {
        dispatch(showLoading())
        try {
            const data = await api.fetchData()
            dispatch(batchActions([
                fetchSuccess(data), 
                hideLoading()
            ]))
        } catch (error) {
            dispatch(batchActions([
                fetchFailure(error), 
                hideLoading()
            ]))
        }
    }
}

export default fetchTodos