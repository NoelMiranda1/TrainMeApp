import React from 'react';

import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {reuniones} from '@utils/data';
import RenderItem from '@components/items/MeetingCardItem';
function MeetingsList() {
  return (
    <Content>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={reuniones}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}

const Content = styled.View`
  width: 100%;
  margin-top: -10%;
`;

export default MeetingsList;
