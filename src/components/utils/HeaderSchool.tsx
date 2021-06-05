import React from 'react';
import styled from 'styled-components/native';
import logo from '../../assets/logo.png';
import ArrowLef from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

function HeaderSchool() {
  const navigation = useNavigation();
  return (
    <Container>
      <Row>
        <Content>
          <Button onPress={() => navigation.goBack()}>
            <ArrowLef name="arrowleft" size={30} color="#333333" />
          </Button>
          <Image source={logo} resizeMode="contain" />
        </Content>
        <Title>Are you ready?</Title>
      </Row>
    </Container>
  );
}

const Button = styled.TouchableOpacity`
  padding-right: 10px;
`;

const Container = styled.View`
  background-color: #fff;
  width: 100%;
  padding: 10px;
`;

const Row = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 15px;
`;
const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Image = styled.Image`
  width: 100px;
  height: 50px;
`;
const Title = styled.Text`
  color: #000;
  padding-left: 5px;
`;

export default HeaderSchool;
