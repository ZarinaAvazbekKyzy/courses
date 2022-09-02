import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courseContextFire } from "../../context/CourseContextFire";

export default function EditCourse() {
  const { id } = useParams();
  const { editCourse, courseDetails, getOneCourse } =
    useContext(courseContextFire);
  console.log(courseDetails);
  const [editTitle, editSetTitle] = useState(courseDetails.title);
  const [editDesc, editSetDesc] = useState(courseDetails.desc);
  const [editPrice, editSetPrice] = useState(courseDetails.price);
  const [editImage, editSetImage] = useState(courseDetails.image);
  const [editDuration, editSetDuration] = useState(courseDetails.duration);
  const [editDays, editSetDays] = useState(courseDetails.days);
  const [editAuthor, editSetAuthor] = useState(courseDetails.author);
  const [editAuthorDesc, editSetAuthorDesc] = useState(
    courseDetails.authorDesc
  );
  const [editAuthorWork, editSetAuthorWork] = useState(
    courseDetails.authorWork
  );
  const [editCategory, editSetCategory] = useState(courseDetails.category);

  function handleClick() {
    if (
      !editTitle ||
      !editDesc ||
      !editPrice ||
      !editImage ||
      !editDuration ||
      !editDays ||
      !editAuthor ||
      !editAuthorDesc ||
      !editAuthorWork ||
      !editCategory
    ) {
      alert("write in all inputs");
      return;
    } else {
      let course = {
        title: editTitle,
        desc: editDesc,
        price: parseInt(editPrice),
        image: editImage,
        duration: editDuration,
        days: editDays,
        author: editAuthor,
        authorDesc: editAuthorDesc,
        authorWork: editAuthorWork,
        category: editCategory,
        id: id,
      };
      editCourse(id, course);
      console.log("works");
    }
  }

  useEffect(() => {
    getOneCourse(id);
  }, [id]);
  console.log(courseDetails);
  return (
    <div className="editCourse">
      {courseDetails ? (
        <>
          <input
            className="addInp"
            type="text"
            value={editTitle}
            onChange={(e) => editSetTitle(e.target.value)}
            placeholder="title"
          />
          <input
            className="addInp"
            type="text"
            value={editDesc}
            onChange={(e) => editSetDesc(e.target.value)}
            placeholder="description of course"
          />
          <input
            className="addInp"
            type="text"
            value={editPrice}
            onChange={(e) => editSetPrice(e.target.value)}
            placeholder="price"
          />
          <input
            className="addInp"
            type="text"
            value={editImage}
            onChange={(e) => editSetImage(e.target.value)}
            placeholder="image"
          />
          <input
            className="addInp"
            type="text"
            value={editDuration}
            onChange={(e) => editSetDuration(e.target.value)}
            placeholder="duration"
          />
          <input
            className="addInp"
            type="text"
            value={editDays}
            onChange={(e) => editSetDays(e.target.value)}
            placeholder="dates of start and end"
          />
          <input
            className="addInp"
            type="text"
            value={editAuthor}
            onChange={(e) => editSetAuthor(e.target.value)}
            placeholder="author name"
          />{" "}
          <input
            className="addInp"
            type="text"
            value={editAuthorDesc}
            onChange={(e) => editSetAuthorDesc(e.target.value)}
            placeholder="description of author"
          />{" "}
          <input
            className="addInp"
            type="text"
            value={editAuthorWork}
            onChange={(e) => editSetAuthorWork(e.target.value)}
            placeholder="which work does author have?"
          />
          <input
            className="addInp"
            type="text"
            value={editCategory}
            onChange={(e) => editSetCategory(e.target.value)}
            placeholder="category of course"
          />
          <button onClick={handleClick}>edit course</button>
        </>
      ) : null}
    </div>
  );
}
