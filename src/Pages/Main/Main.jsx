import React from 'react';
import {Table} from "antd";
import {Link} from "react-router-dom";
import './styles.scss'

const columns = [
  {
    title: 'ФИО',
    dataIndex: 'name',
    render: (text, _) => <Link to={`/user/${_.key}`}>{text}</Link>,
  },
  {
    title: 'Адресс',
    dataIndex: 'address',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Номер телефона',
    dataIndex: 'phone',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  }
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    address: 98,
    phone: '0550117417',
  },
  {
    key: '2',
    name: 'Jim Green',
    address: 98,
    phone: '0550117417',
  },
  {
    key: '3',
    name: 'Joe Black',
    address: 98,
    phone: '0550117417',
  },
  {
    key: '4',
    name: 'Jim Red',
    address: 98,
    phone: '0550117417',
  },
];

const Main = () => {
  return (
    <div className='main'>
      <h3>Список Юзеров</h3>
      <Table dataSource={data} columns={columns}/>
    </div>
  );
};

export default Main;