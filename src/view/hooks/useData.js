import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {get} from 'lodash'
import fetchTodos from '../../application/middlewares/todo'

const empty_erray = []

const useData = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => get(state, 'ui.showLoading', false))
    const data = useSelector(state => get(state, 'todos.todos', empty_erray))
    const error = useSelector(state => get(state, 'todos.error', false))

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return [isLoading, data, error]
}

export default useData