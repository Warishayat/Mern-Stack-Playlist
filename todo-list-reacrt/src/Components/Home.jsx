import React, { useState } from "react";
import "./Home.css";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addtoPast, updatePast } from "../feature/Todolist/TodoSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");
  const [id, setID] = useState(false);
  const [params, setSearchParams] = useSearchParams();
  const pasteId = params.get("pasteId");
  const dispatch = useDispatch();

  function CreatMyPaste() {
    //creat paste and sent to the slice
    const paste = {
      title: title,
      content: task,
      _id: pasteId || Date.now().toString(36),
      created_at: new Date().toISOString(),
    };
    if (pasteId) {
      //pasteid hea to update karuga
      dispatch(updatePast(paste));
    } else {
      //nahi hae tu creat karuga
      dispatch(addtoPast(paste));
    }
    //after cfreating or updation should be clear
    setTask("");
    setTitle("");
    setSearchParams({});
  }

  return (
    <div className="main-container">
      <div className="header-section">
        <input
          type="text"
          placeholder="Enter your title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="title"
        />
        <button onClick={CreatMyPaste} className="btn">
          {pasteId ? "Update Task" : "Creat Task"}
        </button>
      </div>
      <br />
      <div>
        <textarea
          className="textarea"
          value={task}
          placeholder="Enter your content"
          onChange={(e) => setTask(e.target.value)}
          rows={25}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
