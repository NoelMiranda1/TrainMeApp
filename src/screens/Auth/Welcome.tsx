import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {TRAINME_COLOR} from '@constants/theme';
import {Card} from 'react-native-elements';
import logo from '../../assets/logo.png';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

type ScreenProps = {};

function Welcome(props: ScreenProps) {
  const navigation = useNavigation();

  return (
    <Main style={{backgroundColor: TRAINME_COLOR}}>
      <Card containerStyle={styles.card}>
        <Container>
          <Logo source={logo} resizeMode="contain" />
          <Button
            onPress={() => navigation.navigate('FindInstitution')}
            buttonStyle={styles.btn}
            title="Encontrar mi institución"
          />
          <Button
            onPress={() => navigation.navigate('SearchPincode')}
            buttonStyle={styles.btn}
            title="Ingresar por Codigo de institución"
          />
        </Container>
      </Card>
    </Main>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 300,
    margin: 8,
    backgroundColor: `${TRAINME_COLOR}`,
  },
  card: {
    borderRadius: 10,
    width: '90%',
    paddingVertical: 40,
  },
});

const Main = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.Image`
  width: 80%;
  height: 100px;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
export default Welcome;
