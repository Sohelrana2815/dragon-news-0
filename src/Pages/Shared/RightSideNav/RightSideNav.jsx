import fb from "../../../assets/Facebook.png";
import twitter from "../../../assets/Twitter.png";
import instagram from "../../../assets/Instagram.png";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <>
      {/* login with */}
      <div className="p-4 space-y-3">
        <h2 className="text-2xl">Login With</h2>
        <button className="btn btn-outline w-full">Login with Google </button>
        <button className="btn btn-outline w-full">Login with Github </button>
      </div>
      {/* find us */}
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
      {/* q-zone */}
      <div className="p-4 space-y-3 ">
        <h2 className="text-2xl text-black">Q-zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </>
  );
};

export default RightSideNav;
