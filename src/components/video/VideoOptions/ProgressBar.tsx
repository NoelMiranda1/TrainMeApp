import React from 'react';
import Slider from '@react-native-community/slider';
import styled from 'styled-components/native';
import {TRAINME_COLOR} from '@constants/theme';
interface Props {
  currentTime: number;
  duration: number;
  onSlideCapture: (data: {seekTime: number}) => void;
  onSlideStart: () => void;
  onSlideComplete: () => void;
}

function ProgressBar({
  currentTime,
  duration,
  onSlideCapture,
  onSlideStart,
  onSlideComplete,
}: Props) {
  const getMinutesFromSeconds = (time: number) => {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  };

  const handleOnSlide = (time: number) => {
    onSlideCapture({seekTime: time});
  };

  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);
  return (
    <Container>
      <Wapper>
        <TextRight>{position}</TextRight>
        <Text> / </Text>
        <TextLeft>{fullDuration}</TextLeft>
      </Wapper>
      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        step={1}
        onValueChange={handleOnSlide}
        onSlidingStart={onSlideStart}
        onSlidingComplete={onSlideComplete}
        minimumTrackTintColor={'#FFFFFF'}
        maximumTrackTintColor={'#FAFAFA'}
        thumbTintColor={TRAINME_COLOR}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
`;
const Wapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-horizontal: 5px;
  width: 100%;
`;
const Text = styled.Text`
  color: #fff;
`;
const TextRight = styled.Text`
  font-size: 16px;
  color: #fff;
  padding-left: 10px;
`;
const TextLeft = styled.Text`
  font-size: 16px;
  color: #fff;
  padding-right: 10px;
`;

export default ProgressBar;
