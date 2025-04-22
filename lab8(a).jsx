import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('Hello, click the button to change me!');

  const handleClick = () => {
    setText('Text updated! 🎉');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>{text}</h1>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Click Me
      </button>
    </div>
  );
}

export default App;