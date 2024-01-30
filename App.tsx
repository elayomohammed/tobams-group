/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Menu from './components/Menu';
import CartScreen from './components/Cart';

const tabIcons = {
  homeIcon: require('./dependecies/home.png'),
  menuIcon: require('./dependecies/menu.png'),
  cartIcon: require('./dependecies/bag.png'),
  accountIcon: require('./dependecies/account.png'),
}

const homeIcon = './dependecies/home-icon.jpg';
const menuIcon = './dependecies/menu-icon.jpg';
const cartIcon = './dependecies/bag.png';
const accountIcon = './dependecies/account-icon.jpg';

const getTabBarIcon = (path:any) => ({ focused, color, size }:any) => (
  <Image
    source={path}
    style={{
      width: size,
      height: size,
      tintColor: focused ? 'red' : 'gray',
    }}
  />
);

const HomeScreen = () => {
  return(
    <Text style={{alignSelf: 'center', justifyContent: 'center', marginTop: '90%', fontSize: 30, fontWeight: 'bold',}}>Home screen</Text>
  )
}

const AccountScreen = () => {
  return(
    <Text style={{alignSelf: 'center', justifyContent: 'center', marginTop: '90%', fontSize: 30, fontWeight: 'bold',}}>Account screen</Text>
  )
}

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: getTabBarIcon(tabIcons.homeIcon)}} />
          <Tab.Screen name='Menu' component={Menu} options={{tabBarIcon: getTabBarIcon(tabIcons.menuIcon)}} />
          <Tab.Screen name='Cart' component={CartScreen} options={{headerShown: true, tabBarIcon: getTabBarIcon(tabIcons.cartIcon)}} />
          <Tab.Screen name='Account' component={AccountScreen} options={{tabBarIcon: getTabBarIcon(tabIcons.accountIcon)}} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({})

export default App;
