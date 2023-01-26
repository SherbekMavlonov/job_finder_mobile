import RootStack from '@navigation/root-stack';
import {initTranslations} from '@utils/translations';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

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
