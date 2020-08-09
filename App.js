import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Screen: ComponentsScreen
  },
  {
    initialRouteName: "Screen",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
