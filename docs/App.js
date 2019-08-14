import React from 'react';

import {  Button, BiButton, ChackraButton } from 'cosmos';
import "./App.css";


const App = () => (
  <div className="container">
    <Button type="submit" bg="#222222" message="CoSmoS" pt="12px" pb="12px" pl="60px" pr="60px" hbg="green" key="0" bg="#222222"/>
    <BiButton type="submit" bg="#222222" message="CoSmoS" pt="12px" pb="12px" pl="60px" pr="60px" hbg="green" key="1" right="true" bg="#222222" left="true"/>
    <ChackraButton type="submit" bg="#222222" message="CoSmoS" pt="14px" pb="14px" pl="80px" pr="80px" bg="#222222" key="2"/>
  </div>
)


export default App;
