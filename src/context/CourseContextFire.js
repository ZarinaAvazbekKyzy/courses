import React, { createContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../fire";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
  where,
  query,
  doc,
  updateDoc,
} from "firebase/firestore";

export const courseContextFire = createContext();

const INIT_STATE = {
  courses: [],
  courseDetails: null,
  pageTotalCount: 1,
};

const reducer = (prevState = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_COURSES":
      return {
        ...prevState,
        courses: action.payload,
      };
    case "GET_ONE_COURSE":
      return { ...prevState, courseDetails: action.payload };
    default:
      return prevState;
  }
};

const CourseContextFire = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();

  const db = getFirestore(fire);

  const getCourses = async (type) => {
    try {
      let querySnapshot = {};

      if (type === "all") {
        querySnapshot = await getDocs(collection(db, "courses"));
      } else if (type !== "all") {
        let q = query(collection(db, "courses"), where("category", "==", type));
        querySnapshot = await getDocs(q);
      }

      let array = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch({
        type: "GET_COURSES",
        payload: array,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const getOneCourse = async (id) => {
    console.log(id);
    try {
      let data = await getDocs(collection(db, "courses"));
      let courseDet = {};

      data.docs.forEach((doc) =>
        doc.id === id ? (courseDet = doc.data()) : null
      );
      console.log(courseDet);
      dispatch({
        type: "GET_ONE_COURSE",
        payload: courseDet,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addCourse = async (course) => {
    try {
      await addDoc(collection(db, "courses"), course);
      getCourses();
      navigate("/courses");
    } catch (e) {
      console.log(e);
    }
  };
  const deleteCourse = async (id) => {
    try {
      let courses = doc(db, "courses", id);
      await deleteDoc(courses);
      getCourses();
      navigate("/courses");
    } catch (e) {
      console.log(e);
    }
  };
  const editCourse = async (id, obj) => {
    try {
      let editedProduct = doc(db, "courses", id);
      await updateDoc(editedProduct, obj);
      getCourses();
      navigate("/courses");
    } catch (e) {
      console.error(e);
    }
  };
  const cloud = {
    getCourses,
    getOneCourse,
    addCourse,
    deleteCourse,
    editCourse,
    coursesArr: state.courses,
    courseDetails: state.courseDetails,
    pageTotalCount: state.pageTotalCount,
  };

  return (
    <courseContextFire.Provider value={cloud}>
      {children}
    </courseContextFire.Provider>
  );
};
export default CourseContextFire;
