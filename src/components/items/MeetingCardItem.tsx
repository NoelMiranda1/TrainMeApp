import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import {TRAINME_COLOR} from '@constants/theme';
import {Button} from 'react-native-elements';

interface Item {
  item: {id: number; corse: string; meetings: Array<Subitem>};
}
interface Subitem {
  title: string;
  date: string;
  horaInit: string;
  horaFin: string;
}
function MeetingCardItem(props: Item) {
  const {item} = props;
  return (
    <Content key={item.id}>
      <Title>{item.corse}</Title>
      <Content>
        {item.meetings.map((meet: Subitem, i: number) => {
          return (
            <Container key={i}>
              <TitleMeet>{meet.title}</TitleMeet>
              <Row>
                <Icon name="calendar-o" size={20} color={TRAINME_COLOR} />
                <TitleInfo>{meet.date}</TitleInfo>
              </Row>
              <Row>
                <Icons name="time-outline" size={20} color={TRAINME_COLOR} />
                <TitleInfo>{meet.horaInit}</TitleInfo>
                <TitleInfo>{meet.horaFin}</TitleInfo>
              </Row>
              <Button
                buttonStyle={{
                  width: '25%',
                  margin: 10,
                  borderRadius: 8,
                  backgroundColor: TRAINME_COLOR,
                }}
                title="Ingresar"
              />
            </Container>
          );
        })}
      </Content>
    </Content>
  );
}

const Link = styled(Button)`
  width: 25%;
  margin: 10px;
  background-color: #056af3;
  border-radius: 8px;
`;

const Row = styled.View`
  flex-direction: row;
  padding: 10px;
`;

const Content = styled.View`
width:100%
padding:10px
`;
const Container = styled.View`
  width: 95%;
  border-width: 1px;
  border-color: #000;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
`;
const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
`;
const TitleMeet = styled.Text`
  color: #000;
  font-weight: 700;

  font-size: 18px;
  padding-left: 10px;
`;

const TitleInfo = styled.Text`
  color: #000;
  font-size: 15px;
  padding-left: 10px;
  font-weight: 700;
`;
export default MeetingCardItem;
