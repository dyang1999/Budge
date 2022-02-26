import React from "react";
import NavBar from "../Components/NavBar";
import Product from "../Components/Product";
import Location from "../Components/Location";
import classes from "./ItemPage.module.css";

import { useNavigate, useParams } from "react-router-dom";

import { useEffect } from "react";
import SearchResult from "../Components/SearchResult";

export default function ItemPage() {

  const params = useParams();
  
  useEffect(()=>{
    
    //make the API call with ITEM ID
    
    //params.item == itemID
    console.log("HERE",params.item);

    //set the location array

    //set the item data


  }, [])

  const locationArray = [
    {
      location: "FairPrice Xtra (Jurong Point)",
      distance: 3,
      openingHours: "Daily, 0900-2300",
      stock: 100,
      price: "$3.80 / bottle",
      promo: false
    },
    {
      location: "FairPrice Xtra (Jurong Point)",
      distance: 3,
      openingHours: "Daily, 0900-2300",
      stock: 100,
      price: "$3.80 / bottle",
      promo: true
    },
  ];

  const itemData = {
    image: "________",
    name: "Kirin Beer",
    country: "Japan",
    description:
      "Clear golden yellow colour with light head; aromas of sweet malt, sour bread, light cereal and soft apple fruit with delicate floral, herb, apple/pear and citrus notes; dry, light bodied, crisp and refreshing.",
  };

  const recommended = [
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

  const navigate = useNavigate();
  const backHandler = () => {
    navigate(-1);
  }

  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div>
          <p onClick={backHandler}> 🔙 to results</p>
        </div>

        <div className={classes.card}>
          <Product data={itemData}/>
          <p>Based on your location...</p>
          {locationArray.map((location) => (
            <Location data={location} />
          ))}
        </div>

        <div>
          <h1 className={classes.bottomText}>You might also like...</h1>
          <div className={classes.reccs}>
          {recommended.map((item)=>
            (<SearchResult data={item} key={item.itemID}/>)
          )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
