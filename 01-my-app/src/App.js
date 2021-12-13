import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BootstrapClassicPage from "./pages/BootstrapClassicPage";
import BootstrapReactPage from "./pages/BootstrapReactPage";

import Header from "./components/shared/Header";
import Menu from "./components/shared/Menu";

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
import Counter from "./components/counter/Counter";
import Clock3 from "./components/clock3/Clock3";
import ChangeTitle from "./components/useeffect/ChangeTitle";
import UserCards from "./components/usercards/UserCards";
import Countries from "./components/countries/Countries";
import Posts from "./components/posts/Posts";
import RandomImages from "./components/randomImages/RandomImages";
import Form1 from "./components/forms/Form1";
import Form2 from "./components/forms/Form2";
import Form3 from "./components/forms/Form3";
import Form4 from "./components/forms/Form4";
import { Col, Container, Row } from "react-bootstrap";
import ImagePage from "./pages/ImagePage";
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
      <State />
      <Counter />
      <Clock3/> 
      <ChangeTitle/>
      <UserCards />
      <Countries />
      <Posts />
      <RandomImages />
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
*/}

      <Router>
        <Header />
        <Container>
          <Row>
            <Col md={4}>
              {" "}
              <Menu />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/image" element={<ImagePage />} />
                <Route path="/bsclassic" element={<BootstrapClassicPage />} />
                <Route path="/bsreact" element={<BootstrapReactPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
