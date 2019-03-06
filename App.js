import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import LoginRef from './src/pages/Login';
import HomeRef from './src/pages/Home';
import StudentSectionRef from './src/pages/StudentSection';
import WelcomeScreenRef from './src/pages/WelcomeScreen';
import WardListRef from './src/pages/WardList';
import AccountRef from './src/pages/Account';
import ParallelSectionRef from './src/pages/ParallelSections';
import DashboardRef from './src/pages/Dashboard';
import NoticeBoardRef from './src/pages/NoticeBoard';
import FeeDetailsRef from './src/pages/FeeDetails';
import LessonPlanRef from './src/pages/LessonPlan';
import TabsOptions from './src/pages/Tabs/NoticeBoardTabs'

const Navigation = createStackNavigator({
  login: {
    screen: TabsOptions,
  },

  home: {
    screen: HomeRef,
  },
  student: {
    screen: StudentSectionRef,
  },
  welcome:{
    screen: WelcomeScreenRef,
  },
  ward:{
    screen: WardListRef,
  },
  account:{
    screen: AccountRef,
  },
  parallelsection:{
    screen: ParallelSectionRef,
  },
  dashboardSection:{
    screen: DashboardRef,
  },
  noticeboardSection:{
    screen: NoticeBoardRef,
  },
  feedetailsSection:{
    screen: FeeDetailsRef,
  },
  lessonplanSection:{
    screen: LessonPlanRef,
  }
})

const App = createAppContainer(Navigation);
export default App;
