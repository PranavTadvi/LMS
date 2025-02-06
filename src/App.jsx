import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/student/Home";
import CourseDetails from "./pages/student/CourseDetails";
import CoursesList from "./pages/student/CoursesList";
import MyEnrollments from "./pages/student/MyEnrollments";
import Loading from "./components/educator/student/Loading";
import Player from "./pages/student/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
      </Routes>
    </div>
  );
};

export default App;
