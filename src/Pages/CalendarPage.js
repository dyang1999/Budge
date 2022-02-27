import React, { useEffect, useState } from "react";
import classes from "./CalendarPage.module.css";
import NavBar from "../Components/NavBar";
import CalendarItem from "../Components/CalendarItem";
import ReminderModal from "../Components/ReminderModal";

export default function CalendarPage() {
  const [change, setChange] = useState(0);
  const [modal, setModal] = useState(false);

  const totalBudget = 560;
  const numberOfDays = 28;
  const target = totalBudget / numberOfDays;

  const [today, setToday] = useState(0);

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

  const checkAlert = () => {
    if(dailyBudgetList[today-1]>target && dailyBudgetList[today]>target){
      return true;
    }else{
      return false;
    }
  };

  useEffect(() => {
    setModal(checkAlert());
  }, [dailyBudgetList]);

  const onEditHandler = (day, value) => {
    setToday(day);
    console.log("day: ", day);
    console.log("value: ", value);
    let totalChange = target - value + change;
    setChange(totalChange);
    setDailyBudgetList((prev) => {
      console.log(prev);
      let newList = [...prev];
      newList[day] = value;
      newList = updateDailyList(day, newList);
      return newList;
    });
  };

  const updateDailyList = (dayChanged, newList) => {
    let totalBudgetLeft = totalBudget;
    for (let x = 0; x <= dayChanged; x++) {
      totalBudgetLeft -= newList[x];
    }

    for (let i = dayChanged + 1; i < numberOfDays; i++) {
      let newDailyBudget = totalBudgetLeft / (numberOfDays - dayChanged - 1);
      newList[i] = newDailyBudget.toFixed(2);
    }
    return newList;
  };

  console.log(dailyBudgetList);
  return (
    <div>
      <NavBar />
      {console.log(modal)}
      <ReminderModal show={modal} onHide={() => setModal(false)} />

      <div className={classes.root}>
        <div className={classes.textbody}>
          <h1 className={classes.title}>February 2022</h1>
          <div className={classes.inline}>
            <h2
              style={
                change >= 0
                  ? { color: "Green", fontWeight: "bold" }
                  : { color: "Red", fontWeight: "bold" }
              }
            >
              ${change}
            </h2>
            <h2 className={classes.textbody}>
              from monthly target of ${totalBudget}
            </h2>
          </div>
          <div className={classes.inline}>
            <h2>Daily target this month</h2>
            <h2
              className={classes.textbody}
              style={{ color: "#0D2054", fontWeight: "bold" }}
            >
              ${target}
            </h2>
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
              target={target}
              day={index}
              onEditHandler={onEditHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
