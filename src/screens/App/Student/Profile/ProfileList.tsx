import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Card, Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TRAINME_COLOR} from '@constants/theme';
import TextEditor from '@components/common/TextEditor';
import ButtonProfile from '@components/utils/ProfileButton';
function ProfileList() {
  const [config, setConfig] = useState(false);

  const [nombre, setNombre] = useState<number>(50);
  const [profesion, setProfesion] = useState(70);
  const resumen: string = 'Tengo 15 años.Me gusta la robotica y soy musico';
  const [passwordEye, setPasswordEye] = useState(true);
  return (
    <Content>
      <ButtonProfile />
      <HeaderContainer>
        <Card
          containerStyle={{
            borderRadius: 10,
            padding: 0,
            paddingBottom: 10,
            borderColor: '#000',
            borderWidth: 0.8,
          }}>
          <Background
            source={{
              uri:
                'https://coverfiles.alphacoders.com/372/thumb-1920-37275.jpg',
            }}
            resizeMode="cover"
          />
          <Photo
            source={{
              uri:
                'https://pymstatic.com/44253/conversions/xavier-molina-medium.jpg',
            }}
            resizeMode="cover"
          />
          <ContentCard>
            <ContainerText>
              <TextContentTitle>Fernando correa</TextContentTitle>
              <TextContent>{resumen}</TextContent>
            </ContainerText>
          </ContentCard>
        </Card>
      </HeaderContainer>
      <TabCard>
        <Card
          containerStyle={{
            borderRadius: 10,
            borderColor: '#000',
            borderWidth: 0.8,
          }}>
          <Row>
            <Action onPress={() => setConfig(false)}>
              <Row>
                <Icon
                  name="file-text"
                  size={25}
                  color={config === false ? TRAINME_COLOR : 'black'}
                />
                <TextTab
                  style={{
                    color: config === false ? TRAINME_COLOR : 'black',
                  }}>
                  Perfil
                </TextTab>
              </Row>
            </Action>
            <Action onPress={() => setConfig(true)}>
              <Row>
                <Icon
                  name="gear"
                  size={25}
                  color={config ? TRAINME_COLOR : 'black'}
                />
                <TextTab style={{color: config ? TRAINME_COLOR : 'black'}}>
                  Configuración
                </TextTab>
              </Row>
            </Action>
          </Row>
        </Card>
      </TabCard>
      <Container>
        {config === false ? (
          <Card
            containerStyle={{
              borderRadius: 10,
              borderColor: '#000',
              borderWidth: 0.8,
              paddingBottom: 5,
              marginBottom: 10,
            }}>
            <TextTab>Perfil</TextTab>
            <Divider />
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 10,
                height: 45,
                paddingLeft: 10,
              }}
              labelStyle={{color: '#333333'}}
              label="Nombre"
              maxLength={50}
              rightIconContainerStyle={{
                padding: 0,
                backgroundColor: '#f2f2f2',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                height: '100%',
              }}
              rightIcon={() => <TextTab>{nombre}</TextTab>}
              onChangeText={() => {
                console.log(nombre);
                if (nombre > 0) {
                  setNombre(nombre - 1);
                }
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  if (nombre < 50) {
                    setNombre(nombre + 1);
                  }
                } else {
                  null;
                }
              }}
            />
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 10,
                height: 45,
                paddingLeft: 10,
              }}
              labelStyle={{color: '#333333'}}
              label="Titulo Profesional"
              maxLength={50}
              rightIconContainerStyle={{
                padding: 0,
                backgroundColor: '#f2f2f2',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                height: '100%',
              }}
              rightIcon={() => <TextTab>{profesion}</TextTab>}
              onChangeText={() => {
                console.log(profesion);
                if (profesion > 0) {
                  setProfesion(profesion - 1);
                }
              }}
              onKeyPress={({nativeEvent}) => {
                if (nativeEvent.key === 'Backspace') {
                  if (profesion < 70) {
                    setProfesion(profesion + 1);
                  }
                } else {
                  null;
                }
              }}
            />
            <SubTitel>Biografia</SubTitel>
            <TextEditorContainer>
              <TextEditor resumen={resumen} />
            </TextEditorContainer>
            <Row2>
              <Button
                containerStyle={{width: 100}}
                buttonStyle={{borderColor: '#000'}}
                titleStyle={{color: '#000'}}
                title="Descartar"
                type="outline"
              />
              <Button
                containerStyle={{width: 100}}
                buttonStyle={{backgroundColor: TRAINME_COLOR}}
                title="Guardar"
              />
            </Row2>
          </Card>
        ) : (
          <Card
            containerStyle={{
              borderRadius: 10,
              borderColor: '#000',
              borderWidth: 0.8,
              marginBottom: 20,
            }}>
            <TextTab>Configuracion de la cuenta</TextTab>
            <Divider />
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 10,
                paddingLeft: 10,
              }}
              labelStyle={{color: '#333333'}}
              label="Usuario"
            />
            <Input
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 10,
                paddingLeft: 10,
              }}
              labelStyle={{color: '#333333'}}
              label="Correo"
            />
            <Input
              secureTextEntry={passwordEye}
              inputContainerStyle={{
                borderWidth: 1,
                borderColor: '#000',
                borderRadius: 10,
                paddingLeft: 10,
                height: 50,
              }}
              labelStyle={{color: '#333333'}}
              label="Contraseña"
              rightIconContainerStyle={{
                padding: 0,
                backgroundColor: '#f2f2f2',
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                height: '100%',
              }}
              rightIcon={() => {
                return (
                  <PasswordChek
                    onPress={() => setPasswordEye(prevState => !prevState)}>
                    <Icon
                      name={passwordEye ? 'eye-slash' : 'eye'}
                      size={25}
                      color="#707070"
                    />
                  </PasswordChek>
                );
              }}
            />
            <ContainerSave>
              <Button
                containerStyle={{width: 100}}
                buttonStyle={{borderColor: '#000'}}
                titleStyle={{color: '#000'}}
                title="Descartar"
                type="outline"
              />
              <Button
                containerStyle={{width: 100}}
                buttonStyle={{backgroundColor: TRAINME_COLOR}}
                title="Guardar"
              />
            </ContainerSave>
          </Card>
        )}
      </Container>
    </Content>
  );
}
const Content = styled.ScrollView`
  height: 100%;
`;
const HeaderContainer = styled.View`
  width: 100%;
  margin-vertical: 10px;
`;
const TabCard = styled.View`
  width: 100%;
`;
const Background = styled.Image`
  width: 100%;
  height: 100px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const Photo = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 400px;
  left: 37%;
  top: -25%;
`;
const ContentCard = styled.View`
  align-items: center;
`;
const TextContentTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;
const TextContent = styled.Text`
  text-align: center;
  font-size: 16px;
  padding-horizontal: 25px;
`;
const ContainerText = styled.View`
  top: -70%;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Row2 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  top: -10%;
`;

const Action = styled.TouchableOpacity`
  margin-horizontal: 10px;
`;
const TextTab = styled.Text`
  padding-horizontal: 10px;
  font-size: 18px;
  font-weight: 400;
`;

const Container = styled.View`
  width: 100%;
`;

const Divider = styled.View`
  border-color: #000;
  border-width: 1px;
  margin-vertical: 10px;
  opacity: 0.4;
`;
const SubTitel = styled.Text`
  color: #333333;
  font-size: 15px;
  font-weight: bold;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const TextEditorContainer = styled.View`
  height: 250px;
`;

const ContainerSave = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;
const PasswordChek = styled.TouchableOpacity`
  padding-horizontal: 10px;
`;
export default ProfileList;
