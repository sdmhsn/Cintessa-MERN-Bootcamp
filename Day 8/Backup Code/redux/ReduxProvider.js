'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistore } from '@/redux'; // src/redux/index.js

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        {children}
      </PersistGate>
    </Provider>
  );
}
