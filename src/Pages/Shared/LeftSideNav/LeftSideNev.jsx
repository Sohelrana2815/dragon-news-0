import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNev = () => {
  const [categories, setCategories] = useState([]);

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  return (
    <>
      <div className="p-6 space-y-8">
        <h2 className="text-2xl">All Category: {categories.length} </h2>
        <h2 className="text-2xl">National News</h2>
        {categories.map((category) => (
          <>
            <Link to={`/category/${category.id}`} className="block text-2xl">
              {category.name}
            </Link>
          </>
        ))}
      </div>

      <div>
        {newsData.map((news) => (
          <>
            <div>
              <img src={news.author.img} alt={news.category_id} />
              <p>{news.title}</p>
              <p>{news.name}</p>
              <div className="flex justify-between">
                <p>{news.author.name}</p>
                <p>{news.author.published_date}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default LeftSideNev;
