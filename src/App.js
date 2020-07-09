import React, { useState, useEffect } from "react";
import "./index.css";
import firebase from "./components/Firestore";
import TodoItems from "./components/TodoItems";
import TodoList from "./components/TodoList";

export default function App() {
  const db = firebase.firestore();
  var docRef = db.collection("todos").doc("actions");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          let dataItem = [];
          dataItem = Array.from(doc.data().items);
          setTodos(dataItem);
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }, []); // eslint-disable-line

  const addItem = (text) => {
    const addedItem = {
      text: text,
      key: Date.now(),
      isChecked: false,
    };
    const newTodos = [...todos, addedItem];
    setTodos(newTodos);
    docRef
      .set({
        items: newTodos,
      })
      .then(function () {
        console.log("Done add");
      });
  };
  const check = (key) => {
    let newTodos = [...todos];
    newTodos = newTodos.map((item) => {
      if (item.key === key) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });
    setTodos(newTodos);
    docRef
      .set({
        items: newTodos,
      })
      .then(function () {
        console.log("Done check");
      });
  };
  const deleteItem = (key) => {
    const newTodos = [...todos];
    const newItems = newTodos.filter((item) => item.key !== key);
    setTodos(newItems);
    docRef
      .set({
        items: newItems,
      })
      .then(function () {
        console.log("Done delete");
      });
  };
  return (
    <div className="App text-center flex items-center flex-col">
      <h1 className="text-3xl my-12 text-teal-700 font-bold">My TodoList</h1>
      <TodoList addItem={addItem} />
      <TodoItems todos={todos} check={check} deleteItem={deleteItem} />
    </div>
  );
}
