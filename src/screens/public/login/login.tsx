import {View, Text} from 'react-native';
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
      }}>
      <Text>Login</Text>
      <BaseInput
        plaseholderText="mavlonovsherbek43@gmail.com"
        value={value}
        setValue={setValue}
        label="Email"
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
