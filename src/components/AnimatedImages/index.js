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

export default ({product})=> {
  const navigation= useNavigation()
  const route= useRoute()
  const width = Dimensions.get('window').width;
  // console.log(product.secondaryPhotos)
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  return (
    <ImageWrapper>
    <ImageList
      data={product.secondaryPhotos ? product.secondaryPhotos : null}
      horizontal
      renderItem={
        ({item}) =>(    //in this item, it's the url of secondary photos. they were saved at 
                          // data of flatlist.
          <Image source={{uri:item}} 
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
        {product.secondaryPhotos
          ? product.secondaryPhotos?.map((data, index) => {
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
                    backgroundColor: 'gray',
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