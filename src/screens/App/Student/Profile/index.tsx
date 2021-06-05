import React from 'react';
import styled from 'styled-components/native';
import ProfileList from './ProfileList';
import Orientation from 'react-native-orientation-locker';
import TabBar from '@components/utils/TabNavigator';
type ScreenProps = {};

function Courses(props: ScreenProps) {
  Orientation.lockToPortrait();
  return (
    <Safe>
      <Content>
        <Main>
          <ProfileList />
        </Main>
      </Content>
      <TabBar />
    </Safe>
  );
}

const Content = styled.ScrollView`
  background: #fff;
  height: 100%;
`;

const Main = styled.View`
  width: 100%;
  height: 100%;
`;
const Safe = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  background: #fff;
`;
export default Courses;
