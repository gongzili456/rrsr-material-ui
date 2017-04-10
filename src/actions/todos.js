import * as types from '../constants/ActionTypes'
import axios from 'axios'

export const addTodo = text => ({type: types.ADD_TODO, text})
export const deleteTodo = id => ({type: types.DELETE_TODO, id})
export const editTodo = (id, text) => ({type: types.EDIT_TODO, id, text})
export const completeTodo = id => ({type: types.COMPLETE_TODO, id})
export const completeAll = () => ({type: types.COMPLETE_ALL})
export const clearCompleted = () => ({type: types.CLEAR_COMPLETED})
export const fetch = () => dispatch => {
  return axios({
    url: '/api/v1/hello'
  }).then(resp => {
    console.log('resp -> ', resp)
  }).catch(err => {
    console.log('err -> ', err)
  })
}
