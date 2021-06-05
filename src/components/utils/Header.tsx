import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import ArrowLef from 'react-native-vector-icons/AntDesign';
interface Tit {
  title?: string;
}
function Header(props: Tit) {
  const navigation = useNavigation();
  return (
    <Container>
      <Row>
        <Button onPress={() => navigation.goBack()}>
          <ArrowLef name="arrowleft" size={30} color="#333333" />
        </Button>
      </Row>
      {props.title ? <Title>{props.title}</Title> : null}
    </Container>
  );
}

const Button = styled.TouchableOpacity`
  padding: 1px;
`;

const Title = styled.Text`
  margin-vertical: 5px;
  margin-left: 10px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;
const Container = styled.View`
  background-color: #fff;
  width: 100%;
  padding: 10px;
  border-bottom-width: 1px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export default Header;
