import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Ico from 'react-native-vector-icons/MaterialIcons';
import Layout from 'react-native-vector-icons/AntDesign';
import {Card} from 'react-native-elements';
import StarRating from 'react-native-star-rating';
import {useNavigation} from '@react-navigation/native';
interface Item {
  item: {
    state: string;
    image: string;
    title: string;
    rate: number;
    docente: string;
    alumnos: number;
    lecciones: number;
    reuniones: number;
  };
}

function CourseCard({item}: Item) {
  const navigation = useNavigation();
  const {
    state,
    image,
    title,
    rate,
    docente,
    alumnos,
    lecciones,
    reuniones,
  } = item;
  return (
    <CardC>
      <Card
        containerStyle={{
          padding: 0,
          borderRadius: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        }}>
        <Row2>
          <TitleCard
            style={{
              backgroundColor: state === 'Público' ? '#06D6A0' : 'red',
            }}>
            {item.state}
          </TitleCard>
          <ButtonSearch onPress={() => console.log('press')}>
            <Ico name="more-vert" size={30} color="#8A9197" />
          </ButtonSearch>
        </Row2>
        <Card.Divider />
        <CardContainer>
          <ButtonSearch
            onPress={() =>
              navigation.navigate('DetailCourse', {
                title,
              })
            }>
            <CardImage
              resizeMode="contain"
              source={{
                uri: image,
              }}
            />
          </ButtonSearch>

          <CourseTitle>{title}</CourseTitle>
          <Rows>
            <TextStart>{rate}</TextStart>
            <StarRating
              starSize={20}
              fullStarColor={'#FFC107'}
              disabled={true}
              maxStars={5}
              rating={rate}
            />
          </Rows>
          <View>
            <Rows>
              <Icon
                style={{padding: 10}}
                name="user"
                size={15}
                color="#8A9197"
              />
              <TextBottomCard>{docente}</TextBottomCard>
              <Icon
                style={{padding: 10}}
                name="users"
                size={15}
                color="#8A9197"
              />
              <TextBottomCard>{alumnos} Alumnos</TextBottomCard>
            </Rows>
            <Rows>
              <Icons
                style={{padding: 10}}
                name="book-open"
                size={15}
                color="#8A9197"
              />
              <TextBottomCard>{lecciones} Lecciones</TextBottomCard>
              <Icon
                style={{padding: 10}}
                name="video-camera"
                size={15}
                color="#8A9197"
              />
              <TextBottomCard>{reuniones} Reuniones</TextBottomCard>
            </Rows>
          </View>
          <Row>
            <Widgets>
              <Layout name="layout" size={20} color="#70787F" />
            </Widgets>
            <Widgets>
              <Icon name="pencil" size={20} color="#70787F" />
            </Widgets>
            <Widgets>
              <Icon name="star" size={20} color="#70787F" />
            </Widgets>
            <Widgets>
              <Icons name="clipboard-list" size={20} color="#70787F" />
            </Widgets>
            <Widgets>
              <Icons name="user-plus" size={20} color="#70787F" />
            </Widgets>
          </Row>
        </CardContainer>
      </Card>
    </CardC>
  );
}

const CardC = styled.View`
  width: 320px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 10px;
`;
const Row2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 2px;
  padding-vertical: 15px;
`;
const Rows = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 10px;
`;
const TitleCard = styled.Text`
  color: #fff;
  border-radius: 10px;
  padding-horizontal: 15px;
  padding-vertical: 2px;
  margin-horizontal: 8px;
`;
const CardContainer = styled.View`
  width: 100%;
  margin-top: -11%;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 180px;
`;

const CourseTitle = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
`;
const TextStart = styled.Text`
  color: #ffc107;
  font-size: 20px;
  padding-horizontal: 5px;
`;

const View = styled.View``;

const ButtonSearch = styled.TouchableOpacity`
  padding: 0px;
`;
const Widgets = styled.TouchableOpacity`
  padding: 10px;
  margin-vertical: 10px;
  border-radius: 100px;
  background-color: #eaeaf5;
  width: 45px;
  align-items: center;
`;
const TextBottomCard = styled.Text`
  color: #70787f;
  font-size: 15px;
`;
export default CourseCard;
