import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/home.page';
import Course from './pages/course.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Homepage /></Layout>} />
        <Route path="course/:courseid" element={<Layout><Course /></Layout>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
