import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'signup':
        return {errorMsg: '', token: action.payload}
     case 'add_error':
          return {...state, errorMsg: action.payload}
    default:
      return state;
  }
};
const signup = (dispatch) => async({email, password}) =>{
        try{
            const response = await trackerApi.post('/signup',{email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signup', payload:response.data.token})
            console.log(response.data);
        }catch(err){
            dispatch({type:'add_error', payload: 'Something went wrong!'})
            console.log('ERR!!  '+err.response.data);
        }
        
    }

const signin = (dispatch) => {
    return ({email, password}) =>{
        
    }
}
const signout = (dispatch) => {
    return ({email, password}) =>{
        
    }
}

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMsg:'' }
);
