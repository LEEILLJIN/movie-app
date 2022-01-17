import { useEffect, useState } from "react";
import Movie from "./components/Movie";

import {
  BrowserRouter as Router,
  Switch,
  Route,
//  Link
}from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return <Router>
    <Switch>
      <Route path="/movie/:id">
        <Detail/>
      </Route>

      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  </Router>;
}

export default App;

//switch 컴포넌트가 쓰여진 이유는 한번에 하나의 Route만 렌더링하기 위해서다.
//React Router에서는 내가 원하면 두개의 Route을 한번에 렌더링 할 수 있다.
//Browser Router에서 URL은 일반적으로 생각하는 웹사이트의 것과 같다. ex) /movie
//Hash Router을 사용한다면 ex)/#/movie 이런식으로 #이 붙는다.