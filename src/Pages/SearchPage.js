import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";

import { useParams, useNavigate } from "react-router-dom";
import SearchResult from "../Components/SearchResult";
import classes from "./SearchPage.module.css";

export default function SearchPage() {
  const params = useParams();

  useEffect(() => {
    //call backend api to get a list of results
    console.log("HERE", params.keyword);
    setInput(params.keyword);
  }, []);

  const resultArray = [
    {
      itemID: 1,
      name: "Kirin Ichiban",
      image: "https://images.heb.com/is/image/HEBGrocery/000121654?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0",
      price: "12",
      quantity: "12x330ml",
      stock: 3,
    },
    {
      itemID: 2,
      name: "Kirin Black",
      image: "https://www.wine-searcher.com/images/labels/10/33/10961033.jpg?width=260&height=260&fit=bounds&canvas=260,260",
      price: "11",
      quantity: "24x330ml",
      stock: 3,
    },
    {
      itemID: 3,
      name: "Kirin Ichiban",
      image: "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13008594_RXL1_20210217.jpg",
      price: "11",
      quantity: "24x330ml",
      stock: 3,
    },
  ];

  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/Results/${input}`);
  };

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.search}>
          <form
            className={classes.form}
            id="filterForm"
            onSubmit={submitHandler}
          >
            <input
              className={classes.searchBar}
              value={input}
              onInput={(e) => setInput(e.target.value)}
              type="text"
            />
          </form>
        </div>
        <p className={classes.subtitle}>3 results for '{input}'</p>
        <div className={classes.results}>
          {resultArray.map((item) => (
            <SearchResult data={item} key={item.key} />
          ))}
        </div>
      </div>
    </div>
  );
}
