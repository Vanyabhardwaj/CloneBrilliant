import React from "react";
import Mid from "./Mid";
import Upper from "./Upper";
import Header from "./Header";

function App() {
  return(
    <div>
       <Header/> 
       <Upper/>
       <Mid/>

      {/* in mid, use other,jsx as they are three same */}
      {/* some other mid section for those locked things */}

      {/* <Footer/> */}
    </div>
  )
}

export default App;
