import React from 'react';

import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {calendar} from '@utils/data';
import RenderItem from '@components/items/CalendarItem';

function MeetingsList() {
  return (
    <Content>
      <Title>{calendar[0].month}</Title>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={calendar[0].week}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}

const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
`;
const Content = styled.View`
  width: 100%;
`;

export default MeetingsList;
