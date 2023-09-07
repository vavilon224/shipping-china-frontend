import React from 'react';
import {Link} from "react-router-dom";
import './header.scss'

const HeaderComponent = () => {
  return (
    <div className="header">
      <Link to={'/'}>Список пользователей</Link>
      <Link to={'/report'}>Отчет за месяц</Link>
    </div>
  );
};

export default HeaderComponent;