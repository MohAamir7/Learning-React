import { useState } from 'react';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li key={task.id} style={{ margin: '10px 0' }}>
          <Task
            task={task}
            onChange={onChangeTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

// Helper component for individual tasks
function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span style={{ marginLeft: '8px', marginRight: '8px' }}>
          {task.text}
        </span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      {taskContent}
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '5px' }}>
        Delete
      </button>
    </label>
  );
}