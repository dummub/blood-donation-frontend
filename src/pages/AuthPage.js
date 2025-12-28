// src/pages/AuthPage.js - 钱包授权页面
import React from 'react';

const AuthPage = () => {
  // 钱包连接/授权逻辑（后续对接ABI后完善）
  const connectWallet = () => {
    alert('钱包授权成功！已获取你的钱包地址，可进入登记/查询页面');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', marginTop: '100px' }}>
      <h2>献血记录DApp - 钱包授权</h2>
      <p>请连接你的MetaMask钱包完成授权，方可使用功能</p>
      <button 
        onClick={connectWallet}
        style={{ padding: '10px 20px', backgroundColor: '#52c41a', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
      >
        连接钱包并授权
      </button>
    </div>
  );
};

export default AuthPage;