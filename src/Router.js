import { StackNavigator } from 'react-navigation';
import SignUpStep1 from './Components/Auth/SignUpStep1';
import SignUpStep2 from './Components/Auth/SignUpStep2';


const RouterComponent = StackNavigator({
  SignUpStep1: { screen: SignUpStep1 },
  SignUpStep2: { screen: SignUpStep2 },
});


export default RouterComponent;
