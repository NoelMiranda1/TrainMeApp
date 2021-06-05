import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components/native';

const ProfileButton = () => {
  const navigation = useNavigation();
  return (
    <Content>
      <Icon
        name="user-circle"
        size={30}
        color="#928F91"
        onPress={() => navigation.navigate('Profile')}
      />
    </Content>
  );
};

const Content = styled.View`
  width: 100%;
  left: 85%;
  margin-top: 10px;
`;

export default ProfileButton;
