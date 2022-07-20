
import './App.css';
import Component from './Component';
import Counter from './Counter';
import Forms from './Forms';
import NavBar from './NavBar';
import About from './Pages/About';
import Price from './Pages/Price';
import Home from './Pages/Home';
import {Route,Routes} from "react-router-dom";


function App() {
  // console.log(window.location.pathname);
  // let Component
  // switch (window.location.pathname) {
  //   case "/":
  //     Component=<Home/>
  //     break;
  //   case "/about":
  //     Component=<About/>
  //     break;
  //   case "/pricing":
  //     Component=<Price/>
  //       break;

  // }
  return (
    <div className="App">
      <NavBar/>
      {/* {Component} */}
      {/* <Counter/> */}
      {/* <Forms/> */}
      {/* <Component/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pricing" element={<Price/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

    </div>
  );
}

export default App;
