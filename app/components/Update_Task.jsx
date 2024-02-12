import React from "react";
import { useForm } from "react-hook-form";

const Update_Task = ({ value, updatevalue, id }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      inputname: value,
    },
  });

  const onSubmit = (data) => {
    const newid = id;
    updatevalue(data.inputname, newid);
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
            <p className=" text-white"> </p>
          </div>

          <div className=" bg-red-400 min-w-[100px] h-[42px] py-2 text-center rounded-lg cursor-pointer ">
            <button type="submit" className=" text-white font-semibold ">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update_Task;
