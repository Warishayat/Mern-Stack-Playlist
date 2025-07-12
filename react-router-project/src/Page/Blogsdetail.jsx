import { useParams } from "react-router-dom";


const Blogsdetail = () => {
    const blogList = [
    { id: "1", title: "React Basics", content: "Intro to JSX, props, state..." },
    { id: "2", title: "React Router", content: "Using Routes, Link, useParams..." },
    { id: "3", title: "Hooks in React", content: "useState, useEffect explained..." },
  ];
  const {id} = useParams();
  const blog = blogList.find(blog=>blog.id === id);
  if (!blog) return (
    <h2>This {id} doesnot contain anyblock</h2>
  )
  return (
    <div>
        Blogsdetail
        <h2>{blog.title}</h2>
        <h3>{blog.content}</h3>
    </div>
  )
};

export default Blogsdetail;