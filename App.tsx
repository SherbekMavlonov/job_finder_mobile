import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {SplashScreen} from './src/screens/public/splash-screen';

import {useForceUpdate} from './src/utils/hooks/force-update';
import {i18n, initTranslations} from './src/utils/translations';

initTranslations();

export default () => {
  const forceUpdate = useForceUpdate();
  return (
    <SafeAreaView>
      <SplashScreen />
    </SafeAreaView>
  );
};
