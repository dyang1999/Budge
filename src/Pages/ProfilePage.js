import React from "react";
import NavBar from "../Components/NavBar";
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import classes from "./ProfilePage.module.css";

export default function ProfilePage() {
  return (
    <div>
      <NavBar/>
      <Button variant="danger">testing</Button>

    </div>
  );
}
