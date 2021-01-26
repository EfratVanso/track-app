//export navigation option to another files except the components
import { NavigationActions } from 'react-navigation';
let navigator;
export const setNavigator = (nav) => {
    navigator = nav;
}
export const navigate = (routeName, params) => {
    console.log('Navigate to '+ routeName)
    navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};
