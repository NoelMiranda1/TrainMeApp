import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';

import styled from 'styled-components/native';
import HeaderSchool from '@components/utils/HeaderSchool';
import {Card} from 'react-native-elements';
import logo from '../../assets/logo.png';
import {useNavigation} from '@react-navigation/native';
import {Button} from 'react-native-elements';

import Ico from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon from 'react-native-vector-icons/Ionicons';
import {Input} from 'react-native-elements';

function Login() {
  const navigation = useNavigation();
  const [user, setUser] = useState('test@test.com');
  const [password, setPassword] = useState('12345');

  const validation = () => {
    if (user === 'test@test.com' && password !== '12345') {
      Alert.alert('Error', 'Contraseña incorrecta');
    } else if (user !== 'test@test.com' && password === '12345') {
      Alert.alert('Error', 'Correo invalido');
    } else if (user !== 'test@test.com' && password !== '12345') {
      Alert.alert('Erro', 'Credenciales invalidas');
    } else {
      navigation.navigate('App');
    }
  };

  return (
    <>
      <HeaderSchool />
      <Main>
        <Card
          containerStyle={{
            borderRadius: 10,
            width: '90%',
            marginTop: '-14%',
          }}>
          <Container>
            <Logo source={logo} resizeMode="contain" />
            <Input
              inputContainerStyle={styles.input}
              value={user}
              onChangeText={user => setUser(user)}
              placeholder="Correo Electrónico"
              leftIcon={<Icon name="mail" size={20} color="#666666" />}
            />
            <Input
              inputContainerStyle={styles.input}
              value={password}
              onChangeText={pass => setPassword(pass)}
              placeholder="Contraseña"
              leftIcon={<Ico name="lock" size={20} color="#666666" />}
              secureTextEntry={true}
            />
            <Button
              onPress={validation}
              buttonStyle={styles.btn}
              title="Iniciar Sesión"
            />
            <Link>
              <Text>¿Olvidó su contraseña?</Text>
            </Link>
          </Container>
        </Card>
      </Main>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 300,
  },
  input: {
    borderWidth: 1,
    borderColor: '#9D9D9D',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
const Logo = styled.Image`
  width: 80%;
  height: 100px;
`;

const Main = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Link = styled.TouchableOpacity`
  margin: 15px;
`;
const Text = styled.Text`
  color: #787878;
`;

export default Login;
