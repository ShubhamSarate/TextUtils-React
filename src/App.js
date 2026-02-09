import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
// import About from './components/About'
import Alert from './components/Alert'
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

  // Dark/Light Mode
  const [mode,setMode] = useState('light');

  const toggleHandle = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is Enable" , "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enable" , "success");
    }
  }
  
  // Alert
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      type: type,
      msg: message
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" home="Home" aboutText="About-TextUtils" mode={mode} toggleMode={toggleHandle}/>
    <Alert alert={alert}/>
    <div className='container'>
      {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
            <TextForm message="Enter the Text to Analyze Below" mode={mode} showAlert={showAlert}/>
          {/* </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
