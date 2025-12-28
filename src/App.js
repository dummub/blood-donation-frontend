// src/App.js - 项目入口，整合3个页面
import React from 'react';
import './App.css';
// 导入3个页面组件
import AuthPage from './pages/AuthPage';
import DonorForm from './pages/DonorForm';
import QueryPage from './pages/QueryPage';

function App() {
  return (
    <div className="App">
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <h1>以太坊献血记录DApp</h1>
      </div>
      {/* 依次展示3个页面（后续可加路由实现页面切换） */}
      <AuthPage />
      <hr style={{ margin: '30px 0' }} />
      <DonorForm />
      <hr style={{ margin: '30px 0' }} />
      <QueryPage />
    </div>
  );
}

export default App;