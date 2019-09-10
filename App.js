import { createAppContainer, createStackNavigator } from 'react-navigation';

import LoginScreen from './src/pages/LoginScreen';

const AppNavigator = createStackNavigator(
    {
        'Login': {
            screen: LoginScreen,
            navigationOptions: {
                title: 'Bem vindo'
            }
        }
    },
    {
        defaultNavigationOptions: {
            title: 'Minhas series',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#003994',
                borderBottomWidth: 1,
                borderBottomColor: '#C5C5C5'
            },
            headerTitleStyle: {
                color: 'white',
                fontSize: 30
            }
        }
    }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
