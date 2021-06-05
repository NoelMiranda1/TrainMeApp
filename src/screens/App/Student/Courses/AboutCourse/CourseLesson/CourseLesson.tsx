import React from 'react';

import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import BackButton from '@components/common/BackButton';

import {courseDetail} from '@utils/data';

import RenderItem from '@components/items/CourseLessonItem';

function CourseLesson({route}: any) {
  const {title} = route.params;

  return (
    <Content>
      <ContentFilters>
        <BackButton />
        <TextUbication>
          Mis cursos {'>'} React Hooks {'>'} Modulos
        </TextUbication>
        <Title>Lecciones del modulo</Title>
        <Text>{title}</Text>
      </ContentFilters>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={courseDetail}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}

const Content = styled.View`
  margin-top: 20px;
  flex: 1;
  padding-bottom: 10px;
`;
const TextUbication = styled.Text`
  margin-top:10px
  padding-left:10px;
  color: #70787F;
  font-size: 15px;
  font-weight: bold;
`;
const ContentFilters = styled.View`
  width: 95%;
  margin: 0 auto;
`;
const Text = styled.Text`
  color: #b5babd;
  font-size: 17px;
  font-weight: 700;
  padding-left: 10px;
  padding-bottom: 10px;
`;
const Title = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
`;
export default CourseLesson;
