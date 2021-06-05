import React from 'react';
import styled from 'styled-components/native';

import PublicationList from './PublicationList';
import Orientation from 'react-native-orientation-locker';
import ContentHeader from '@components/utils/ContentHeaderCard';

type ScreenProps = {};

function Courses(props: ScreenProps) {
  Orientation.lockToPortrait();
  return (
    <Content>
      <ContentFilters>
        <ContentHeader
          filter="Ordenar por"
          title="Publicaciones"
          search="curso o autor"
          drop={true}
        />
      </ContentFilters>
      <Main>
        <PublicationList />
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
  margin-top: -5%;
`;

export default Courses;
