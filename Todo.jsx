import React from "react";
import { db } from "./firebase";

function Todo({ todo, isCompleted, id }) {
  const toggleClick = (e) => {
    e.preventDefault();
    db.collection("todo").doc(id).update({
      isCompleted: !isCompleted,
    });
  };

  const handleDelete = () => {
    db.collection("todo").doc(id).delete();
  };

  console.log(isCompleted);
  return (
    <>
      <div>
        <p>{todo}</p>
        <p>{isCompleted ? "In progress" : "Completed"}</p>
      </div>
      <div>
        <button onClick={toggleClick}>
          {isCompleted ? "In progress" : "Completed"}
        </button>
        <button onClick={handleDelete}>x</button>
      </div>
    </>
  );
}

export default Todo;
