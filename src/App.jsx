import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Home } from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is amazing React course" />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </div>
      </NoteState>
    </>
  );
}

export default App;
