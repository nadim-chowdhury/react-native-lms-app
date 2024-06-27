import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import Home from "./screens/Home";
import Admin from "./screens/Admin";
import Instructor from "./screens/Instructor";
import Student from "./screens/Student";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Instructor" component={Instructor} />
        <Stack.Screen name="Student" component={Student} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './screens/Home';
import Admin from './screens/Admin';
import Instructor from './screens/Instructor';
import Student from './screens/Student';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Instructor" component={Instructor} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './screens/Home';
import Admin from './screens/Admin';
import Instructor from './screens/Instructor';
import Student from './screens/Student';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import CreateEditCourse from './components/Course/CreateEditCourse';
import CourseList from './components/Course/CourseList';
import CourseDetail from './components/Course/CourseDetail';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Instructor" component={Instructor} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CreateEditCourse" component={CreateEditCourse} />
        <Stack.Screen name="CourseList" component={CourseList} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './screens/Home';
import Admin from './screens/Admin';
import Instructor from './screens/Instructor';
import Student from './screens/Student';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import CreateEditCourse from './components/Course/CreateEditCourse';
import CourseList from './components/Course/CourseList';
import CourseDetail from './components/Course/CourseDetail';
import UploadContent from './components/Course/UploadContent';
import CourseContent from './components/Course/CourseContent';
import ProgressTracker from './components/Progress/ProgressTracker';
import Certificates from './components/Certificates

/Certificates';
import Assessments from './components/Course/Assessments';
import Quizzes from './components/Course/Quizzes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Instructor" component={Instructor} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CreateEditCourse" component={CreateEditCourse} />
        <Stack.Screen name="CourseList" component={CourseList} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
        <Stack.Screen name="UploadContent" component={UploadContent} />
        <Stack.Screen name="CourseContent" component={CourseContent} />
        <Stack.Screen name="ProgressTracker" component={ProgressTracker} />
        <Stack.Screen name="Certificates" component={Certificates} />
        <Stack.Screen name="Assessments" component={Assessments} />
        <Stack.Screen name="Quizzes" component={Quizzes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './screens/Home';
import Admin from './screens/Admin';
import Instructor from './screens/Instructor';
import Student from './screens/Student';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import CreateEditCourse from './components/Course/CreateEditCourse';
import CourseList from './components/Course/CourseList';
import CourseDetail from './components/Course/CourseDetail';
import UploadContent from './components/Course/UploadContent';
import CourseContent from './components/Course/CourseContent';
import ProgressTracker from './components/Progress/ProgressTracker';
import Certificates from './components/Certificates/Certificates';
import ForumList from './components/Forum/ForumList';
import ForumDetail from './components/Forum/ForumDetail';
import ChatList from './components/Messaging/ChatList';
import ChatRoom from './components/Messaging/ChatRoom';
import Notifications from './components/Notifications/Notifications';
import Calendar from './components/Calendar/Calendar';
   import { ZoomUs } from 'react-native-zoom-sdk';

   ZoomUs.initialize({
     clientKey: 'your_zoom_client_key',
     clientSecret: 'your_zoom_client_secret',
   });

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Instructor" component={Instructor} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="CreateEditCourse" component={CreateEditCourse} />
        <Stack.Screen name="CourseList" component={CourseList} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} />
        <Stack.Screen name="UploadContent" component={UploadContent} />
        <Stack.Screen name="CourseContent" component={CourseContent} />
        <Stack.Screen name="ProgressTracker" component={ProgressTracker} />
        <Stack.Screen name="Certificates" component={Certificates} />
        <Stack.Screen name="ForumList" component={ForumList} />
        <Stack.Screen name="ForumDetail" component={ForumDetail} />
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatRoom" component={ChatRoom} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Calendar" component={Calendar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
