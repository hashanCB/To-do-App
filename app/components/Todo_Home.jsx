"use client";
import React, { useState } from "react";
import Add_Task from "./Add_Task";
import Show_Task from "./Show_Task";

const Todo_Home = () => {
  const [Todo, setTodo] = useState([]);

  const addTask = (name) => {
    setTodo((prev) => {
      const newarray = [...prev, name];
      return newarray;
    });
  };
  return (
    <div className=" absolute max-w-[550px] w-full flex flex-col bg-black min-h-[550px] rounded-lg  ">
      <Add_Task addtask={addTask} />
      <div className=" pt-8">
        <Show_Task array={[...Todo]} />
      </div>
    </div>
  );
};

export default Todo_Home;
