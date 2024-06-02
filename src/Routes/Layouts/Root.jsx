import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-[1440px] mx-auto mt-[50px] font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
