import React, {useContext, useEffect, useState} from 'react';
import {Table} from "antd";
import {Link} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import './styles.scss'
import {FireBaseContext} from "../../FirebaseContext";

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

const Main = () => {
  const [users, setUsers] = useState([])

  const {db} = useContext(FireBaseContext)

  useEffect(() => {
    const effect = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const fireUsers = []

      querySnapshot.forEach((doc) => {
        fireUsers.push(doc.data())
      });


      setUsers(fireUsers)

    }
    effect()
  }, [])

  return (
    <div className='main'>
      <h3>Список Юзеров</h3>
      <Table dataSource={users} columns={columns} rowKey={'name'}/>
    </div>
  );
};

export default Main;