"use client";
import React, { useState } from "react";
import Add_Task from "./Add_Task";
import Show_Task from "./Show_Task";

const Todo_Home = () => {
  const [Todo, setTodo] = useState([]);

  const TodoAdd = (addvale) => {
    // console.log(addvale);
    setTodo((prevtodo) => {
      const newvalue = [...prevtodo, addvale];
      console.log(Todo);
      return newvalue;
    });
  };

  console.log(Todo);
  return (
    <div className=" absolute max-w-[550px] w-full flex flex-col bg-black min-h-[550px] rounded-lg  ">
      <Add_Task add={TodoAdd} />
      <div className=" pt-8">
        <Show_Task listt={[...Todo]} />
      </div>
    </div>
  );
};

export default Todo_Home;
