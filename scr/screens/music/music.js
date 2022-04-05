import React, {useEffect, useRef, useState} from "react";
import { Text, SafeAreaView, TouchableOpacity, View, Dimensions, Image, FlatList, Animated  } from "react-native";
import Slider from "@react-native-community/slider";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TrackPlayer, {Capability, Event, RepeatMode, State, usePlaybackState, useProgress, useTrackPlayerEvents,} from 'react-native-track-player';
import styles from "./music_styles";
import songs from "./data_music";

const {width, height} = Dimensions.get('window');

const setUpPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
    });
    await TrackPlayer.add(songs);
  } catch (e) {
    console.log(e);
  }
};

const togglePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if(currentTrack != null) {
    if (playBackState == State.Paused) {
      await TrackPlayer.play();
    } else {
      await TrackPlayer.pause();
    }
  }
};


const MusicPlayer = () => {

  const playBackState = usePlaybackState();
  const progress = useProgress();

  const scrollX = useRef(new Animated.Value(0)).current;

  const [songIndex, setSongIndex] = useState(0);

  const songSlider = useRef(null);

  const [trackTitle, setTrackTitle] = useState();
  const [trackArtist, setTrackArtist ] = useState ();
  const [trackArtwork, setTrackArtwork] = useState();

  const [repeatMode, setRepeatMode] =useState('off');

  useTrackPlayerEvents ([Event.PlaybackTrackChanged],async event => {
    if(event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artist, artwork} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
    }
  });

  const repeatIcon = () => {
    if (repeatMode == 'off') {
      return 'repeat-off';
    }
    if (repeatMode == 'track') {
      return 'repeat-once';
    }
    if (repeatMode == 'repeat') {
      return 'repeat';
    }
  };

  const changeRepeatMode = () => {
    if (repeatMode == 'off') {
      TrackPlayer.setRepeatMode(RepeatMode.Track);
      setRepeatMode('track');
    }
    if (repeatMode == 'track') {
      TrackPlayer.setRepeatMode(RepeatMode.Queue);
      setRepeatMode('repeat');
    }
    if (repeatMode == 'repeat') {
      TrackPlayer.setRepeatMode(RepeatMode.Off);
     setRepeatMode('off');
    }
  };

  const skipTo = async trackId => {
    await TrackPlayer.skip(trackId);
  };

  useEffect(() => {
    setUpPlayer();
    scrollX.addListener(({value}) => {
      console.log('Scroll X', scrollX);
      const index = Math.round (value / width);
      skipTo(index);
      setSongIndex(index);
    });

    return () => {
      scrollX.removeAllListeners();
      TrackPlayer.destroy();
    }
  }, []);

  const skipToNext = () => {
    songSlider.current.scrollToOffset({
      offset:(songIndex + 1) * width,
    })
  }

  const skipPrevious = () => {
    songSlider.current.scrollToOffset({
      offset:(songIndex - 1) * width,
    })
  }

  const renderSongs = ({index, item}) => {
    return (
      <Animated.View style={{width: width, justifyContent: 'center', alignItems:'center'}}>
        <View style={styles.artworkWrapper}>
            <Image style={styles.artworkImag} resizeMode={"cover"} source={trackArtwork}/>
        </View>
      </Animated.View>
    );
  }

  
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
        <View style={{width: width}}>
          <Animated.FlatList
            ref={songSlider}
            data={songs}
            renderItem={renderSongs}
            keyExtractor={(item)=>item.id}
            horizontal
            pagingEnabled
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: {
                contentOffset: {x: scrollX}
              }}],
              {useNativeDriver: true}
            )}
          />
        </View>

          <View>
            <Text style={styles.title}>{trackTitle}</Text>
            <Text style={styles.artist}>{trackArtist}</Text>
          </View>

          <View>
            <Slider
              style={styles.progressContainer}
              value={progress.position}
              minimumValue={0}
              maximumValue={progress.duration}
              thumbTintColor="#FFD369"
              minimumTrackTintColor="#FFD369"
              maximumTrackTintColor="#fff"
              onSlidingComplete={async value => {
                await TrackPlayer.seekTo(value);
              }}
            />
          </View>

          <View style={styles.lableContainer}>
            <Text style={styles.lableContainerTxt}>
              {new Date(progress.position * 1000).toLocaleTimeString().substring(3)}
            </Text>
            <Text style={styles.lableContainerTxt}>
            {new Date((progress.duration - progress.position) * 1000).toLocaleTimeString().substring(3)}
            </Text>
          </View>

          <View style={styles.musicControlls}>
            <TouchableOpacity onPress={skipPrevious}>
              <Ionicons name="play-skip-back-outline" size={35} color="#FFD369" />
            </TouchableOpacity >
            <TouchableOpacity onPress={()=>togglePlayBack(playBackState)}>
              <Ionicons name={
                playBackState === State.Playing
                ? 'ios-pause-circle'
                : 'ios-play-circle'} size={75} color="#FFD369" />
            </TouchableOpacity>
            <TouchableOpacity onPress={skipToNext}>
              <Ionicons name="play-skip-forward-outline" size={35} color="#FFD369" />
            </TouchableOpacity>
          </View>

        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={()=>{}}>
            <Ionicons name="heart-outline" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={changeRepeatMode}>
            <MaterialCommunityIcons name={repeatIcon()} size={30} color={repeatMode !== 'off' ? '#FFD369' : '#888888'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
           <Ionicons name="share-outline" size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{}}>
            <Ionicons name="ellipsis-horizontal" size={30} color="#888888" />
          </TouchableOpacity>

        </View>

        
      </SafeAreaView>
  );
};

export default MusicPlayer;