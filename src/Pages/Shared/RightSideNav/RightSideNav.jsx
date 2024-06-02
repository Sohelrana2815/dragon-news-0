import fb from "../../../assets/Facebook.png";
import twitter from "../../../assets/Twitter.png";
import instagram from "../../../assets/Instagram.png";
const RightSideNav = () => {
  return (
    <>
      <div className="p-4 space-y-3">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">Login with Google </button>
        <button className="btn btn-outline w-full">Login with Github </button>
      </div>
      <div className="p-4">
        <h2 className="text-2xl">Find Us On</h2>
        <div className="mt-4">
          <a href="#" className="flex items-center border rounded-t-lg p-4 ">
            <img src={fb} alt="" className="mr-3" /> Facebook
          </a>
          <a href="#" className="flex items-center border-x  p-4 ">
            <img src={twitter} alt="" className="mr-3" /> Facebook
          </a>
          <a href="#" className="flex items-center border rounded-b-lg p-4 ">
            <img src={instagram} alt="" className="mr-3" /> Facebook
          </a>
        </div>
      </div>
    </>
  );
};

export default RightSideNav;
