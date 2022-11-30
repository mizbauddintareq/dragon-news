import { useLoaderData } from "react-router-dom";

const Category = () => {
  const news = useLoaderData();
  return (
    <div>
      <h4>This is category has {news.length}</h4>
    </div>
  );
};

export default Category;
