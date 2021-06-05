import React from 'react';
import styled from 'styled-components/native';
import Video from 'react-native-video';
import {StyleSheet} from 'react-native';

function VideoPlayer() {
  return (
    <Container>
      <VideoContainer
        source={{
          uri:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        style={styles.video}
        controls={true}
        resizeMode={'cover'}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  video: {
    height: 250,
    width: '100%',
    backgroundColor: 'black',
  },
});

const VideoContainer = styled(Video)`
  height: 100%;
  width: 100%;
  background-color: black;
`;
const Container = styled.View`
  flex: 1;
`;

export default VideoPlayer;
