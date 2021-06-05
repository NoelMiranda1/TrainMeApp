import React, {useEffect} from 'react';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';
import Orientation from 'react-native-orientation-locker';
import {TRAINME_COLOR} from '@constants/theme';

function BackButton() {
  const navigation = useNavigation();
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <Container>
      <Button
        containerStyle={{width: 100}}
        buttonStyle={{backgroundColor: `${TRAINME_COLOR}`, borderRadius: 10}}
        onPress={() => navigation.goBack()}
        icon={
          <Icon
            style={{paddingRight: 5}}
            name="arrow-left"
            size={15}
            color="white"
          />
        }
        title="Volver"
      />
    </Container>
  );
}

const Container = styled.View`
  width: 90px;
  border-radius: 50;
`;

export default BackButton;
