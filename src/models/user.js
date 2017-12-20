import * as userService from '../services/user';


export default {

  namespace: 'user',

  state: {
           list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
         //console.log(location.pathname);
        if(location.pathname === "/user"){
            dispatch({ type: 'fetch'});
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
        let userData= userService.query().data
        if(userData){
          yield put({ type: 'save' ,payload:userData});
        }
      
    }
  },

  /*effects:{
        *addRemove({payload:todo},{put,call}){
            yield call(addTodo,todo)
            yield put({type:'add',payload:todo})
        }
    }*/

  reducers: {
    save(state, { payload }) {

      return { ...state, list: payload };
    },
  },

};
