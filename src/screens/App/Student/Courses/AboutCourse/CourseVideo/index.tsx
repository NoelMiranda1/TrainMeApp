import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import Orientation from 'react-native-orientation-locker';
import VideoPlayer from '@components/video/VideoPlayer.Android';
import VideoPlayerIos from '@components/video/VideoPlayer.Ios';
import BackButto from '@components/common/BackButton';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function index() {
  Orientation.lockToLandscapeLeft();
  useEffect(() => {
    Orientation.lockToLandscapeLeft();
  }, []);
  const navigation = useNavigation();
  const handleNext = () => {
    const source =
      'https://blog.engineering.publicissapient.fr/wp-content/uploads/2019/06/cheat-sheet-xebia.pdf';
    navigation.navigate('Pdf', {url: source});
  };
  return (
    <Content>
      <Row>
        <BackButto />
        <Next>
          <Title>Video Infromativo</Title>
          <Button
            onPress={handleNext}
            icon={
              <Icon
                style={{paddingLeft: 5}}
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            iconRight={true}
            title="Siguiente"
          />
        </Next>
      </Row>
      <Main>
        {Platform.OS === 'ios' ? <VideoPlayerIos /> : <VideoPlayer />}
      </Main>
    </Content>
  );
}
const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
`;
const Content = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;
const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-vertical: 5px;
  padding-horizontal: 10px;
  align-items: center;
  margin-top: 10px;
`;
const Main = styled.View`
  flex: 1;
  margin: 10px;
`;

const Next = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
`;

export default index;
