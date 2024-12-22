import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './view/Coureses/Home';
import CourseModale1 from './view/modules/CourseModale';
import CourseModale from './view/modules/Modale';
import Lessons1 from './view/modules/Lessons'
import Lessons from './view/modules/Lessonses'
import Lessons2 from './view/modules/FormRunCode'
import VideoPremium from './view/video/VideoPremium';

function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modales/:id/course" element={<CourseModale />} />
        <Route path="/course/:courseId/modales/:modaleId/lessone/:submodaleId" element={<Lessons />} />
        <Route path="/courses/premium/:courseId" element={<VideoPremium />} />



        </Routes>
    </Router>
    </>
  )
}

export default App
