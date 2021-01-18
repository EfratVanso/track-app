//export navigation option to another files except the components
import { NavigationActions } from 'react-navigation';
let navigator;
export const setNavigator = nav =>{
    navigator = nav;
}
export const navigate =(routName, params)=>{
    console.log('Navigate to '+ routName)
    navigator.dispatch(
        NavigationActions.navigate({
            routName,
            params
        })
    );
};