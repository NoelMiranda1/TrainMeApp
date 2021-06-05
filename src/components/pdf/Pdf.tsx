import React from 'react';
import styled from 'styled-components/native';
import BackButton from '../common/BackButton';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';
import Pdf from 'react-native-pdf';
import Orientation from 'react-native-orientation-locker';

function PdfScreen() {
  Orientation.lockToPortrait();
  const route = useRoute();
  const urlResource = route.params?.url;
  return (
    <Content>
      <Row>
        <BackButton />
        <Next>
          <Title>Pdf sobre React</Title>
          {/* <Button
            onPress={() => console.log('Funcion')}
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
          /> */}
        </Next>
      </Row>
      <Main>
        <PdfView source={{uri: urlResource}} />
      </Main>
    </Content>
  );
}

const PdfView = styled(Pdf)`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #ddd;
`;
const Title = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 700;
  padding-left: 10px;
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
const Next = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
`;
const Content = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

const Main = styled.View`
  flex: 1;
  margin: 10px;
`;

export default PdfScreen;
