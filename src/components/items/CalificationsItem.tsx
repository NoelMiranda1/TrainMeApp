import React from 'react';
import styled from 'styled-components/native';
import {TRAINME_COLOR} from '@constants/theme';

interface Item {
  item: {id: number; corse: string; evaluations: Array<Subitem>};
}
interface Subitem {
  title: string;
  date: string;
  evaluationsFinish: number;
  correct: string;
  note: string;
}
function MeetingCardItem(props: Item) {
  const {item} = props;
  return (
    <Content>
      <Title>{item.corse}</Title>
      <Content>
        {item.evaluations.map((meet: Subitem, i: number) => {
          return (
            <Container key={i}>
              <Row>
                <TitleCalification>{meet.title}</TitleCalification>
                <Circle>
                  <Text>{meet.note}</Text>
                </Circle>
              </Row>
              <Row2>
                <TextHardcode>Fecha de inicio de curso:</TextHardcode>
                <TitleInfo>{meet.date}</TitleInfo>
              </Row2>
              <Row2>
                <TextHardcode>Evaluaciones Realizadas:</TextHardcode>
                <TitleInfo>{meet.evaluationsFinish}</TitleInfo>
              </Row2>
              <Row2>
                <TextHardcode>Cantidad de preguntas Correctas:</TextHardcode>
                <TitleInfo>{meet.correct}</TitleInfo>
              </Row2>
              <Row2>
                <TextHardcode>Nota:</TextHardcode>
                <TitleInfo>{meet.note}</TitleInfo>
              </Row2>
            </Container>
          );
        })}
      </Content>
    </Content>
  );
}
const Row2 = styled.View`
  flex-direction: row;
  padding: 10px;
`;
const Row = styled.View`
  flex-direction: row;
  padding: 10px;
  background-color: ${TRAINME_COLOR};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  justify-content: space-between;
  align-items: center;
`;
const Circle = styled.View`
  width: 50px;
  height: 50px;
  border-width: 1.5px;
  border-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
const Content = styled.View`
    flex:1;
    width:100%
    padding:10px
`;
const Container = styled.View`
  width: 95%;
  border-width: 1px;
  border-color: #000;
  margin: 5px;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-bottom: 15px;
`;
const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding-left: 15px;
`;
const TitleCalification = styled.Text`
  color: #fff;
  font-size: 18px;
  width: 75%;
`;
const Text = styled.Text`
  color: #fff;
`;
const TitleInfo = styled.Text`
  color: #70787f;
  font-size: 15px;
  padding-left: 10px;
  font-weight: 700;
`;
const TextHardcode = styled.Text`
  color: #838a90;
  font-size: 15px;
`;
export default MeetingCardItem;
