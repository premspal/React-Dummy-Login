import NavBar from "./components/NavBar";
import UserLogin from "./components/UserLogin";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [set, setState] = useState({ userName: "wrong", passWord: "" });

  //login handler is called by UserLogin component
  const loginHandler = (username, password) => {
    setState({ userName: username, passWord: password });

    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn && <UserLogin onLogin={loginHandler} />}
      {isLoggedIn && <NavBar logout={logoutHandler} username={set} />}
    </div>
  );
}

export default App;
