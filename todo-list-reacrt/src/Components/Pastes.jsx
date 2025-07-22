import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Paste.css";
import { removeFromPaste } from "../feature/Todolist/TodoSlice";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Pastes = () => {
  const [search, setSearch] = useState("");
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    (paste.title || "").toLowerCase().includes(search.toLowerCase())
  );

  function handleDelet(pasteid) {
    dispatch(removeFromPaste(pasteid));
  }

  function handleEdit(pasteid) {
    console.log("Edit paste with ID:", pasteid);
  }

  function handleUpdate(pasteid) {
    console.log("Update paste with ID:", pasteid);
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success("Copied to clipboard");
  }

  return (
    <div className="pastes-coantainer">
      <div>
        <input
          className="search-bar"
          type="search"
          placeholder="Search for filter"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="card">
        {filterData.length > 0 ? (
          filterData.map((item) => (
            <div className="single-card" key={item._id}>
              <div>{item.title}</div>
              <div>{item.content}</div>

              <div className="buttons">
                <NavLink className="button-link" to={`/pastes/edit/${item._id}`}>
                  Edit
                </NavLink>

                <button onClick={() => handleUpdate(item._id)}>Update</button>

                <button onClick={() => handleDelet(item._id)}>Delete</button>

                <NavLink className="button-link" to={`/pastes/${item._id}`}>
                  View
                </NavLink>

                <button onClick={() => handleCopy(item.content)}>Copy</button>
              </div>
            </div>
          ))
        ) : (
          <div>No pastes found.</div>
        )}
      </div>
    </div>
  );
};

export default Pastes;
