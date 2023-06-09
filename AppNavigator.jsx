import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      console.log('details screen focused');

      return () => {
        console.log('details screen unfocused');
      };
    }, [])
  );

  /* 2. Get the param */
//   const { itemId, otherParam } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen </Text>

      {/* <Text>Details Screen for {itemId} </Text>
      <Text> and {otherParam} </Text> */}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'My Home' }}
//         />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: 'My Home',
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="home" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{
//             tabBarLabel: 'Details',
//             tabBarIcon: ({ color, size }) => (
//               <Ionicons name="settings" size={size} color={color} />
//             ),
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
