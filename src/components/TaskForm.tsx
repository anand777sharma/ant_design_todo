// import { useState } from 'react'
import { Form, Input, Select, DatePicker, Switch, Button } from 'antd'

const { Option } = Select
type Task = {
  dueDate: string,
  id: number,
  priority: string,
  status: string,
  title: string
}

type TaskFormProps = {
  onAddTask: (task: Task) => void;
}
const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    onAddTask({
      ...values,
      status: values.status ? 'Completed' : 'Not Completed'
    })
    form.resetFields()
  }

  return (
    <Form form={form} onFinish={onFinish} layout="inline" className="mb-8 justify-center">
      <Form.Item
        name="title"
        rules={[{ required: true, message: 'Please input the task title!' }]}
      >
        <Input placeholder="Task Title" />
      </Form.Item>
      <Form.Item
        name="priority"
        rules={[{ required: true, message: 'Please select the priority!' }]}
      >
        <Select placeholder="Priority" style={{ width: 120 }}>
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="dueDate"
        rules={[{ required: true, message: 'Please select the due date!' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item name="status" valuePropName="checked">
        <Switch checkedChildren="Completed" unCheckedChildren="Not Completed" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Task
        </Button>
      </Form.Item>
    </Form>
  )
}

export default TaskForm

