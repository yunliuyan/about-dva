import * as imageService from '../services/images';


export default {
	
	namespace: 'images',

	state: {
	      list: [],
	},

	subscriptions: {
	    setup({ dispatch, history }) {  
	      history.listen((location) => {
	         //console.log(location.pathname);
	        if(location.pathname === "/images"){
	            dispatch({ type: 'fetch'});
	        }
	      });
	    },
	},

	effects: {
	       *fetch({ payload }, { call, put }) {  
        		let imgsData = imageService.query().data
       		 if(imgsData){
         			 yield put({ type: 'save' , payload:imgsData});
        		}
      
   	        }
	},

	reducers: {
          save(state, { payload }) {

            return { ...state, list: payload };
          },
      },


};


