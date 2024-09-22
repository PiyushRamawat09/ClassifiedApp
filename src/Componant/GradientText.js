import MaskedView from '@react-native-community/masked-view';
import LinearTextGradient from 'react-native-linear-gradient';
import React from 'react';
import {Text} from 'react-native';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearTextGradient
        locations={[0, 1]}
        colors={['#009640', '#116D3C']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearTextGradient>
    </MaskedView>
  );
};

export default GradientText;
