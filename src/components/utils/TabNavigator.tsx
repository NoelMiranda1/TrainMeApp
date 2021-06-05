import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TRAINME_COLOR} from '../../constants/theme';

function TabNavigator() {
  const navigation = useNavigation();
  const [active, setActive] = useState({opt_1: true});

  const ActiveAndNavigate = id => {
    setActive(prevState => {
      return {
        ...prevState,
        [`pot_${id}`]: !prevState[`pot_${id}`],
      };
    });
    switch (id) {
      case 1:
        navigation.navigate('Courses');
        break;
      case 2:
        navigation.navigate('Publications');
        break;
      case 3:
        navigation.navigate('Meetings');
        break;
      case 4:
        navigation.navigate('Calendar');
        break;
      case 5:
        navigation.navigate('Notes');
        break;
      case 6:
        navigation.navigate('Califications');
        break;

      default:
        break;
    }
  };

  return (
    <Content>
      <TabButton onPress={() => ActiveAndNavigate(1)}>
        <Icon
          name="star"
          size={25}
          color={active === {opt_1: true} ? TRAINME_COLOR : 'gray'}
        />
      </TabButton>
      <TabButton onPress={() => ActiveAndNavigate(2)}>
        <Icon
          name="file-text"
          size={25}
          color={active === {opt_1: true} ? TRAINME_COLOR : 'gray'}
        />
      </TabButton>
      <TabButton onPress={() => ActiveAndNavigate(3)}>
        <Icon
          name="video-camera"
          size={25}
          color={active === {opt_1: true} ? TRAINME_COLOR : 'gray'}
        />
      </TabButton>
      <TabButton onPress={() => ActiveAndNavigate(4)}>
        <Icon
          name="calendar-o"
          size={25}
          color={active === {opt_1: true} ? TRAINME_COLOR : 'gray'}
        />
      </TabButton>
      <TabButton onPress={() => ActiveAndNavigate(5)}>
        <Icon
          name="plus-circle"
          size={25}
          color={active === {opt_1: true} ? TRAINME_COLOR : 'gray'}
        />
      </TabButton>
      <TabButton onPress={() => ActiveAndNavigate(6)}>
        <Icon
          name="book"
          size={25}
          color={active === {opt_1: true} ? TRAINME_COLOR : 'gray'}
        />
      </TabButton>
    </Content>
  );
}

const Content = styled.View`
  border-top-width: 0.19px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0px auto;
`;
const TabButton = styled.TouchableOpacity`
  padding: 10px;
`;
export default TabNavigator;
