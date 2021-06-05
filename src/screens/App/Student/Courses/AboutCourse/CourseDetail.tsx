import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import ContentHeader from '@components/utils/ContentHeaderCard';
import {courseDetail} from '@utils/data';
import RenderItem from '@components/items/CourseDetailItem';
import BackButton from '@components/common/BackButton';
import Ubication from '@components/common/UbicationScreen';

function CourseDetail({route}) {
  const {title} = route.params;
  return (
    <Content>
      <ContentFilters>
        <Row>
          <BackButton />
          <Ubication title={title} />
        </Row>
        <ContentHeader
          title={title}
          filter="Ordenar por"
          modulo="Módulos"
          search="Módulo"
          drop={true}
        />
      </ContentFilters>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={courseDetail}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}

const Row = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;
const Content = styled.View`
  margin-top: 20px;
  flex: 1;
  padding-bottom: 10px;
`;

const ContentFilters = styled.View`
  width: 95%;
  margin: 0 auto;
`;

export default CourseDetail;
