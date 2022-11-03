import { 
  Image,
  Dimensions,
  Animated,
 } from 'react-native'
import React from 'react'
import {
  ImageWrapper,
  ImageList,
  AnimatedLines
} from './styles'

import { useNavigation } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native'

export default ({item})=> {
  const navigation= useNavigation()
  const route= useRoute()
  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  return (
    <ImageWrapper>
    <ImageList
      data={item.productImageList ? item.productImageList : null}
      horizontal
      renderItem={
        ({item}) =>(
          <Image source={item} 
          style={{
            width:385,
            height:260,
            resizeMode:'contain',
          }}
          ></Image>)}
          
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
          snapToInterval={width}
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
            )}
            />
  
      <AnimatedLines>
        {item.productImageList
          ? item.productImageList.map((data, index) => {
              let opacity = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  key={index}
                  style={{
                    width: '16%',
                    height: 2.4,
                    backgroundColor: '#FFF',
                    opacity,
                    marginHorizontal: 4,
                    borderRadius: 100,
                    
                  }}></Animated.View>
                  );
                })
                : null}
      </AnimatedLines>
  </ImageWrapper>

  )
}