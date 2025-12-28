// src/pages/QueryPage.js - 献血记录查询页面
import React, { useState } from 'react';

const QueryPage = () => {
  const [bloodId, setBloodId] = useState('');
  const [record, setRecord] = useState(null);

  // 查询记录逻辑（后续对接ABI后加链上查询）
  const handleQuery = () => {
    if (!bloodId) {
      alert('请输入血液ID！');
      return;
    }
    // 模拟查询结果
    setRecord({
      bloodId: bloodId,
      bloodType: 'A型',
      donationType: 'whole_blood_200ml',
      status: '已合格',
      donateTime: '2025-12-29'
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>献血记录查询</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>血液ID：</label>
        <input 
          type="text" 
          value={bloodId} 
          onChange={(e) => setBloodId(e.target.value)}
          placeholder="请输入血液ID查询"
          style={{ marginLeft: '10px', padding: '5px', width: '300px' }}
        />
        <button onClick={handleQuery} style={{ marginLeft: '10px', padding: '5px 10px' }}>
          立即查询
        </button>
      </div>

      {/* 展示查询结果 */}
      {record && (
        <div style={{ border: '1px solid #e8e8e8', padding: '15px', borderRadius: '4px' }}>
          <h3>查询结果</h3>
          <p>血液ID：{record.bloodId}</p>
          <p>血型：{record.bloodType}</p>
          <p>献血类型：{record.donationType}</p>
          <p>血液状态：{record.status}</p>
          <p>献血时间：{record.donateTime}</p>
        </div>
      )}
    </div>
  );
};

export default QueryPage;