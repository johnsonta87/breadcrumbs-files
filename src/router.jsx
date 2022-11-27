
import { Routes, Route } from "react-router-dom";
import Home from './home/home'
import MyName from './home/myname/myname'
import Projects from './home/myname/projects/projects'
import MySuperSecretProject from './home/myname/projects/mysupersecretproject/mysupersecretproject'

export const Router = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/myname" element={<MyName />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/mysupersecretproject" element={<MySuperSecretProject />} />
    </Routes>
  )
}
