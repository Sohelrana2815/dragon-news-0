import BreakingNews from "../BreakingNews";
import Header from "../Shared/Header/Header";
import LeftSideNev from "../Shared/LeftSideNav/LeftSideNev";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNev></LeftSideNev>
        </div>
        <div className="md:col-span-2 border">Main News Coming...</div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
