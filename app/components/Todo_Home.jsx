import React from "react";
import Add_Task from "./Add_Task";
import Show_Task from "./Show_Task";

const Todo_Home = () => {
  return (
    <div className=" absolute max-w-[550px] w-full flex flex-col bg-black min-h-[550px] rounded-lg  ">
      <Add_Task />
      <div className=" pt-8">
        {Array.from({ length: 20 }).map(() => (
          <Show_Task />
        ))}
      </div>
    </div>
  );
};

export default Todo_Home;
