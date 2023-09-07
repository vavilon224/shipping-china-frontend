import React from 'react';
import { Link } from 'react-router-dom';
import {routeConfig} from "../../routes/routeConfig";
import './NotFoundPage.scss';

const NotFoundPage = () => (
  <section className="empty-page">
    <h1>Oops! Something went wrong!</h1>
    <Link to={routeConfig.main.path}>Return to Home</Link>
  </section>
);

export default NotFoundPage;
