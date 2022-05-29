import { StyleSheet, View, Text as NativeText} from 'react-native';
import React from 'react';

const DefaultText = (props: { children: React.ReactNode; style?: object }) => {
  return (
    <View>
      <NativeText
        style={{...styles.text, ...props.style}}>
          {props.children}
      </NativeText>
    </View>
  );
};

export const Text = DefaultText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans'
  }
});
