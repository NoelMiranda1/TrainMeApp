import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Entypo';
// import styled from 'styled-components/native';

interface Props {
  playing: boolean;
  showPreviousAndNext: boolean;
  showSkip: boolean;
  previousDisabled?: boolean;
  nextDisabled?: boolean;
  onPlay: () => void;
  onPause: () => void;
  skipForwards?: () => void;
  skipBackwards?: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

function PlayerControls({
  playing,
  showPreviousAndNext,
  showSkip,
  previousDisabled,
  nextDisabled,
  onPlay,
  onPause,
  skipForwards,
  skipBackwards,
  onNext,
  onPrevious,
}: Props) {
  return (
    <View style={styles.wrapper}>
      {showPreviousAndNext && (
        <TouchableOpacity
          style={[
            styles.touchable,
            previousDisabled && styles.touchableDisabled,
          ]}
          onPress={onPrevious}
          disabled={previousDisabled}>
          <Icons name="controller-jump-to-start" size={40} color="#8A9197" />
        </TouchableOpacity>
      )}

      {showSkip && (
        <TouchableOpacity style={styles.touchable} onPress={skipBackwards}>
          <Icon name="skip-back" size={40} color="#8A9197" />
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.touchable}
        onPress={playing ? onPause : onPlay}>
        {playing ? (
          <Icon name="pause" size={40} color="#8A9197" />
        ) : (
          <Icon name="play" size={40} color="#8A9197" />
        )}
      </TouchableOpacity>

      {showSkip && (
        <TouchableOpacity style={styles.touchable} onPress={skipForwards}>
          <Icon name="skip-forward" size={40} color="#8A9197" />
        </TouchableOpacity>
      )}

      {showPreviousAndNext && (
        <TouchableOpacity
          style={[styles.touchable, nextDisabled && styles.touchableDisabled]}
          onPress={onNext}
          disabled={nextDisabled}>
          <Icons name="controller-next" size={40} color="#8A9197" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 3,
  },
  touchable: {
    padding: 5,
  },
  touchableDisabled: {
    opacity: 0.3,
  },
});

export default PlayerControls;
