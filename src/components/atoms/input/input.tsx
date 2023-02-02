import {EyeIcon} from '@assets/images/public_images';
import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

type Props = {
  variant?: 'never' | 'password';
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
      <Text
        style={{
          color: '#000',
        }}>
        {label}
      </Text>
      <View
        style={{
          width: '100%',
          borderRadius: 10,
          maxHeight: 50,
          position: 'relative',
        }}>
        <TextInput
          placeholder={plaseholderText}
          style={{
            width: '100%',
            borderRadius: 10,
            maxHeight: 50,
            backgroundColor: '#fff',
            paddingHorizontal: 15,
            paddingVertical: 17,
            fontSize: 12,
            lineHeight: 16,
            fontWeight: '400',
            fontFamily: 'DmSans-Medium',
          }}
          value={value}
          secureTextEntry={showPassword ? true : false}
          onChangeText={text => setValue(text)}
        />
        {variant == 'password' ? (
          <TouchableOpacity
            onPress={handlePasswordState}
            style={{
              position: 'absolute',
              top: 13,
              right: 11,
            }}>
            <EyeIcon isOpen={showPassword} />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
