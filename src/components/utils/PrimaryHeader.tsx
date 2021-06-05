import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TRAINME_COLOR} from '../../constants/theme';
import {useNavigation, DrawerActions} from '@react-navigation/native';

function PrincipalHeader() {
  const navigation = useNavigation();
  const [toggle, setToggle] = useState(false);
  return (
    <Header>
      <Content>
        <Icon
          name={toggle ? 'close' : 'navicon'}
          color="#fff"
          size={30}
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
            setToggle(prevState => !prevState);
          }}
        />
        <HeaderActions>
          <DropDown>
            <Icon name="user" size={20} color="white" />
            <RoleName>Estudiante</RoleName>
          </DropDown>
          <Icon
            name="user-circle"
            size={30}
            color="#fff"
            onPress={() => navigation.navigate('Profile')}
          />
        </HeaderActions>
      </Content>
    </Header>
  );
}

const Header = styled.SafeAreaView`
  background: ${TRAINME_COLOR};
  padding: 10px;
`;

const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  margin: 5px auto;
`;

const HeaderActions = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 40%;
`;

const DropDown = styled.TouchableOpacity`
  background: rgba(255, 255, 255, 0.3);
  padding: 5px 15px;
  margin-right: 13px;
  border-radius: 5px;
  flex-direction: row;
`;

const RoleName = styled.Text`
  color: #fff;
  padding-left: 10px;
`;

export default PrincipalHeader;
