import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Mutex} from 'async-mutex';
