import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {courseList} from 'utils/data';
import RenderItem from '@components/items/CourseCardItem';
import ContentHeader from '@components/utils/ContentHeaderCard';

type Props = {};

function CourseLists(props: Props) {
  return (
    <Content>
      <ContentFilters>
        <ContentHeader
          title="Mis cursos"
          search="Módulo"
          filter="Ordenar por"
          drop={true}
        />
      </ContentFilters>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={courseList}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}

const Content = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ContentFilters = styled.View`
  width: 95%;
  margin: 0 auto;
`;

export default CourseLists;
