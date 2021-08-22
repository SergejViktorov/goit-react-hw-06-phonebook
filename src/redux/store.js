import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
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
import storage from 'redux-persist/lib/storage'
import phoneBookReducer from '../redux/reducers'

const persistConfig = {
	key: 'contacts',
	storage,
	blacklist: ['filter'],
}

const middleware = [
	...getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
	logger,
]

const store = configureStore({
	reducer: { contacts: persistReducer(persistConfig, phoneBookReducer) },
	devTools: process.env.NODE_ENV === 'development',
	middleware,
})

const persistor = persistStore(store)

export default { store, persistor }
