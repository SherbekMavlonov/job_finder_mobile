import {EyeIcon} from '@assets/images/public_images';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './input.style';
import {Shadow} from 'react-native-shadow-2';

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
    <View>
      <Text style={styles.label}>{label}</Text>
      <Shadow
        style={styles.inputContainer}
        startColor={'rgba(153, 171, 198, 0.18)'}
        endColor="rgba(153, 171, 198, 0.18)"
        distance={1}>
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
      </Shadow>
    </View>
  );
};
