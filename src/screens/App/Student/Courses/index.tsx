import React from 'react';
import styled from 'styled-components/native';

import CourseLists from './CourseList';
import Orientation from 'react-native-orientation-locker';

function Courses() {
  Orientation.lockToPortrait();
  return (
    <Content>
      <Main showsVerticalScrollIndicator={false}>
        <CourseLists />
      </Main>
    </Content>
  );
}

const Content = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const Main = styled.ScrollView`
  flex: 1;
`;

export default Courses;
