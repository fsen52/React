import Clock1 from "./components/clock1/Clock1";
import Clock2 from "./components/clock2/Clock2";
import Hello from "./components/hello/Hello";
import Jsx from "./components/jsx/Jsx";
import Props from "./components/props/props";
import ExternalStyle from "./components/style/ExternalStyle";
import Style from "./components/style/InlineStyle";
import InternalStyle from "./components/style/InternalStyle";
import Test from "./components/test/Test";
import Profile from "./components/profile/Profile";
import Image from "./components/image/Image.js";
import { Component } from "react";
import BSReact from "./components/bootstrap-react/BSReact";
import Shop from "./components/shop/Shop";
import State from "./components/state/State";
function App() {
  const avatarUrl =
    "https://images.unsplash.com/photo-1638323307587-4f4eda877bc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";

  return (
    <div>
      <div className="App"></div>
      {/*
        <Hello/>
        <Test/>
        <Jsx/>
        <Style/>
        <InternalStyle/>
        <ExternalStyle/> 
        <Clock1/>
        <Props ad="Rüya" />
       <Clock2 yaziRengi="yellow" zeminRengi="navy"/>
       <Clock2 yaziRengi="yellow" zeminRengi="red"/>
       <Clock2 yaziRengi="white" zeminRengi="black"/>
<Profile
        avatar={avatarUrl}
        name="Ali Gel"
        location="Turkiye, Ankara"
        shot="5"
        followers="15"
        following="25"
       

        <Profile
        avatar="https://images.unsplash.com/photo-1550985607-b636cef44ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=835&q=80"
        name="Veli Sel"
        location="Turkiye, Ankara"
        shot="15"
        followers="45"
        following="65"
      />
        />
        <Image />
      <BSReact/>
      <Shop />

      */}

      <State />
    </div>
  );
}

export default App;
