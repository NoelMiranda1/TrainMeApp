import React from 'react';
import styled from 'styled-components/native';

import Meeting from './MeetingsList';
import Orientation from 'react-native-orientation-locker';
import ContentHeader from '@components/utils/ContentHeaderCard';

type ScreenProps = {};

function Courses(props: ScreenProps) {
  Orientation.lockToPortrait();
  return (
    <Content>
      <ContentFilters>
        <ContentHeader title="Reuniones" search="curso o autor" drop={false} />
      </ContentFilters>
      <Main>
        <Meeting />
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
  flex: 1;
  margin-top: -10%;
`;

export default Courses;
