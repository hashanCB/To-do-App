"use client";
import React, { useState } from "react";
import Add_Task from "./Add_Task";
import Show_Task from "./Show_Task";
import Update_Task from "./Update_Task";

const Todo_Home = () => {
  const [Todo, setTodo] = useState([]);
  const [updatetodo, setUpdatetodo] = useState({
    value: "",
    bool: false,
    index: "",
  });

  const addtodolist = (newval) => {
    console.log(newval);
    setTodo((prev) => [...prev, newval]);
  };

  const updatetodolist = (value, bool, index) => {
    setUpdatetodo({
      value: value,
      bool: bool,
      index: index,
    });
  };

  const updatenewvalue = (updatevalue, id) => {
    const newArray = [...Todo];
    // Update the value at the specified index
    newArray[id] = updatevalue;
    setTodo(newArray);

    setUpdatetodo({
      value: "",
      bool: false,
      index: "",
    });
  };

  return (
    <div className=" absolute max-w-[550px] w-full flex flex-col bg-black min-h-[550px] rounded-lg  ">
      <Add_Task todoadd={addtodolist} />
      <div className=" pt-8">
        {updatetodo.bool ? (
          <Update_Task
            value={updatetodo.value}
            id={updatetodo.index}
            updatevalue={updatenewvalue}
          />
        ) : (
          <Show_Task todoList={Todo} updatelist={updatetodolist} />
        )}
      </div>
    </div>
  );
};

export default Todo_Home;
