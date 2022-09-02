import React, { useContext, useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { courseContextFire } from "../../context/CourseContextFire";
import Search from "../Search/Search";
import "./Courses.css";
import { Autocomplete, TextField } from "@mui/material";
import Filte from "../Filter/Filte";
import ReactPaginate from "react-paginate";

const CoursesList = () => {
  const { getCourses, coursesArr, deleteCourse } =
    useContext(courseContextFire);

  let { id } = useParams();

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  const [type, setType] = useState(searchParams.get("category") || "all");

  const [page, setPage] = useState(1);

  const [currentPage, setCurrentPage] = useState(0);

  const paramsWithType = () => {
    return {
      category: type,
      q: searchParams.get("q") || "",
      _page: page,
      _limit: 6,
    };
  };

  const paramsNoType = () => {
    return {
      q: searchParams.get("q") || "",
      _page: page,
      _limit: 6,
    };
  };

  useEffect(() => {
    getCourses(type);
    if (searchParams.get("category")) {
      setSearchParams(paramsWithType());
    } else {
      setSearchParams(paramsNoType());
    }
  }, [type]);

  useEffect(() => {
    getCourses(type);
    if (type === "all") {
      setSearchParams(paramsNoType());
    } else {
      setSearchParams(paramsWithType());
    }
  }, [searchParams, type, page]);

  let limitPage = 6;
  let pageVisit = limitPage * currentPage;
  let countPage = Math.ceil(coursesArr.length / limitPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  const [searchValue, setSearchValue] = useState("");
  const location = useLocation();
  console.log(searchValue);
  useEffect(() => {
    if (location.pathname === "/courses") {
      setSearchParams({
        q: searchValue,
      });
    }
  }, [searchValue]);

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <>
      <div className="courseList">
        <div className="listHead">
          <p>Enjoy your studying!</p>
          <h2>Our online courses</h2>
          <div>
            <input
              type="text"
              placeholder="Search…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            />
          </div>
        </div>
        <div className="courseListBody">
          <Filte type={type} setType={setType} />
          <div className="CardsList">
            {coursesArr
              .slice(pageVisit, pageVisit + limitPage)
              .filter((asd) => asd.title.toLowerCase().includes(searchValue))
              .map((course) => {
                return (
                  <div key={course.id} className="listCard">
                    <div className="listImage">
                      <img src={course.image} alt="" />
                    </div>
                    <div className="listCardInfo">
                      <button className="cardBtn">{course.category}</button>
                      <h2>{course.title}</h2>
                      <div className="cardText">
                        <span className="listCardPrice">${course.price} </span>
                        <span className="listCardAuthor">
                          {" "}
                          | {course.author}
                        </span>
                      </div>
                      <Link to={`/details/${course.id}`}>
                        <button className="redBtn">more</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <ReactPaginate
          previousLabel="Назад"
          nextLabel="Вперед"
          onPageChange={changePage}
          pageCount={countPage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </>
  );
};

export default CoursesList;
