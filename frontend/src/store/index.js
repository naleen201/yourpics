// Import configureStore() from Redux toolkit:
import { configureStore } from '@reduxjs/toolkit'

//Persist Store
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

// Import user reducer:
import userReducer from './userStore'

//Persist config
const persistConfig = {
  key: 'user',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

// Create Redux store:
export const store = configureStore({
  reducer: persistedReducer, // Add user reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);