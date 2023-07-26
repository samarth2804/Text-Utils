import { useState } from "react";
import "./App.css";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
// import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleDarkMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled ", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Navbar title="Text Utils" about="About" mode={mode} toggleDarkMode={toggleDarkMode} showAlert={showAlert}/>
      <Alert alert={alert} />
      <TextForm heading="Enter the Text to Analyse " mode={mode} showAlert={showAlert} />
      <Footer/>
    {/* <BrowserRouter> */}
        {/* <Routes>
          <Route exact path="/"  element={<TextForm heading="Enter the Text to Analyse " mode={mode} showAlert={showAlert} />}/>
          <Route exact path="/about"  element={<About/>}/>
          
        </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
