import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whilelist: ['counter'],
}

const rootReducer = combineReducers({
  counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
