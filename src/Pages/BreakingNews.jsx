import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Latest</button>
      <Marquee speed={80}>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
