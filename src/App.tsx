import  { useState, useEffect } from 'react'
import { Layout, Typography, notification } from 'antd'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { fetchTasks, addTask, updateTask, deleteTask } from './services/api'

const { Header, Content } = Layout
const { Title } = Typography

type Task = {
  dueDate: string,
  id: number,
  priority: string,
  status: string,
  title: string
}

const key = 'updatable';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [loading, setLoading] = useState(true)
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (message:string, description:string) => {
    api.open({
      key,
      message, description,
    });
  };
  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    setLoading(true)
    try {
      const data = await fetchTasks()
      setTasks(data)
    } catch (error) {
      console.error('Error loading tasks:', error)
    }
    setLoading(false)
  }

  const handleAddTask = async (newTask: Task) => {
    try {
      const addedTask = await addTask(newTask)
      setTasks([...tasks, addedTask])
      console.log(addedTask);
      openNotification('task Added', 'task Added Successfully')
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const handleUpdateTask = async (updatedTask: Task) => {
    try {
      await updateTask(updatedTask.id, updatedTask)
      setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task))
    } catch (error) {
      console.error('Error updating task:', error)
    }
  }

  const handleDeleteTask = async (taskId: number) => {
    try {
      await deleteTask(taskId)
      setTasks(tasks.filter(task => task.id !== taskId))
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  return (
  
    <Layout className="min-h-screen p-0">
         {contextHolder}
      <Header className="flex items-center justify-center bg-slate-50">
        <Title level={3} className="text-yellow-400 m-0">Task Management App</Title>
      </Header>
      <Content className="p-2 sm:p-8">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          loading={loading}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
        
      </Content>
    </Layout>
  )
}

