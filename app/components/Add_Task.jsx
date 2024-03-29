"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../utils/Validetion/UserValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const Add_Task = ({ todoadd }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    todoadd(data.inputname);
    reset();
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
