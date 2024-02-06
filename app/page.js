import Image from "next/image";
import Todo_Home from "./components/Todo_Home";

export default function Home() {
  return (
    <div className=" relative  h-[100vh] justify-center flex pt-[5%] ">
      <Todo_Home />{" "}
    </div>
  );
}
