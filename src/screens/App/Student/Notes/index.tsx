import React from 'react';
import styled from 'styled-components/native';
import NoteList from './NoteList';
import Orientation from 'react-native-orientation-locker';
import ContentHeader from '@components/utils/ContentHeaderCard';

type ScreenProps = {};

function Courses(props: ScreenProps) {
  Orientation.lockToPortrait();
  return (
    <Content>
      <ContentFilters>
        <ContentHeader title="Apuntes" search="por curso" />
      </ContentFilters>
      <Main>
        <NoteList />
      </Main>
    </Content>
  );
}

const ContentFilters = styled.View`
  width: 95%;
  margin-horizontal: 10px;
  margin-top: 10px;
`;
const Content = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const Main = styled.View`
  width: 100%;
  height: 100%;
  top: -20px;
`;

export default Courses;
