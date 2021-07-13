import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import { db } from "./firebase";

import firebase from "firebase";

export default function App() {
  const [data, setData] = useState();
  const [todo, setTodo] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    db.collection("todo").onSnapshot((snap) => {
      setData(
        snap.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          isCompleted: doc.data().isCompleted,
        }))
      );
    });
  };

  const addTodo = (e) => {
    e.preventDefault();
    console.log("done");
    db.collection("todo").add({
      isCompleted: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todo,
    });
    setTodo("");
  };

  return (
    <>
      <h1>TODO Anotha one!!</h1>
      <form>
        <input
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type='text'
        />
        <button type='submit' onClick={addTodo}>
          BOOM
        </button>
      </form>
      {/* {data ? (
        data.map((itm) => (
          <Todo todo={itm.todo} isCompleted={itm.isCompleted} id={itm.id} />
        ))
      ) : (
        <p>Loading...</p>
      )} */}

      {data ? (
        data.map((itm) => (
          <Todo todo={itm.todo} isCompleted={itm.isCompleted} id={itm.id} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
