import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CourseLesson from './CourseLessonItem';
interface Item {
  item: {image: string; title: string; lesson: Array<any>};
}

function CourseDetail({item}: Item) {
  const navigation = useNavigation();
  const {image, title, lesson} = item;
  const [acordion, setAcordion] = useState(false);
  console.log('ITEM', lesson);
  return (
    <Card
      containerStyle={{
        padding: 0,
        borderWidth: 1,
        borderColor: '#727272',
        borderRadius: 10,
        width: 300,
        marginTop: 35,
        paddingBottom: 20,
      }}>
      <Container>
        <Circle>
          <CircleColor>
            <CircleTitle>100%</CircleTitle>
          </CircleColor>
        </Circle>
      </Container>
      <Card.Image
        style={styles.image}
        resizeMode="contain"
        source={{uri: image}}
      />
      <Card.Divider style={styles.divider} />
      <Row>
        <CourseTitle>{title}</CourseTitle>
        <Action onPress={() => setAcordion(prevState => !prevState)}>
          <Icon
            name={acordion ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#000"
          />
        </Action>
      </Row>
      {acordion ? (
        <ContentFlat>
          {lesson.map(e => {
            console.log('e=>', e);
            return <CourseLesson item={e} />;
          })}
        </ContentFlat>
      ) : null}
    </Card>
  );
}

const ContentFlat = styled.View`
  align-items: center;
`;
const styles = StyleSheet.create({
  image: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  divider: {
    borderColor: '#727272',
    borderWidth: 0.5,
  },
});
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
  align-items: center;
`;
const Container = styled.View`
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  z-index: 999999;
  position: absolute;
  top: 50px;
`;
const Circle = styled.View`
  position: absolute;
  background-color: #fff;
  border-radius: 100px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;
const CircleColor = styled.View`
  border-width: 2px;
  border-color: #06d6a0;
  background-color: #fff;
  border-radius: 100px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
const CircleTitle = styled.Text`
  color: #aaaeb4;
  font-size: 20px;
`;
const CourseTitle = styled.Text`
  color: #000;
  font-size: 18px;
`;
const Action = styled.TouchableOpacity``;

export default CourseDetail;
