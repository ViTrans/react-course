import axios from "axios";
import { useEffect, useState } from "react";
import lodash from "lodash";

// api = "https://hn.algolia.com/api/v1/search?query=react"
const HackerNews = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const handleFetchData = async (query) => {
    try {
      const response = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setData(response.data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  const hanldeUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
  useEffect(() => {
    handleFetchData(query);
  }, [query]);
  return (
    <div>
      <input
        onChange={hanldeUpdateQuery}
        type="text"
        placeholder="Enter your content"
        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
      />
      {data.map((item, index) => (
        <h3 key={index}>{item.title}</h3>
      ))}
    </div>
  );
};

export default HackerNews;
