import React, { useEffect, useState } from "react";
import classes from "./CalendarPage.module.css";
import NavBar from "../Components/NavBar";
import CalendarItem from "../Components/CalendarItem";

export default function CalendarPage() {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28,
  ];

  const [change, setChange] = useState(0);

  const totalBudget = 280;
  const numberOfDays = 28;

  const getDailyBudget = (numberOfDays) => {
    return totalBudget / numberOfDays;
  };
  const createInitialDailyBudgetListState = () => {
    let initialBudget = [];
    for (let i = 0; i < numberOfDays; i++) {
      initialBudget.push(getDailyBudget(numberOfDays));
    }
    return initialBudget;
  };

  const initialDailyBudgetList = createInitialDailyBudgetListState();
  const [dailyBudgetList, setDailyBudgetList] = useState(
    initialDailyBudgetList
  );
  
  const onEditHandler = (day, value) => {
    console.log("day: ", day)
    console.log("value: ", value)
    setDailyBudgetList(prev => {
      let newList = [...prev]
      newList[day] = value
      newList = updateDailyList(day, newList)
      return newList
    })
  }



  const updateDailyList = (dayChanged, newList) => {
    let totalBudgetLeft = totalBudget
    for (let x=0; x<=dayChanged; x++){
      totalBudgetLeft -= newList[x]
    }
    for (let i=dayChanged+1; i<numberOfDays; i++){
      let newDailyBudget = totalBudgetLeft / numberOfDays;
      newList[i] = newDailyBudget.toFixed(2);
    }
    return newList;
  }

  console.log(dailyBudgetList)
  return (
    <div>
      <NavBar />
      <div className={classes.root}>
        <div className={classes.textbody}>
          <h1>February 2022</h1>
          <div className={classes.inline}>
            <h2>${change}</h2> <h2 className={classes.textbody}>from target</h2>
          </div>
        </div>
        <h2 className={classes.text}>Sun Mon Tue Wed Thu Fri Sat</h2>
        <div className={classes.calendar}>
          <div className={classes.cell}>
            <p className={classes.text1}>30</p>
            <p className={classes.text2}>$ - </p>
          </div>
          <div className={classes.cell}>
            <p className={classes.text1}>31</p>
            <p className={classes.text2}>$ - </p>
          </div>
          {dailyBudgetList.map((budget, index) => (
            <CalendarItem 
            key={index}
            budget={budget} 
            day={index} 
            onEditHandler = {onEditHandler}
            />
          ))}
          {/* {data.map((item, change) => (
            <CalendarItem
              data={item}
              key={item}
              onChange={setChange}
              expenseChange={change}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}
