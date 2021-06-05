import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {TRAINME_COLOR} from '@constants/theme';
import {Alert} from 'react-native';

function Pincode() {
  const navigation = useNavigation();
  const [value, setValue] = useState<string>('4');
  const [value1, setValue1] = useState<string>('5');
  const [value2, setValue2] = useState<string>('4');
  const [value3, setValue3] = useState<string>('5');
  const Submmit = () => {
    const PIN = `${value}${value1}${value2}${value3}`;

    if (PIN === '4545') {
      navigation.navigate('Login');
    } else {
      Alert.alert('Error', 'El pin no existe');
    }
  };
  return (
    <>
      <Row>
        <Input
          maxLength={1}
          keyboardType="number-pad"
          value={value}
          onChangeText={text => setValue(text)}
        />
        <Input
          maxLength={1}
          keyboardType="number-pad"
          value={value1}
          onChangeText={text => setValue1(text)}
        />
        <Input
          maxLength={1}
          keyboardType="number-pad"
          value={value2}
          onChangeText={text => setValue2(text)}
        />
        <Input
          maxLength={1}
          keyboardType="number-pad"
          value={value3}
          onChangeText={text => setValue3(text)}
        />
      </Row>
      <Button
        buttonStyle={{backgroundColor: `${TRAINME_COLOR}`}}
        onPress={Submmit}
        title="Continuar"
      />
    </>
  );
}

const Input = styled.TextInput`
  border-width: 1px;
  height: 50px;
  width: 50px;
  border-radius: 7px;
  text-align: center;
  font-size: 20px;
  margin: 10px;
  background-color: #f2f2f2;
  border-color: #7f878d;
`;

const Row = styled.View`
  flex-direction: row;
`;

export default Pincode;
