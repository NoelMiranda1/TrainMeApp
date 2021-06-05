import React from 'react';
import styled from 'styled-components/native';
import {TRAINME_COLOR} from '../../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Dropdown} from 'react-native-material-dropdown';
import {modulos} from '@utils/data';
interface Props {
  title: string;
  modulo?: string;
  search?: string;
  filter?: string;
  drop?: boolean;
}

function ContentHeaderCard(props: Props) {
  const {title, modulo, search, filter, drop} = props;

  return (
    <Container>
      <Title>{title}</Title>
      {modulo ? <TextModulo>{modulo}</TextModulo> : null}
      <SearchContent>
        {search ? (
          <>
            <Input placeholder={`Buscar ${search}`} />
            <ButtonSearch onPress={() => console.log('press')}>
              <Icon
                style={{padding: 10}}
                name="search"
                size={20}
                color="#8A9197"
              />
            </ButtonSearch>
          </>
        ) : null}
      </SearchContent>
      {filter ? <Text>{filter}</Text> : null}
      {drop === true ? (
        <ContentSelect>
          <Dropdown
            itemCount={4.4}
            baseColor="#000"
            textColor="#fff"
            selectedItemColor="#000"
            style={{
              backgroundColor: `${TRAINME_COLOR}`,
              borderRadius: 10,
              paddingLeft: 10,
            }}
            data={modulos}
            value={modulos[0].label}
          />
        </ContentSelect>
      ) : null}
    </Container>
  );
}

const SearchContent = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #c9c8c8;
  border-radius: 5px;
`;

const Input = styled.TextInput`
  width: 80%;
  border-radius: 10px;
  font-weight: 700;
  font-size: 18px;
  padding: 0 10px;
`;

const ButtonSearch = styled.TouchableOpacity`
  padding: 0;
`;
const ContentSelect = styled.View`
  width: 257px;
  padding: 0px;
  border-radius: 10px;
  top: -35px;
`;
const Title = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
`;
const Text = styled.Text`
  color: #aeb2b7;
  font-size: 17px;
  font-weight: 700;
  padding: 10px;
`;
const TextModulo = styled.Text`
  color: #70787f;
  font-size: 18px;
  font-weight: bold;
  margin-vertical: 10px;
  margin-top: -5px;
`;
const Container = styled.View`
  height: 170px;
`;
export default ContentHeaderCard;
