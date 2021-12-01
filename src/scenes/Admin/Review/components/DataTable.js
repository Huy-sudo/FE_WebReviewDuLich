import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faExclamation, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
const DataTable = ({ dataSource, loading, updateReview, deleteReview }) => {

  const onUpdate = (values) => {
    updateReview(values)
  }

  const onDelete = (values) => {
    deleteReview(values)
  }

  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Thành phố',
      dataIndex: 'city',
      key: 'city',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {record?.city?.name || ''} </span>
        </div>
    },
    {
      title: 'Địa điểm',
      dataIndex: 'place',
      key: 'place',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {record?.user?.name || ''} </span>
        </div>
    },
    {
      title: 'Nội dung',
      dataIndex: 'content',
      key: 'content',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Đánh giá',
      dataIndex: 'rate',
      key: 'rate',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || '0' + '/5'} </span>
        </div>
    },
    {
      title: 'Thời gian',
      dataIndex: 'created_at',
      key: 'created_at',
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
          <button onClick={() => onUpdate(record?.id)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Publish Review">
              <span className="px-2">
                <FontAwesomeIcon icon={faCheckSquare} />
              </span>
            </Tooltip>
          </button>
          <button onClick={() => onDelete(record?.id)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Delete Review">
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

