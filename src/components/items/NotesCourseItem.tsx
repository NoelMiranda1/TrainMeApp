import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TRAINME_COLOR} from '@constants/theme';
import {Button} from 'react-native-elements';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import TextEditor from '../common/TextEditor';
interface Porps {
  item: {
    id: number;
    course: string;
    modulo: string;
    resumen: string;
    date: string;
  };
}

function NotesCourseItem(props: Porps) {
  const {item} = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const toggleModal = (): void => {
    setIsVisible(prevState => !prevState);
    console.log('state=>', isVisible);
  };

  return (
    <>
      <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
        <ModalContainer>
          <Row>
            <Position2 style={{color: '#000', fontWeight: 'bold'}}>
              {item.course} {`>`} Modulo {item.modulo}
            </Position2>
            <Close onPress={() => toggleModal()}>
              <Icon name="close" size={28} style={{position: 'absolute'}} />
            </Close>
          </Row>
          <Divider />
          <ModalContent>
            <ActionModal>
              <SubTitle>{item.course}</SubTitle>
              <Date>{item.date}</Date>
              <TextEditor resumen={item.resumen} />
            </ActionModal>
          </ModalContent>
          <Actions>
            <Row>
              <Button
                type="outline"
                containerStyle={{
                  paddingHorizontal: 10,
                  bottom: 70,
                }}
                buttonStyle={{
                  borderColor: '#000',
                }}
                icon={
                  <Icon
                    name="delete"
                    size={15}
                    color={TRAINME_COLOR}
                    style={{paddingHorizontal: 5}}
                  />
                }
                onPress={() => {
                  toggleModal();
                }}
                title="Eliminar"
                titleStyle={{color: '#000'}}
              />
              <ModalContent>
                <Rows>
                  <Button
                    containerStyle={{paddingHorizontal: 10, bottom: 70}}
                    type="outline"
                    onPress={() => {
                      toggleModal();
                    }}
                    title="cerrar"
                    titleStyle={{color: '#000'}}
                    buttonStyle={{
                      borderColor: '#000',
                    }}
                  />
                  <Button
                    containerStyle={{paddingHorizontal: 10, bottom: 70}}
                    style={{width: '10%'}}
                    onPress={() => {
                      toggleModal();
                    }}
                    title="Guardar"
                  />
                </Rows>
              </ModalContent>
            </Row>
          </Actions>
        </ModalContainer>
      </Modal>
      <Content>
        <Container>
          <Position>
            {item.course} {`>`} Modulo {item.modulo}
          </Position>
          <Title>{item.course}</Title>
          <Resumen numberOfLines={6}>{item.resumen}</Resumen>
          <Row>
            <Date>{item.date}</Date>
            <Button
              buttonStyle={{backgroundColor: TRAINME_COLOR}}
              onPress={toggleModal}
              title="Ver mas"
            />
          </Row>
        </Container>
      </Content>
    </>
  );
}

const Actions = styled.View`
  margin-top: 5%;
`;

const Divider = styled.View`
  border-width: 1px;
  border-color: #000;
  width: 100%;
`;

const Close = styled.TouchableOpacity`
  padding: 10px;
`;
const ActionModal = styled.View`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 30px;
`;
const ModalContainer = styled.View`
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  height: 400px;
`;

const ModalContent = styled.View``;

const Content = styled.View`
  width:100%
  padding:10px
`;
const Date = styled.Text`
  color: #000;
  font-size: 18px;
  padding-vertical: 10px;
  padding-left: 10px;
  font-weight: bold;
`;
const Position = styled.Text`
  color: ${TRAINME_COLOR};
  font-size: 15px;
  padding-left: 20px;
  padding-bottom: 10px;
`;

const Position2 = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: bold;
`;
const Title = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
  padding-horizontal: 20px;
  padding-bottom: 10px;
`;

const SubTitle = styled.Text`
  color: ${TRAINME_COLOR};
  font-size: 18px;
  font-weight: bold;
  padding-top: 10px;
`;
const Resumen = styled.Text`
  color: #000;
  font-size: 16px;
  padding-horizontal: 20px;
  padding-bottom: 10px;
`;

const Container = styled.View`
  width: 95%;
  border-width: 1px;
  border-color: #000;
  margin: 5px;
  padding: 10px;
  border-radius: 10px;
`;
const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
  padding-bottom: 10px;
`;
const Rows = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
  padding-bottom: 10px;
`;
export default NotesCourseItem;
