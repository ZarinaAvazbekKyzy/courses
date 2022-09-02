import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import MainRoutes from "./MainRoutes";
import CourseContextFire from "./context/CourseContextFire";
import AuthContext from "./context/AuthContext";
import CartContextProvider from "./context/CartContextProvider";
const App = () => {
  return (
    <AuthContext>
      <CartContextProvider>
        <CourseContextFire>
          <NavBar />
          <MainRoutes />
          <Footer />
        </CourseContextFire>
      </CartContextProvider>
    </AuthContext>
  );
};

export default App;
