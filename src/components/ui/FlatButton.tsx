import { Pressable, StyleSheet, Text, View } from 'react-native';


import { FC } from 'react';
import { IFlatButton } from '../../interface/interface';
import { Colors } from '../constant/style';


const FlatButton:FC<IFlatButton>=({ children, onPress })=> {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View  >
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.primary100,
  },
  buttonContainer:{
    backgroundColor:Colors.primary500
  }
});
