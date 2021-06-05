import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TRAINME_COLOR} from '../constants/theme';

import Courses from '../screens/App/Student/Courses';
import Publications from '../screens/App/Student/Publications';
import Meetings from '../screens/App/Student/Meetings';
import Calendar from '../screens/App/Student/Calendar';
import Notes from '../screens/App/Student/Notes';
import Califications from '../screens/App/Student/Califications';

function TabBar() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Courses':
              iconName = focused ? 'book' : 'book';
              break;
            case 'Publications':
              iconName = focused ? 'plus-circle' : 'plus-circle';
              break;
            case 'Meetings':
              iconName = focused ? 'video-camera' : 'video-camera';
              break;
            case 'Calendar':
              iconName = focused ? 'calendar-o' : 'calendar-o';
              break;
            case 'Notes':
              iconName = focused ? 'file-text' : 'file-text';
              break;
            case 'Califications':
              iconName = focused ? 'star' : 'star';
              break;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: TRAINME_COLOR,
        inactiveTintColor: 'gray',
        showLabel: false,
      }}>
      <Tab.Screen name="Courses" component={Courses} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Meetings" component={Meetings} />
      <Tab.Screen name="Publications" component={Publications} />
      <Tab.Screen name="Califications" component={Califications} />
    </Tab.Navigator>
  );
}

export default TabBar;
