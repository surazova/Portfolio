 React, { Component } from "react";

// components
import Header from "./my-portfolio/src/components/headerComponent/header";

import Footer from "/my-portfolio/src/components/footerComponent/footer";

import Homepage from "/my-portfolio/src/components/pages/homePage";

// includes
import "./Assets/css/default.min.css";

class App extends Component {
  render() {
    return <div className="App" 
    
    <Header />

<Homepage />

<Footer />

    />;
  }
}

export default App;
