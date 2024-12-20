import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './view/Coureses/Home';
import CourseModale1 from './view/modules/CourseModale';
import CourseModale from './view/modules/Modale';
import Lessons1 from './view/modules/Lessons'
import Lessons from './view/modules/Lessonses'
import Lessons2 from './view/modules/FormRunCode'

function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modales/:id/course" element={<CourseModale />} />

        
        {/* <Route path="/course/:courseId/modales/:modaleId/lessons/:lessonsId" element={<Lessons />} /> */}
        <Route path="/course/:courseId/modales/:modaleId" element={<Lessons />} />


        </Routes>
    </Router>
    </>
  )
}

export default App
