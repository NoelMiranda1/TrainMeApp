import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import {TRAINME_COLOR} from 'constants/theme';

function DrawerContent(props: any) {
  return (
    <Content>
      <DrawerContentScrollView {...props}>
        <DrawerContainer>
          <DrawerSection>
            <DrawerItem
              icon={() => <Icon name="book" color="#fff" size={30} />}
              label={() => <Text>Cursos</Text>}
              onPress={() => {
                props.navigation.navigate('Courses');
              }}
            />
            <DrawerItem
              icon={() => <Icon name="plus-circle" color="#fff" size={30} />}
              label={() => <Text>Apuntes</Text>}
              onPress={() => {
                props.navigation.navigate('Notes');
              }}
            />
            <DrawerItem
              icon={() => <Icon name="calendar-o" color="#fff" size={30} />}
              label={() => <Text>Calendario</Text>}
              onPress={() => {
                props.navigation.navigate('Calendar');
              }}
            />
            <DrawerItem
              icon={() => <Icon name="video-camera" color="#fff" size={30} />}
              label={() => <Text>Reuniones</Text>}
              onPress={() => {
                props.navigation.navigate('Meetings');
              }}
            />
            <DrawerItem
              icon={() => <Icon name="plus-circle" color="#fff" size={30} />}
              label={() => <Text>Publicaciones</Text>}
              onPress={() => {
                props.navigation.navigate('Publications');
              }}
            />
            <DrawerItem
              icon={() => <Icon name="star" color="#fff" size={30} />}
              label={() => <Text>Calificaciones</Text>}
              onPress={() => {
                props.navigation.navigate('Califications');
              }}
            />
          </DrawerSection>
        </DrawerContainer>
      </DrawerContentScrollView>
      <Row2>
        <DrawerItem
          style={{width: '40%', left: 60}}
          onPress={() =>
            props.navigation.navigate('DetailCourse', {title: 'Curso'})
          }
          label={() => <TextAlign>Perfil</TextAlign>}
        />
        <DrawerItem
          style={{width: '60%', right: 30}}
          onPress={() => {
            props.navigation.navigate('Welcome');
          }}
          label={() => <TextAlign>Cerrar Seccion</TextAlign>}
        />
      </Row2>
    </Content>
  );
}

const RoleName = styled.Text`
  color: #fff;
  padding-left: 10px;
`;
const Content = styled.View`
  flex: 1;
  background-color: ${TRAINME_COLOR};
`;

const DrawerContainer = styled.View`
  flex: 1;
`;
const DrawerSection = styled.View`
  margin-top: 15px;
`;

const Text = styled.Text`
  color: #fff;
  font-size: 22px;
`;

const TextAlign = styled.Text`
  font-size: 22px;
  color: #fff;
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
const Cont = styled.TouchableOpacity``;
const Row = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  align-items: center;
  justify-content: space-between;
`;
const Row2 = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
  align-items: center;

  border-top-width: 1px;
  border-color: #fff;
`;
export default DrawerContent;
