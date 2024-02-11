"use client";
import Image from "next/image";
import React, { useState } from "react";

const Show_Task = ({ array }) => {
  console.log(array);
  return (
    <>
      <div className=" w-full  flex  justify-center pt-3">
        <div className="w-full max-w-[500px] rounded-lg shadow-lg bg-gradient-to-r from-green-600 to-yellow-600 h-[40px] flex items-center px-2">
          <div className="text-white  flex w-10/12"> fddff</div>
          <div className=" flex w-1/12">
            {" "}
            <Image src="./edit.svg" width={30} height={30} alt="Edit image" />
          </div>
          <div className=" flex w-1/12">
            <Image src="./delete.svg" width={30} height={30} alt="Edit image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Show_Task;
