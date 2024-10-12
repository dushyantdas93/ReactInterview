import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(0);
  useEffect(() => {
    const fetchCategory = () => {
      fetch("https://dummyjson.com/products/category-list")
        .then((res) => res.json())
        .then((result) => setCategoryList(result));
    };
    fetchCategory();

    const fetchData = () => {
      setLoader(1);
      category
        ? fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((result) => setData(result.products))
        : fetch(`https://dummyjson.com/products`)
            .then((res) => res.json())
            .then((result) => setData(result.products));
      setLoader(0);
    };

    fetchData();
    return console.log("exited...");
  }, [category]);
  console.log(data);

  return loader ? (
    <div>loading ....</div>
  ) : (
    <div>
      <div className="">
        <select
          name="category"
          id=""
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">select category</option>
          {categoryList.map((item, idx) => (
            <option key={idx + "dfs"} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div className="">
        {data.map((item, idx) => {
          return (
            <ul key={idx}>
              <li>
                {item.id} {item.title} <br />
                description:-- {item.description}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default App;
