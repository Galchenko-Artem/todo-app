import React, { useState } from 'react';
import { Layout, Input, Button, Tabs, Space } from 'antd';
import { Task } from './types/Task';
import TaskList from './components/TaskList';

const { Header, Content } = Layout;

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const addTask = () => {
    if (newTaskTitle.trim() === '') return;
    const newTask: Task = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle('');
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);
  const tabItems = [
    {
      key: '1',
      label: 'Все задачи',
      children: <TaskList tasks={tasks} toggleTask={toggleTask} />,
    },
    {
      key: '2',
      label: 'Невыполненные',
      children: <TaskList tasks={pendingTasks} toggleTask={toggleTask} />,
    },
    {
      key: '3',
      label: 'Выполненные',
      children: <TaskList tasks={completedTasks} toggleTask={toggleTask} />,
    },
  ];

  return (
    <Layout>
      <Header style={{ color: 'white' }}>ToDo Приложение</Header>
      <Content style={{ padding: '20px' }}>
        <Space.Compact>
          <Input
            style={{ width: 'calc(100% - 100px)' }}
            value={newTaskTitle}
            onChange={e => setNewTaskTitle(e.target.value)}
            placeholder="Новая задача"
          />
          <Button type="primary" onClick={addTask}>
            Добавить
          </Button>
        </Space.Compact>
        <Tabs defaultActiveKey="1" style={{ marginTop: '20px' }} items={tabItems} />
      </Content>
    </Layout>
  );
};

export default App;
