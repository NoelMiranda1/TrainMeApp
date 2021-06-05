import React from 'react';

import styled from 'styled-components/native';
import {FlatList, View} from 'react-native';

import {notes, modulos} from '@utils/data';
import RenderItem from '@components/items/NotesCourseItem';
import {Dropdown} from 'react-native-material-dropdown';
import {TRAINME_COLOR} from '@constants/theme';

function MeetingsList() {
  return (
    <Content>
      <Title>{notes[0].course}</Title>
      <ContentSelect>
        <Dropdown
          itemCount={4.4}
          baseColor="#000"
          textColor="#000"
          selectedItemColor="#000"
          style={{
            borderRadius: 10,
            paddingLeft: 10,
          }}
          data={modulos}
          value={modulos[0].label}
        />
      </ContentSelect>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={notes}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={<View style={{height: 250}} />}
      />
    </Content>
  );
}

const ContentSelect = styled.View`
  width: 100%
  padding-horizontal: 10px;
  border-radius: 10px;
  margin-top: -20px;
`;
const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
`;
const Content = styled.View`
  width: 100%;
  margin-top: -10%;
  margin-bottom: 10%;
`;

export default MeetingsList;
