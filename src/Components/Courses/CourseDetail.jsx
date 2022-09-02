import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { courseContextFire } from "../../context/CourseContextFire";
import Facebook from "../../image/Facebook.svg";
import inst from "../../image/inst.svg";
import Twitter from "../../image/Twitter.svg";
import YouTube from "../../image/YouTube.svg";
import inc from "../../image/inc.svg";
import telegram from "../../image/telegram.svg";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContextProvider";

const CourseDetail = () => {
  const { getOneCourse, courseDetails, deleteCourse } =
    useContext(courseContextFire);
  const { addProductCart } = useContext(cartContext);
  let { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getOneCourse(id);
  }, [id]);
  console.log(courseDetails);
  return (
    <>
      {courseDetails ? (
        <div className="detailsPage">
          <div className="detHeader">
            <h2 className="redHead">course</h2>
            <h1>{courseDetails.title}</h1>
          </div>

          {/* ====================================== */}
          <div className="aboutCourse">
            <div className="aboutCourseLeft">
              <div className="aboutCourseLeftTop">
                <h4 className="aboutHead">About the course</h4>
                <span className="courseDesc">{courseDetails.desc}</span>
              </div>
              <div>
                <h4 className="aboutHead">You will learn</h4>
                <ul>
                  <li className="points">
                    A fermentum in morbi pretium aliquam adipiscing donec
                    tempus.
                  </li>
                  <li className="points">
                    Vulputate placerat amet pulvinar lorem nisl.
                  </li>
                  <li className="points">
                    Consequat feugiat habitant gravida quisque elit bibendum id
                    adipiscing sed.
                  </li>
                  <li className="points">
                    Etiam duis lobortis in fames ultrices commodo nibh.
                  </li>
                  <li className="points">
                    Fringilla in nec risus congue venenatis pretium posuere nec.
                  </li>
                  <li className="points">
                    Cursus eu pretium, vulputate tempus quam massa sed at.
                  </li>
                </ul>
              </div>
            </div>
            <div className="aboutCourseRight">
              <p className="detailsDataTop">Dates</p>
              <p className="detailsData">{courseDetails.days}</p>
              <span className="courseDesc">
                Metus turpis sit lorem lacus, in elit tellus lacus.
              </span>
              <p className="detailsDataTop">Duration</p>
              <h5 className="detailsData">{courseDetails.duration}</h5>
              <span className="courseDesc">
                Rhoncus pellentesque auctor auctor orci vulputate faucibus quis
                ut.
              </span>
              <p className="detailsDataTop">Price</p>
              <p className="detailsData">${courseDetails.price} per month</p>
              <span className="courseDesc">
                Nulla sem adipiscing adipiscing felis fringilla. Adipiscing
                mauris quam ac elit tristique dis.
              </span>
              <button
                onClick={() => addProductCart(courseDetails)}
                className="redBtn"
              >
                add to cart
              </button>
            </div>
          </div>
          {/* ======================================== */}
          <div className="aboutAuthor">
            <h2 className="authorName">
              Your course will be leaded {courseDetails.author}
            </h2>
            <img
              className="authorImage"
              src={courseDetails.image}
              alt={courseDetails.author}
            />
            <p>{courseDetails.authorWork}</p>
            <div className="autorDescription">
              <p>{courseDetails.authorDesc}</p>
              <div className="medias__About">
                <a href="https://www.facebook.com/groups/185636926664364">
                  <img src={Facebook} alt="facebookpage" />
                </a>
                <a href="https://www.instagram.com/makerskg/">
                  <img src={inst} alt="inst" />
                </a>
                <a href="https://twitter.com/FreeCourses4all">
                  <img src={Twitter} alt="twitter" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src={YouTube} alt="youtube" />
                </a>
                <a href="#">
                  <img src={inc} alt="inc" />
                </a>
                <a href="#">
                  <img src={telegram} alt="telegram" />
                </a>
              </div>
            </div>
          </div>
          {/* ======================================================== */}
          <div className="learning">
            <div className="learningHead">
              <h4 className="aboutHead">Main steps</h4>
              <h2>Online learning process</h2>
            </div>
            <div className="learningMain">
              <div className="blockLearning">
                <h6 className="number">01</h6>
                <p className="detailsDataTop">Watching online video lectures</p>
                <h4 className="points">
                  Culpa nostrud commodo ea consequat aliquip reprehenderit.
                  Veniam velit nostrud aliquip sunt.
                </h4>
              </div>
              <div className="blockLearning">
                <h6 className="number">02</h6>
                <p className="detailsDataTop">Passing test</p>
                <h4 className="points">
                  Anim reprehenderit sint voluptate exercitation adipisicing
                  laborum adipisicing. Minim ad tempor est ea.
                </h4>
              </div>
              <div className="blockLearning">
                <h6 className="number">03</h6>
                <p className="detailsDataTop">Curator’s feedback</p>
                <h4 className="points">
                  Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore
                  dolore et ad et veniam ad deserunt.
                </h4>
              </div>
              <div className="blockLearning">
                <h6 className="number">04</h6>
                <p className="detailsDataTop">Corrections if needed</p>
                <h4 className="points">
                  Sit veniam aute dolore adipisicing nulla sit culpa. Minim
                  mollit voluptate ullamco proident ea ad.
                </h4>
              </div>
            </div>
          </div>
          {/* ================================================== */}
          <div className="DetBenefits"></div>
          <div className="Programm"></div>
          <div className="buttons">
            <Link to="/add">
              <button className="redBtn">add more courses</button>
            </Link>

            <button className="redBtn" onClick={() => deleteCourse(id)}>
              delete this course
            </button>
            <Link to={`/edit/${id}`}>
              <button className="redBtn">edit</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default CourseDetail;
