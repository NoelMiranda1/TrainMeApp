import React from 'react';
import styled from 'styled-components/native';
import CourseDetail from './CourseDetail';
import TabBarCustom from '@components/utils/TabNavigator';
import Orientation from 'react-native-orientation-locker';

function index({route}: any) {
  Orientation.lockToPortrait();

  return (
    <>
      <Content>
        <Main showsVerticalScrollIndicator={false}>
          <CourseDetail route={route} />
        </Main>
      </Content>
      <TabBarCustom />
    </>
  );
}

const Content = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const Main = styled.ScrollView`
  flex: 1;
`;

export default index;
