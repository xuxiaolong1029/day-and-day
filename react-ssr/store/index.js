import axios from 'axios'
const GET_LIST = 'INDEX/GET_LIST';

// Action
const changeList = list => ({
  type: GET_LIST,
  list
});
// 异步Action

export const getIndexList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    return axios.get('http://localhost:9090/course/list')
      .then((res) => {
        const {list} = res.data
        dispatch(changeList(list))
      });
  };
};

// initState
const defaultState = {
  list: []
};
// Reducer
export default (state = defaultState, action) => {
  switch(action.type) {
    case GET_LIST:
      const newState = {
        ...state,
        list: action.list
      };
      return newState;
    default:
      return state;
  }
}