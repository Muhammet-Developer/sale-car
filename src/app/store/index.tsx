
'use client'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import addCar from '@/app/store/addCar'
import {
    persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, persistStore
  } from 'redux-persist';
import { useDispatch } from 'react-redux';
export const persistConfig = {
    key: 'root',
    storage,
    whitelist:['addCar']
};

const reducers = combineReducers({
    addCar
})

const persistedReducer = persistReducer(persistConfig,reducers);

export const store = configureStore({
    reducer:persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch();

export type IModule = {
    addCar: ReturnType<typeof addCar>;
  };