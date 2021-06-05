import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import ContentHeader from '@components/utils/ContentHeaderCard';
import {courseDetail} from '@utils/data';
import RenderItem from '@components/items/CourseDetailItem';
import BackButton from '@components/common/BackButton';
import Ubication from '@components/common/UbicationScreen';
import {Card} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import Course from '@components/items/CourseDetailItem';
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
          title="Programa"
          search="Módulo o leccion"
          drop={false}
        />
      </ContentFilters>
      <ContentBody>
        <Title>Seccion introdutoria</Title>
        <ContentFlat>
          {courseDetail.map(item => {
            return <Course item={item} />;
          })}
        </ContentFlat>
      </ContentBody>
      <ContentFlat>
        {courseDetail.map(item => {
          return <Course item={item} />;
        })}
      </ContentFlat>
      <Divider />
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
const Content = styled.ScrollView`
  height: 100%;
  margin-top: 20px;
`;

const ContentFilters = styled.View`
  width: 95%;
  margin: 0 auto;
  height: 150px;
`;
const ContentFlat = styled.View`
  width: 100%;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

const ContentBody = styled.View`
  padding: 10px;
  background-color: #f2f2f2;
  margin-horizontal: 20px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #000;
`;

const Divider = styled.View`
  margin-bottom: 150px;
`;

export default CourseDetail;
