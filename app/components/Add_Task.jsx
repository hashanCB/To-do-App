"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "../utils/Validetion/UserValidation";

const Add_Task = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className=" w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" w-full px-8  gap-4 pt-[30px] flex ">
          <div className=" flex flex-col w-full">
            <input
              type="text"
              name="inputname"
              className=" w-full h-[40px] rounded-md pl-5 "
              {...register("inputname")}
            />
            <p className=" text-white"> {errors.inputname?.message}</p>
          </div>

          <div className=" bg-red-400 min-w-[100px] h-[42px] py-2 text-center rounded-lg cursor-pointer ">
            <button type="submit" className=" text-white font-semibold ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add_Task;
