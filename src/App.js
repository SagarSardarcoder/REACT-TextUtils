import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.background = "black"
      showAlert("Dark mode enabled", "success")
    } else {
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light mode enabled", "success")
    }
  }
  return (
    <Router>
      <div>
        <Navbar title="textUtils" toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route exact path="/about" element={<About />}/>

          <Route exact path="/" element = {<TextForm mode={mode} showAlert={showAlert} />}/>

        </Routes>
        <Alert alert={alert} />

      </div>
    </Router>
  )
}

export default App;
