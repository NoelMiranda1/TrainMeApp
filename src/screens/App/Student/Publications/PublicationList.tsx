import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {Publicaciones} from 'utils/data';
import RenderItem from '@components/items/PublicationCardItem';

function PublicationList() {
  return (
    <Content>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Publicaciones}
        renderItem={({item}) => <RenderItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </Content>
  );
}

const Content = styled.SafeAreaView``;

export default PublicationList;
