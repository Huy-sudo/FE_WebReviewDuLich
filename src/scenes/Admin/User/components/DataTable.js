import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faExclamation } from '@fortawesome/free-solid-svg-icons'
import { deleteUser } from '../action';
const DataTable = ({ dataSource, loading, updateUser, deleteUser }) => {

  const onSubmit = (values) => {
    updateUser(values)
  }

  const onDelete = (values) => {
    deleteUser(values)
  }

  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'name',
      key: 'name',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space >
          <button onClick={() => onSubmit(record?.id)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Update User">
              <span className="px-2">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </Tooltip>
          </button>
          <button onClick={() => onDelete(record?.id)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Delete User">
              <span className="px-2">
                <FontAwesomeIcon icon={faExclamation} />
              </span>
            </Tooltip>
          </button>
        </Space>
      ),
    },]
  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={dataSource || []}
      loading={loading}
    />
  );
}

export default DataTable;

