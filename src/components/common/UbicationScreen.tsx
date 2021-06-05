import React from 'react';
import styled from 'styled-components/native';

function UbicationScreen({title}) {
  const TextShort = title.substr(0, 18);
  return (
    <>
      <TextUbication>
        Mis cursos {'>'} {TextShort}... {'>'} Modulos
      </TextUbication>
    </>
  );
}

const TextUbication = styled.Text`
  margin-vertical: 5px
  color: #9fa4a8;
  font-size: 13px;
  font-weight: bold;
`;
export default UbicationScreen;
