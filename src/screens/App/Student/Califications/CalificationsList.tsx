import React from 'react';

import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import {evaluations} from '@utils/data';
import RenderItem from '@components/items/CalificationsItem';

function MeetingsList() {
  return (
    <Content>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={evaluations}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}
const Content = styled.View`
  width: 100%;
  margin-top: -28%;
  margin-bottom: 10%;
  flex: 1;
`;

export default MeetingsList;
