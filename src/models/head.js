import * as urlServices from '../services/url';


export default {
	
	namespace: 'headUrl',

	state: {
	      list: [],
	},

	subscriptions: {
	    setup({ dispatch, history }) {  
	      history.listen((location) => {
	         //console.log(location.pathname);
	       
	      });
	    },
	},

	effects: {
	       *fetch({ payload }, { call, put }) {  
        		let urlData = urlServices.query().data
       		 if(urlData){
         			 yield put({ type: 'save' , payload:urlData});
        		}

        		return urlData;
   	        }
	},

	reducers: {
	          save(state, { payload }) {

	            return { ...state, list: payload };
	          },
      },


};


