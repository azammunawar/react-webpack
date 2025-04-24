import React, { useState, useRef } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Home = () => {
  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState("");
  const inputRef = useRef(null);
  const onChange = () => {
    if (toDo.trim()) {
      setToDo("");
      setToDoList((prevState) => [...prevState, toDo]);
      //   inputRef.current.focus();
    }
  };
  const handleInputChange = (event) => {
    setToDo(event.target.value);
  };
  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={toDo}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onChange();
          }
        }}
        onChange={handleInputChange}
      />
      <button type="button" onClick={onChange}>
        Add
      </button>
      <ul>
        {toDoList.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

const Profile = () => {
  return "welcome to Profile page";
};
export default function App() {
  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Router>
    </>
  );
}
