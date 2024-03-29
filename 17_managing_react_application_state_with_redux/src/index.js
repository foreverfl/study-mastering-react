import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import rootReducer from './modules';

// `configureStore`는 Redux DevTools 확장을 자동으로 사용 설정
const store = configureStore({
  reducer: rootReducer,
  // 추가 설정이 필요한 경우, 이곳에 미들웨어 등을 구성할 수 있음
});

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

