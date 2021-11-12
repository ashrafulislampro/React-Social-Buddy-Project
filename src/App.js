import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Home/Home";
import NoMatch from "./NoMatch/NoMatch";
import Comment from "./Components/Comment/Comment";
import PostDetails from "./Components/PostDetails/PostDetails";


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:postId">
            <PostDetails/>
          </Route>
          <Route path="/comment/:commentId">
            <Comment></Comment>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
