import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { State } from "./state";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const intermedicina = 'intermedicina'

const persistConfig = {
  key: intermedicina,
  transforms: [
    encryptTransform({
      secretKey: intermedicina,
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
  storage,
};

const persistedReducer = persistReducer(persistConfig, State.reducer);

const makeStore = () =>
  configureStore({
    reducer: {
      [State.name]: persistedReducer,
    },
    devTools: true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

const store = makeStore();
let persistor = persistStore(store)

export  {store, persistor}


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
 