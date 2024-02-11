"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";

const Add_Task = ({ addtask }) => {
  const [addTodo, setAddTodo] = useState(" ");
  const refInput = useRef();

  const setTodo = (valuename) => {
    if (valuename === "") {
      console.log("error");
    } else {
      setAddTodo(valuename);
    }
  };
  const handleb = () => {
    setAddTodo("");
    if (addTodo.trim() === "") {
      console.log("enter value red");
      // refInput.current.focus();
    } else {
      addtask(addTodo);
      refInput.current.style.borderColor = "";
    }
  };
  return (
    <div className=" w-full">
      <Formik
        initialValues={{ input: "" }}
        validationSchema={Yup.object({
          input: Yup.string().required("*Required"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <div className=" w-full px-8  gap-4 pt-[30px] flex ">
            <div className=" flex flex-col w-full">
              <Field
                type="text"
                name="inputname"
                className=" w-full h-[40px] rounded-md pl-5 "
              />
              <ErrorMessage
                name="input"
                className=" text-red-500"
                component="div"
              />
            </div>

            <div className=" bg-red-400 min-w-[100px] h-[42px] py-2 text-center rounded-lg cursor-pointer ">
              <button type="submit" className=" text-white font-semibold ">
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Add_Task;
