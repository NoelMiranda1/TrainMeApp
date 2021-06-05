import React from 'react';
import Header from '@components/utils/Header';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
function FindInstitution() {
  const navigation = useNavigation();
  return (
    <Main>
      <Header title="¿Cuál es el nombre su esccuela?" />
      <Input placeholder="Buscar por nombre de escuela">
        <Title>sunview.tranime.cloud</Title>
      </Input>
      <Link onPress={() => navigation.navigate('Login')}>
        <TextLink>Sunview</TextLink>
        <Text>sunview.tranime.cloud</Text>
      </Link>
    </Main>
  );
}
const Main = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;
const Input = styled.TextInput`
  border-radius: 5px;
  border-width: 1px;
  margin: 13px;
  width: 90%;
  padding-left: 10px;
`;

const Title = styled.Text`
  color: #000;
  padding-left: 5px;
`;
const Text = styled.Text`
  color: #777777;
  padding-left: 5px;
`;
const TextLink = styled.Text`
  color: #000;
  padding-left: 5px;
  font-weight: bold;
`;
const Link = styled.TouchableOpacity`
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  width: 90%;
  padding-vertical: 7px;
`;

export default FindInstitution;
