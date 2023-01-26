import React from 'react';
import {Text, TextInput, View} from 'react-native';

type Props =
  | {
      variant?: 'never';
      plaseholderText: string;
      value: string;
      setValue: (e: any) => void;
      label: string;
    }
  | {
      variant?: 'password';
      plaseholderText: string;
      value: string;
      setValue: (e: any) => void;
      setShowPassword: (e: any) => void;
      label: string;
    };
export const BaseInput = ({
  variant,
  plaseholderText,
  value,
  setValue,
  label,
}: Props) => {
  return (
    <View>
      <Text
        style={{
          color: '#000',
        }}>
        {label}
      </Text>
      <TextInput
        placeholder={plaseholderText}
        style={{
          width: '100%',
          borderRadius: 10,
          maxHeight: 50,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          fontSize: 12,
          lineHeight: 16,
          fontWeight: '400',
          fontFamily: 'DmSans-Medium',
        }}
        value={value}
        onChangeText={text => setValue(text)}
      />
    </View>
  );
};
