import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com'

type Task = {
  dueDate: string,
  id: number,
  priority: string,
  status: string,
  title: string,
  // completed:string
}
type Task2 = {
  dueDate: string,
  id: number,
  priority: string,
  status: string,
  title: string,
  completed:string
}

export const fetchTasks = async () => {
  const response = await axios.get(`${API_URL}/todos`)
  return response.data.map((task:Task2) => ({
    ...task,
    priority: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
    dueDate: new Date(Date.now() + Math.random() * 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    status: task.completed ? 'Completed' : 'Not Completed'
  }))
}

export const addTask = async (task:Task) => {
  const response = await axios.post(`${API_URL}/todos`, task)
  return response.data
}

export const updateTask = async (id:number, task:Task) => {
  const response = await axios.put(`${API_URL}/todos/${id}`, task)
  return response.data
}

export const deleteTask = async (id:number) => {
  await axios.delete(`${API_URL}/todos/${id}`)
}

