import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import {useForceUpdate} from './src/utils/hooks/force-update';
import {i18n, initTranslations} from './src/utils/translations';

initTranslations();

export default () => {
  const forceUpdate = useForceUpdate();
  return (
    <SafeAreaView>
      <Text>{i18n.t('Splash screen title')}</Text>
      <TouchableOpacity>
        <Text
          onPress={() => {
            i18n.locale = 'en';
            forceUpdate();
          }}>
          Change
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
