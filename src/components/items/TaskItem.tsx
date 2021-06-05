import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Ionicons';
import {TRAINME_COLOR} from '@constants/theme';
import {Button} from 'react-native-elements';

interface Item {
  item: {id: number; title: string; date: string; hour: string};
}
function TaskItem(props: Item) {
  const {item} = props;
  return (
    <Content key={item.id}>
      <Container>
        <TitleMeet>{item.title}</TitleMeet>
        <Row>
          <Icon name="calendar-o" size={20} color={TRAINME_COLOR} />
          <TitleInfo>{item.date}</TitleInfo>
        </Row>
        <Row2>
          <Space>
            <Icons name="time-outline" size={20} color={TRAINME_COLOR} />
            <TitleInfo>{item.hour}</TitleInfo>
          </Space>
          <Button
            buttonStyle={{
              width: 100,
              borderRadius: 8,
            }}
            title="Ingresar"
          />
        </Row2>
      </Container>
    </Content>
  );
}
const Row = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;
const Row2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: 10px;
`;

const Content = styled.View`
width:100%
padding:10px
`;
const Container = styled.View`
  width: 95%;
  border-width: 1px;
  border-color: #000;
  padding: 15px;
  border-radius: 10px;
`;
const TitleMeet = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: 18px;
  padding-left: 10px;
`;
const Space = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TitleInfo = styled.Text`
  color: #000;
  font-size: 15px;
  padding-left: 10px;
  font-weight: 700;
`;
export default TaskItem;
