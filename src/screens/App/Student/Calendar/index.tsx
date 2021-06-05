import React from 'react';
import styled from 'styled-components/native';

import CalendarList from './CalendarList';
import TaskList from './TaskList';
import Orientation from 'react-native-orientation-locker';

type ScreenProps = {};

function Courses(props: ScreenProps) {
  Orientation.lockToPortrait();
  return (
    <Content>
      <Title>Calendario</Title>
      <Main>
        <CalendarList />
        <SubTitle>Próximos eventos</SubTitle>
        <TaskList />
      </Main>
    </Content>
  );
}

const Title = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  padding: 10px;
`;

const SubTitle = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  padding-top: 10px;
  padding-left: 10px;
`;
const Content = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const Main = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export default Courses;
