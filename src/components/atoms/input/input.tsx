import {EyeIcon} from '@assets/images/public_images';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './input.style';

type Props = {
  variant?: 'password';
  plaseholderText: string;
  value: string;
  setValue: (e: any) => void;
  label: string;
};

export const BaseInput = ({
  variant,
  plaseholderText,
  value,
  setValue,
  label,
}: Props) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handlePasswordState = () => {
    setShowPassword(prev => !prev);
  };
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={plaseholderText}
          style={styles.input}
          value={value}
          secureTextEntry={showPassword ? true : false}
          onChangeText={text => setValue(text)}
        />
        {variant == 'password' ? (
          <TouchableOpacity
            onPress={handlePasswordState}
            style={styles.eyeIcon}>
            <EyeIcon isOpen={!showPassword} />
          </TouchableOpacity>
        ) : null}
      </View>
    </>
  );
};
