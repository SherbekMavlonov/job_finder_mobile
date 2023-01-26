import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {initTranslations} from './src/utils/translations';
import RootStack from './src/navigation/root-stack';

initTranslations();

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootStack />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
