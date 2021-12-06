import React from 'react';
import { Table, Spin, Space, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faExclamation } from '@fortawesome/free-solid-svg-icons'
const DataTable = ({ dataSource, loading, updatePlace, deletePlace }) => {

  const onSubmit = (values) => {
    updatePlace(values)
  }

  const onDelete = (values) => {
    deletePlace(values)
  }

  const columns = [
    {
      title: '#',
      width: 100,
      render: (value, record, i) => <a>{i + 1}</a>,
    },
    {
      title: 'Địa điểm',
      dataIndex: 'name',
      key: 'name',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Hình',
      dataIndex: 'picture',
      key: 'picture',
      className: 'text-left',
      render: (value, record) =>
        <img src={value} height={50} width={50}></img>
    },
    {
      title: 'Thành phố',
      dataIndex: 'city',
      key: 'city',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {record.city?.name || ''} </span>
        </div>
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      className: 'text-left',
      render: (value, record) =>
        <div>
          <span> {value || ''} </span>
        </div>
    },
    {
      title: 'Trạng thái',
      dataIndex: 'isReal',
      key: 'isReal',
      className: 'text-left',
      render: (value, record) =>
        <div>
           <span >{value == 1 ? 'Xác thực' : 'Chưa xác thực'}</span>
        </div>
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space >
          <button onClick={() => onSubmit(record?.ID)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Cập nhật">
              <span className="px-2">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </Tooltip>
          </button>
          <button onClick={() => onDelete(record?.ID)} className="btn btn-sm btn-primary">
            <Tooltip placement="top" title="Xóa">
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

