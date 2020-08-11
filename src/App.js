import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header, Navigation, Drawer, Content, Layout } from "react-mdl";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";
//import LogoImage from './public/background.jpg';

//var sectionStyle = {
 //   backgroundImage: `url(${LogoImage})`


function App() {
    return (    

  

        <div c>
      <BrowserRouter>
        <div className="demo-big-content">
          <Layout>
            <Header
              className="headerApp"
              title={
                <Link to="/" style={{ color: "white" }}>
                  {" "}
                  Vikas{" "}
                </Link>
              }
              scroll
            >
              <Navigation>
                {/* <Link to="/about">About</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contacts">Contacts</Link>
              </Navigation>
            </Header>
            <Drawer title="Vikas">
              <Navigation>
                <Link to="/">Home</Link>
                {/* <Link to="/about">About</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contacts">Contacts</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/projects" component={Projects}></Route>
                <Route exact path="/resume" component={Resume}></Route>
                <Route exact path="/contacts" component={Contacts}></Route>
              </Switch>
            </Content>
          </Layout>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
