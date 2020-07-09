import React from "react";

const createTask = ({ item, check, deleteItem }) => {
  return (
    <li
      className="max-w-xl w-full flex justify-between pl-8 pr-6 pb-1 mb-4 border-b border-solid border-teal-200"
      key={item.key}
      onClick={() => check(item.key)}
    >
      <span
        className="text-teal-600 font-semibold mr-4"
        style={{
          textDecoration: item.isChecked ? "line-through" : "none",
        }}
      >
        {item.text}
      </span>
      <button
        className="bg-transparent hover:bg-teal-400 text-teal-700 font-semibold hover:text-white py-1 px-1 border border-teal-100 hover:border-transparent rounded text-xs"
        onClick={(e) => {
          e.stopPropagation();
          deleteItem(item.key);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default function TodoItems({ todos, check, deleteItem }) {
  const items = todos;
  const listItems = items.map((item) =>
    createTask({ item, check, deleteItem })
  );
  return <ul className="listItem list-none max-w-xl w-full">{listItems}</ul>;
}
