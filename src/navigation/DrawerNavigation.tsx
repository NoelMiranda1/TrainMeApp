import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import TabBar from './TabBar';

//////////// Import Screens
// import CourseDetail from '@screens/App/Student/Courses/AboutCourse';
// import CourseLesson from '@screens/App/Student/Courses/AboutCourse/CourseLesson';
import CourseVideo from '@screens/App/Student/Courses/AboutCourse/CourseVideo';
import Pdf from '@components/pdf/Pdf';
import Profile from 'screens/App/Student/Profile';
import CourseDetail from '@screens/App/Student/Courses/CourseDetail';
function DrawerNavigation() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerStyle={{width: '100%'}}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={TabBar} />
      {/* //////////  others screens out drawer and tabn /////////////// */}
      <Drawer.Screen name="DetailCourse" component={CourseDetail} />
      {/* <Drawer.Screen name="CourseLesson" component={CourseLesson} /> */}
      <Drawer.Screen name="CourseVideo" component={CourseVideo} />
      <Drawer.Screen name="Pdf" component={Pdf} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
