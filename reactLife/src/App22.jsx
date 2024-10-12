import React, { useState } from "react";
import { useEffect } from "react";
const App = () => {
  const [data, setData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [loader, setLoader] = useState(0);
  const [category, setCategory] = useState("");

  useEffect(() => {
    function fetchCategory() {
      fetch("https://dummyjson.com/products/category-list")
        .then((res) => res.json())
        .then((result) => {
          setCategoryList(result);
        });
    }

    !category && fetchCategory();
    function fetchData() {
      setLoader(1); 

      category
        ? fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res) => res.json())
            .then((result) => setData(result.products))
        : fetch(`https://dummyjson.com/products`)
            .then((res) => res.json())
            .then((result) => setData(result.products));
      setLoader(0);
    }

    fetchData();

    return console.log("exited...");
  }, [category]);

  console.log(data);

  return loader ? (
    <div>Loading .....</div>
  ) : (
    <div style={{ background: "black" }}>
      <div>
        <select name="" onChange={(e) => setCategory(e.target.value)} id="">
          <option value={""}>Select Category</option>
          {categoryList.map((item, idx) => (
            <option value={item} key={idx + "cat"}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        {data.map((item, idx) => (
          <div style={{ background: "white" }} key={idx + "item.brand"}>
            <h2>{item.brand}</h2>
            <h2>{item.description}</h2>
            <h2>{item.price}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
