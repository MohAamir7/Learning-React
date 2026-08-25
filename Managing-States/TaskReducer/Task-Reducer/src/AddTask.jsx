import { useState } from 'react';

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');

  const handleAddClick = () => {
    // Prevent adding empty tasks
    if (text.trim().length > 0) {
      onAddTask(text);
      setText(''); // Clear the input after adding
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAddClick}>
        Add
      </button>
    </div>
  );
}