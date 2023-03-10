import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ArrowIcon, SplashScreenIcon} from '@assets/images/public_images';
import {PaddingBottom} from '@components/atoms/padding-bottom';
import {styles} from './splash-screen-style';
import {ScreenNameAuth} from '@constants/navigation';
import {AuthStackParamList} from '@navigation/auth-stack';

export const SplashScreen = () => {
  const {navigate} =
    useNavigation<
      StackNavigationProp<AuthStackParamList, ScreenNameAuth.LOGIN>
    >();
  const navigateToLogin = () => {
    navigate(ScreenNameAuth.LOGIN);
  };
  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.logo}>Jobspot</Text>
      <SplashScreenIcon />
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Find Your {'\n'}
          <Text style={styles.titleSpan}>Dream Job</Text>
          {'\n'}Here!
        </Text>
        <Text style={styles.description}>
          Explore all the most exciting job roles based on your interest and
          study major.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.nextButton} onPress={navigateToLogin}>
          <ArrowIcon />
        </TouchableOpacity>
      </View>

      <PaddingBottom paddingBottom={40} />
    </ScrollView>
  );
};
