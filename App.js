import Screen1 from "./baiTapTuan05/screen_1";
import Screen2 from "./baiTapTuan05/screen_2";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
