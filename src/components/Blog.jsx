import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>day la blog</h1>
      <button
        onClick={() => {
          navigate("/homePage");
        }}
        className="px-6 py-3 font-medium text-blue-500 bg-blue-100 rounded-lg"
      >
        đến trang chủ
      </button>
    </div>
  );
};

export default Blog;
