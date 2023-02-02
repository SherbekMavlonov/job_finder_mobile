import {Text, View} from 'react-native';
import React from 'react';
import {BaseInput} from '@components/atoms/input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Login = () => {
  const [value, setValue] = React.useState('');
  return (
    <KeyboardAwareScrollView
      style={{
        minHeight: '100%',
        padding: 20,
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          marginTop: 102,
          color: '#0D0140',
          fontSize: 30,
          textAlign: 'center',
          fontWeight: '700',
          fontFamily: 'DmSans-Medium',
        }}>
        Welcome Back
      </Text>
      <Text
        style={{
          marginBottom: 64,
          textAlign: 'center',
          fontSize: 12,
          marginTop: 11,
          fontWeight: '400',
          fontFamily: 'DmSans-Medium',
          color: '#524B6B',
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
      </Text>

      <BaseInput
        plaseholderText="mavlonovsherbek43@gmail.com"
        value={value}
        setValue={setValue}
        label="Email"
      />
      <View
        style={{
          marginBottom: 41,
        }}
      />
      <BaseInput
        variant="password"
        plaseholderText="Password"
        value={value}
        setValue={setValue}
        label="Password"
      />
    </KeyboardAwareScrollView>
  );
};
