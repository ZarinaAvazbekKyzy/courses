import React from "react";
import { Route, Routes } from "react-router-dom";
import AddCourse from "./Components/AddCourse/AddCourse";
import Auth from "./Components/Auth/Auth";
import Cart from "./Components/Cart/Cart";
import Contacts from "./Components/Contacts/Contacts";
import CourseDetail from "./Components/Courses/CourseDetail";
import CoursesList from "./Components/Courses/CoursesList";
import EditCourse from "./Components/Edit/EditCourse";
import Home from "./Components/Home/Home";
import PaymentForm from "./Components/Payment/Payment";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CoursesList />} />
      <Route path="/details':id" element={<CourseDetail />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/add" element={<AddCourse />} />
      <Route path="/details/:id" element={<CourseDetail />} />
      <Route path="/edit/:id" element={<EditCourse />} />
      <Route path="/payment" element={<PaymentForm />} />
    </Routes>
  );
};

export default MainRoutes;
