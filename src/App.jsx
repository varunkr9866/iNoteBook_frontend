import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import { Home } from "./components/Home.jsx";

import NoteState from "./context/notes/NoteState.jsx";
import { Alert } from "./components/Alert.jsx";
import Signup from "./components/Signup.jsx";
import Login from "./components/Login.jsx";
import About from "./components/About.jsx";

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
