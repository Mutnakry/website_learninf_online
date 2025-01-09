import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route ,Navigate} from 'react-router-dom';

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
import TestText from './view/TestText';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);


  return (
    <>
      <Router>
        <Routes>
        {/* <Route path="/" element={<TestText />} /> */}


          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
          <Route path="/userLogin" element={<UserLogin />} />
          <Route path="/modales/:id/course" element={isAuthenticated ? <CourseModale /> : <Navigate to="/" />}   />
          {/* <Route path="/modales/:id/course" element={<CourseModale />} /> */}
          <Route path="/course/:courseId/modales/:modaleId/lessone/:submodaleId" element={<Lessons />} />
          <Route path="/courses/premium/:courseId"  element={isAuthenticated ? <VideoPremium  /> : <Navigate to="/" />} />
          <Route path="/:namescategory/:categoryId/:namesDetail/:detailcategoryId" element={isAuthenticated ? <DetailCategory  /> : <Navigate to="/" />}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
