"use client";
import React, { useState } from "react";

const Add_Task = ({ add }) => {
  const [namevaue, setnamevalue] = useState("");
  const handler = (values) => {
    setnamevalue(values);
  };
  const passperent = () => {
    add(namevaue);
    setnamevalue("");
  };
  return (
    <div className=" w-full">
      <div className=" w-full px-8  gap-4 pt-[30px] flex ">
        <input
          type="text"
          placeholder="Enter your task"
          className=" w-full h-[40px] rounded-md pl-5 focus:outline-none"
          onChange={(e) => handler(e.target.value)}
        />
        <div
          className=" bg-red-400 min-w-[100px] py-2 text-center rounded-lg cursor-pointer "
          onClick={passperent}
        >
          <input
            type="submit"
            value="ADD"
            className=" text-white font-semibold "
          />
        </div>
      </div>
    </div>
  );
};

export default Add_Task;
