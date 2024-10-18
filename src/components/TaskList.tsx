import React from 'react';
import { List, Checkbox } from 'antd';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, toggleTask }) => {
  return (
    <List
      dataSource={tasks}
      renderItem={task => (
        <List.Item>
          <Checkbox
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          >
            {task.title}
          </Checkbox>
        </List.Item>
      )}
    />
  );
};

export default TaskList;
