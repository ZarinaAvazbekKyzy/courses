import React, { useContext, useState } from "react";
import { courseContextFire } from "../../context/CourseContextFire";
import "./AddCourse.css";
export default function AddCourse() {
  const { addCourse } = useContext(courseContextFire);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [duration, setDuration] = useState("");
  const [days, setDays] = useState("");
  const [author, setAuthor] = useState("");
  const [authorDesc, setAuthorDesc] = useState("");
  const [authorWork, setAuthorWork] = useState("");
  const [category, setCategory] = useState("");

  function handleClick() {
    if (
      !title ||
      !desc ||
      !price ||
      !image ||
      !duration ||
      !days ||
      !author ||
      !authorDesc ||
      !authorWork ||
      !category
    ) {
      alert("write in all inputs");
      return;
    }
    let course = {
      title,
      desc,
      price: parseInt(price),
      image,
      duration,
      days,
      author,
      authorDesc,
      authorWork,
      category,
    };
    addCourse(course);
  }
  return (
    <div className="addCourse">
      <input
        className="addInp"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <input
        className="addInp"
        type="text"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="description of course"
      />
      <input
        className="addInp"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      />
      <input
        className="addInp"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="image"
      />
      <input
        className="addInp"
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="duration"
      />
      <input
        className="addInp"
        type="text"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        placeholder="dates of start and end"
      />
      <input
        className="addInp"
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="author name"
      />{" "}
      <input
        className="addInp"
        type="text"
        value={authorDesc}
        onChange={(e) => setAuthorDesc(e.target.value)}
        placeholder="description of author"
      />{" "}
      <input
        className="addInp"
        type="text"
        value={authorWork}
        onChange={(e) => setAuthorWork(e.target.value)}
        placeholder="which work does author have?"
      />
      <input
        className="addInp"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="category of course"
      />
      <button className="redBtn" onClick={handleClick}>
        add course
      </button>
    </div>
  );
}
