import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  paddingBottom: number;
}

export const PaddingBottom = ({paddingBottom}: Props) => {
  return (
    <View
      style={{
        marginBottom: paddingBottom,
      }}
    />
  );
};
