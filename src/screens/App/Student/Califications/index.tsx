import React from 'react';
import styled from 'styled-components/native';

import CalificationsList from './CalificationsList';
import Orientation from 'react-native-orientation-locker';
import ContentHeader from '@components/utils/ContentHeaderCard';

type ScreenProps = {};

function Courses(props: ScreenProps) {
  Orientation.lockToPortrait();
  return (
    <Content>
      <ContentFilters>
        <ContentHeader title="Calificaciones" search="por curso" />
      </ContentFilters>
      <Main>
        <CalificationsList />
      </Main>
    </Content>
  );
}

const ContentFilters = styled.View`
  width: 95%;
  margin: 10px 10px;
`;
const Content = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const Main = styled.View`
  width: 100%;
  top: 30px;
  flex: 1;
  height: 100%;
`;

export default Courses;
