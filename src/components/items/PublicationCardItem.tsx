import React from 'react';
import {Card} from 'react-native-elements';
import styled from 'styled-components/native';
import {Avatar, Button} from 'react-native-elements';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TRAINME_COLOR} from '@constants/theme';
interface ScreenProps {
  item: {
    id: number;
    docente: string;
    titleCourse: string;
    date: string;
    titleResumen: string;
    resumen: string;
    activity: {
      activity: boolean;
      name: string;
      image: boolean;
      map: Function;
    };
    like: number;
    comment: string;
  };
}
function PublicationCardItem({item}: ScreenProps) {
  const {
    id,
    docente,
    titleCourse,
    date,
    titleResumen,
    resumen,
    activity,
    like,
    comment,
  } = item;
  return (
    <Card
      containerStyle={{
        padding: 0,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ACACAC',
        paddingBottom: 10,
      }}>
      <Row>
        <Avatar
          size="medium"
          rounded
          source={{
            uri:
              'https://static.wikia.nocookie.net/73d03d42-6704-4959-b9be-bfd750a37c71',
          }}
        />
        <ContainerHeader>
          <CourseTitle>{docente}</CourseTitle>
          <ContainerHeaderText style={{paddingHorizontal: 10}}>
            <NameCourse>{titleCourse} - </NameCourse>
            <NameCourse>{date}</NameCourse>
          </ContainerHeaderText>
        </ContainerHeader>
      </Row>
      <Card.Divider style={{borderColor: '#ACACAC', borderWidth: 0.7}} />
      <CardContainer>
        <TitleResumen>{titleResumen}</TitleResumen>
        <TextResumen numberOfLines={3}>{resumen}</TextResumen>
        {activity.map((a: any) => (
          <Item key={id}>
            {a.activity === true ? (
              <Button
                buttonStyle={{
                  width: 200,
                  margin: 10,
                  backgroundColor: TRAINME_COLOR,
                }}
                title={a.name}
              />
            ) : (
              <Content>
                <Image source={{uri: a.image}} resizeMode="contain" />
              </Content>
            )}
          </Item>
        ))}
      </CardContainer>
      <Card.Divider style={{borderColor: '#ACACAC', borderWidth: 0.7}} />
      <Rows>
        <Widgets>
          <Icons name="like2" size={15} color="#fff" />
        </Widgets>
        <Job>{like} </Job>
        <Icon name="comment-text" size={25} color={TRAINME_COLOR} />
        <Job> {comment}</Job>
      </Rows>
      <Rows>
        <Action>
          <Icons name="like2" size={25} color="#70787F" />
        </Action>
        <Job>Me Gusta </Job>
        <Action>
          <Icon name="comment-text" size={25} color="#70787F" />
        </Action>
        <Job> Comentar</Job>
      </Rows>
    </Card>
  );
}
const Content = styled.View`
  align-items: center;
`;
const Job = styled.Text`
  font-size: 18px;
`;
const Image = styled.Image`
  width: 90%;
  height: 200px;
  border-radius: 20px;
  padding: 10px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

const Rows = styled.View`
  flex-direction: row;
  align-items: center;
`;
const CourseTitle = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
`;
const ContainerHeaderText = styled.View`
  flex-direction: row;
  align-items: center;
`;
const ContainerHeader = styled.View``;

const NameCourse = styled.Text`
  color: #474747;
  font-size: 17px;
`;
const TitleResumen = styled.Text`
  color: #70787f;
  font-size: 18px;
  font-weight: bold;
  padding: 0px 10px;
`;
const TextResumen = styled.Text`
  color: #93999f;
  font-size: 15px;
  padding: 10px;
`;
const CardContainer = styled.View`
  width: 100%;
`;
const Widgets = styled.View`
  padding: 10px;
  margin: 10px;
  border-radius: 100px;
  background-color: ${TRAINME_COLOR};
  align-items: center;
`;
const Action = styled.View`
  align-items: center;
  padding-horizontal: 10px;
`;
const Item = styled.View``;
export default PublicationCardItem;
