import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  label: {
    color: '#000',
    fontFamily: 'DMSans-Medium',
    marginBottom: 10,
    fontWeight: '700',
    lineHeight: 16,
    fontSize: 12,
  },
  inputContainer: {
    width: '100%',
    borderRadius: 10,
    maxHeight: 50,
    position: 'relative',
  },
  input: {
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
    color: 'rgba(13, 1, 64, 0.6)',
  },
  eyeIcon: {
    position: 'absolute',
    top: 13,
    right: 11,
  },
});
