import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile">
            <Header backButton="/" />
            <h1>I am profile page.</h1>
          </Route>

          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
        {/* cards */}
        {/* buttons */}
        {/* chats */}
      </Router>
    </div>
  );
}

export default App;
