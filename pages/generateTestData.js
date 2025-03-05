import { useState } from 'react';

export default function GenerateTestData() {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    const response = await fetch('/api/uploadTestData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, value })
    });

    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div>
      <h1>上传测试数据</h1>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={handleUpload}>上传</button>
      <p>{message}</p>
    </div>
  );
}
