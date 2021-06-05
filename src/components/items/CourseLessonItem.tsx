import React from 'react';
import styled from 'styled-components/native';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {Avatar, Badge} from 'react-native-elements';
function CourseLessonItem({item}: any) {
  const {id, title, type} = item;
  const navigation = useNavigation();
  return (
    <>
      <Card
        containerStyle={{
          width: '90%',
          borderRadius: 15,
          borderColor: '#C8CBCE',
          borderWidth: 2,
          bottom: 10,
        }}>
        <Separator>
          <Row key={id}>
            {type === 'Audio' ? (
              <View>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://cdn.pixabay.com/photo/2017/07/09/20/48/speaker-2488096_960_720.png',
                  }}
                  size="medium"
                  onPress={() => navigation.navigate('CourseVideo')}
                  activeOpacity={0.7}
                />
                <Badge
                  status="success"
                  containerStyle={{
                    position: 'absolute',
                    marginTop: 35,
                    marginLeft: 35,
                  }}
                  value="✔"
                />
              </View>
            ) : (
              <View>
                <Avatar
                  rounded
                  source={{
                    uri:
                      'https://icons.iconarchive.com/icons/martz90/circle/512/video-camera-icon.png',
                  }}
                  size="medium"
                  onPress={() => navigation.navigate('CourseVideo')}
                  activeOpacity={0.7}
                />
                <Badge
                  status="success"
                  containerStyle={{
                    position: 'absolute',
                    marginLeft: 35,
                    marginTop: 35,
                  }}
                  value="✔"
                />
              </View>
            )}

            <CourseDescription>
              <CourseTitle key={id}>
                {id}. {title}
              </CourseTitle>
              <CourseSubTitle>{type}</CourseSubTitle>
            </CourseDescription>
          </Row>
          <Divider />
        </Separator>
      </Card>
    </>
  );
}
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  padding-vertical: 10px;
`;
const View = styled.View``;
const CourseTitle = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
`;
const CourseSubTitle = styled.Text`
  color: #798087;
  font-size: 12px;
  font-weight: 700;
  padding-left: 10px;
  padding-top: 5px;
`;
const CourseDescription = styled.View`
  padding-left: 10px;
`;
const Divider = styled.View`
  border-width: 1px;
  border-color: #f5f5f5;
`;
const Separator = styled.View`
  padding-vertical: 10px;
`;
export default CourseLessonItem;
