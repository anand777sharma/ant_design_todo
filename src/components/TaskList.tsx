import { Table, Tag, Space, Button, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'


type Task = {
  dueDate: string,
  id: number,
  priority: string,
  status: string,
  title: string
}

type TaskListProps = {
  tasks: Task[], loading: boolean, onUpdateTask:  (updatedTask: Task) => Promise<void>, onDeleteTask: (taskId: number) => Promise<void>
}


const TaskList: React.FC<TaskListProps> = ({ tasks, loading, onUpdateTask, onDeleteTask }) => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Task Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      key: 'priority',
      render: (priority:string) => {
        let color = priority === 'High' ? 'red' : priority === 'Medium' ? 'yellow' : 'green'
        return <Tag color={color}>{priority}</Tag>
      },
    },
    {
      title: 'Due Date',
      dataIndex: 'dueDate',
      key: 'dueDate',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status:string) => (
        <Tag color={status === 'Completed' ? 'green' : 'volcano'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_:number, record:Task) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => onUpdateTask({ ...record, status: record.status === 'Completed' ? 'Not Completed' : 'Completed' })}
          >
            Toggle Status
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this task?"
            onConfirm={() => onDeleteTask(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ]

  return (
 <Table className=' w-[100%-2rem] overflow-auto'
      columns={columns}
      dataSource={tasks}
      rowKey="id"
      loading={loading}
      // pagination={{ pageSize: 7 }}
    
    />
   
  )
}

export default TaskList

