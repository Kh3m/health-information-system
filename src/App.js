import React, { useState } from 'react';
import './App.css';

// Custom component imports
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import HISIntro from "./components/HISIntro/HISIntro";
import Infos from "./components/Infos/Infos";

function App() {

  const [infoState, setInfoState] = useState([
      {
        brief: "0803-191-5694",
        heading: "EMERGENCY SERVICE",
        btnCaption: "See More",
        detail: "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy." 
      },
      {
        brief: "fa fa-calendar-o",
        heading: "DO YOU WANT TO MAKE AN APPOINTMENT",
        btnCaption: "See More",
        detail: "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy." 
      },
      {
        brief: "fa fa-handshake-o",
        heading: "About Us",
        btnCaption: "See More",
        detail: "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy." 
      }
    ]);
  return (
 
    <div className="App">
      <Header />
      <main className="Main">
        <Banner />
        <HISIntro heading="National Health Information System"/>
        <Infos infos={infoState}/>
        <HISIntro heading="Why did you need NHIS account?" btn={true}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
