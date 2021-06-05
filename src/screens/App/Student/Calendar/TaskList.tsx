import React from 'react';

import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {events} from '@utils/data';
import RenderItem from '@components/items/TaskItem';

function MeetingsList() {
  return (
    <Content>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={events}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}

const Content = styled.View`
  width: 100%;
  height: 100%;
  flex: 1;
`;

export default MeetingsList;
