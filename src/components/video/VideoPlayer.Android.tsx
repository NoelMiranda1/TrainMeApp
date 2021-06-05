import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import styled from 'styled-components/native';
import Video, {
  OnSeekData,
  OnLoadData,
  OnProgressData,
} from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import PlayerControls from './VideoOptions/PlayerControl';
import ProgressBar from './VideoOptions/ProgressBar';

interface State {
  fullscreen: boolean;
  play: boolean;
  currentTime: number;
  duration: number;
  showControls: boolean;
}

function VideoPlayer() {
  const videoRef = React.createRef<Video>();
  const [state, setState] = useState<State>({
    fullscreen: false,
    play: false,
    currentTime: 0,
    duration: 0,
    showControls: true,
  });
  Orientation.lockToLandscapeLeft();
  // useEffect(() => {
  //   Orientation.addOrientationListener(handleOrientation);

  //   return () => {
  //     Orientation.removeOrientationListener(handleOrientation);
  //   };
  // }, []);

  // const handleOrientation = (orientation: string) => {
  //   orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
  //     ? (setState(s => ({...s, fullscreen: true})), StatusBar.setHidden(true))
  //     : (setState(s => ({...s, fullscreen: false})),
  //       StatusBar.setHidden(false));
  // };

  const handleFullscreen = () => {
    state.fullscreen
      ? Orientation.unlockAllOrientations()
      : Orientation.lockToLandscapeLeft();
  };

  const handlePlayPause = () => {
    // If playing, pause and show controls immediately.
    if (state.play) {
      setState({...state, play: false, showControls: true});
      return;
    }

    setState({...state, play: true});
    setTimeout(() => setState(s => ({...s, showControls: false})), 2000);
  };

  const skipBackward = () => {
    videoRef.current.seek(state.currentTime - 15);
    setState({...state, currentTime: state.currentTime - 15});
  };

  const skipForward = () => {
    videoRef.current.seek(state.currentTime + 15);
    setState({...state, currentTime: state.currentTime + 15});
  };

  const onSeek = (data: OnSeekData) => {
    videoRef.current.seek(data.seekTime);
    setState({...state, currentTime: data.seekTime});
  };

  const onLoadEnd = (data: OnLoadData) => {
    setState(s => ({
      ...s,
      duration: data.duration,
      currentTime: data.currentTime,
    }));
  };

  const onProgress = (data: OnProgressData) => {
    setState(s => ({
      ...s,
      currentTime: data.currentTime,
    }));
  };

  const onEnd = () => {
    setState({...state, play: false});
    videoRef.current.seek(0);
  };

  const showControls = () => {
    state.showControls
      ? setState({...state, showControls: false})
      : setState({...state, showControls: true});
  };
  return (
    <Container>
      <Controls onPress={showControls}>
        <Frag>
          <Video
            ref={videoRef}
            source={{
              uri:
                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            }}
            style={state.fullscreen ? styles.fullscreenVideo : styles.video}
            controls={false}
            resizeMode={'contain'}
            onLoad={onLoadEnd}
            onProgress={onProgress}
            onEnd={onEnd}
            paused={!state.play}
          />
          {state.showControls && (
            <ControlsOverlay>
              {/* <FullScreenBtn
                onPress={handleFullscreen}
                hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                {state.fullscreen ? (
                  <Icon name="minimize" size={30} color="#8A9197" />
                ) : (
                  <Icon name="maximize" size={30} color="#8A9197" />
                )}
              </FullScreenBtn> */}
              <PlayerControls
                onPlay={handlePlayPause}
                onPause={handlePlayPause}
                playing={state.play}
                showPreviousAndNext={false}
                showSkip={true}
                skipBackwards={skipBackward}
                skipForwards={skipForward}
              />
              <ProgressBar
                currentTime={state.currentTime}
                duration={state.duration > 0 ? state.duration : 0}
                onSlideStart={handlePlayPause}
                onSlideComplete={handlePlayPause}
                onSlideCapture={onSeek}
              />
            </ControlsOverlay>
          )}
        </Frag>
      </Controls>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  border-radius: 10px;
  padding: 5px;
`;
const Controls = styled.TouchableWithoutFeedback`
  border-radius: 10px;
`;
const Frag = styled.View``;
const ControlsOverlay = styled.View`
  padding: 15px;
  border-radius: 10px;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #000000c4;
  justify-content: space-between;
`;
const FullScreenBtn = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
`;
const styles = StyleSheet.create({
  video: {
    borderRadius: 10,
    padding: 5,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    borderRadius: 10,
    padding: 5,
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});

export default VideoPlayer;
