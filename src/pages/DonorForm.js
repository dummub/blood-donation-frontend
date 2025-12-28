// src/pages/DonorForm.js - 献血者登记表单页面
import React, { useState } from 'react';

const DonorForm = () => {
  // 存储表单数据
  const [formData, setFormData] = useState({
    bloodType: '',
    donationType: '',
    bloodAmount: '',
  });

  // 表单输入变化时更新数据
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 提交表单（后续对接ABI后加链上交互）
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`献血信息提交成功！血型：${formData.bloodType}，献血量：${formData.bloodAmount}ml`);
    console.log('表单数据：', formData);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>献血者信息登记</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* 血型选择 */}
        <div>
          <label>血型：</label>
          <select name="bloodType" value={formData.bloodType} onChange={handleChange} required style={{ marginLeft: '10px', padding: '5px' }}>
            <option value="">请选择血型</option>
            <option value="A">A型</option>
            <option value="B">B型</option>
            <option value="AB">AB型</option>
            <option value="O">O型</option>
          </select>
        </div>

        {/* 献血类型选择 */}
        <div>
          <label>献血类型：</label>
          <select name="donationType" value={formData.donationType} onChange={handleChange} required style={{ marginLeft: '10px', padding: '5px' }}>
            <option value="">请选择类型</option>
            <option value="whole_blood_200ml">全血200ml</option>
            <option value="whole_blood_400ml">全血400ml</option>
          </select>
        </div>

        {/* 献血量输入 */}
        <div>
          <label>献血量(ml)：</label>
          <input 
            type="number" 
            name="bloodAmount" 
            value={formData.bloodAmount} 
            onChange={handleChange} 
            required 
            style={{ marginLeft: '10px', padding: '5px' }}
            min="200"
          />
        </div>

        {/* 提交按钮 */}
        <button type="submit" style={{ padding: '8px', backgroundColor: '#1677ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          提交献血记录
        </button>
      </form>
    </div>
  );
};

export default DonorForm;