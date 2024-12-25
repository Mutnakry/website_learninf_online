import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './view/Coureses/Home';
import CourseModale1 from './view/modules/CourseModale';
import CourseModale from './view/modules/Modale';
import Lessons1 from './view/modules/Lessons'
import Lessons from './view/modules/Lessonses'
import Lessons2 from './view/modules/FormRunCode'
import VideoPremium from './view/video/VideoPremium';
import HomePage from './page/HomePage';
import DetailCategory from './view/Coureses/DetailCategory/DetailCategory'
import Register from './component/Register';
import Login from './component/Login';
import UserLogin from './view/personal/UserLogin';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          {/* <Route path="/" element={<Nav />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/modales/:id/course" element={<CourseModale />} />
          <Route path="/course/:courseId/modales/:modaleId/lessone/:submodaleId" element={<Lessons />} />
          <Route path="/courses/premium/:courseId" element={<VideoPremium />} />
          <Route path="/:namescategory/:categoryId/:namesDetail/:detailcategoryId" element={<DetailCategory />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
