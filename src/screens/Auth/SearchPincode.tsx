import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import logo from '../../assets/logo.png';
import Header from '@components/utils/Header';
import Pincode from '@components/common/Pincode';

function SearchPincode() {
  return (
    <Content>
      <Header />
      <Main>
        <Logo source={logo} resizeMode="contain" />
        <KeyboardAvoidingView
          behavior={'position'}
          keyboardVerticalOffset={-30}>
          <Container>
            <Title>Ingrese el codigo de 4 digitos de su institucion</Title>
            <Pincode />
          </Container>
        </KeyboardAvoidingView>
      </Main>
    </Content>
  );
}
const Content = styled.SafeAreaView`
  flex: 1;
`;
const Main = styled.View`
  flex: 1;
  align-items: center;
  background-color: #fff;
  padding-top: 15%;
`;
const Logo = styled.Image`
  width: 65%;
  height: 100px;
`;

const Title = styled.Text`
  color: #707070;
  margin-left: 3%;
`;

const Container = styled.View`
  width: 95%;
  justify-content: center;
`;
export default SearchPincode;
