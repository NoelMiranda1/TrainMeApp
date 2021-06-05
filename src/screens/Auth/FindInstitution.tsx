import React from 'react';
import Header from '@components/utils/Header';
import styled from 'styled-components/native';

import {useNavigation} from '@react-navigation/native';

function FindInstitution() {
  const navigate = useNavigation();
  return (
    <Main>
      <Header title="¿Cuál es el nombre su institución?" />
      <Input
        onPressIn={() => {
          console.log('En el adobe se supone navegaba hacia aqui');
          // navigate.navigate('FindSchool')
        }}
        textAlign="left"
        placeholder="Buscar por nombre de institucion"
      />
      <Text>
        ¿No puede encontrar su institución? Intente escribir la Url completa
      </Text>
      <Link>
        <TextLink>Haga click aqui para obtener ayuda</TextLink>
      </Link>
    </Main>
  );
}
const Main = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;
const Input = styled.TextInput`
  border-radius: 5px;
  border-width: 1px;
  margin: 13px;
  width: 90%;
  padding: 10px;
`;

const Title = styled.Text`
  color: #000;
  padding-left: 5px;
`;
const Text = styled.Text`
  color: #777777;
  width: 90%;
`;
const TextLink = styled.Text`
  color: #4d95f6;
`;
const Link = styled.TouchableOpacity`
  color: #4d95f6;
  margin-left: -35%;
`;

export default FindInstitution;
