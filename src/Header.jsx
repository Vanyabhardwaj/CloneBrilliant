import React from "react";
import './index.css';

function Header(){
    return(
        <div className="row head">
           <div className="col-lg-2">
              <a><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJocrmiAOeAdSMVeg-66OGzD_Dpyr5ztOQw9luLV9BpmCF13SUMnoT-wCun__Uj_rjQ&usqp=CAU"></img>
              </a> 
           </div>

           <div className="col-lg row">
                <div className="col-4">
                   <div className="row">
                   <h5 className="col">
                        <a className="io" href="">Today</a>
                   </h5>
                   <h5 className="col">
                        <a className="io" href=""> <b>Courses</b></a>
                   </h5>
                   <h5 className="col">
                        <a className="io" href="">Practice</a>
                   </h5>
                   </div>
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col bt">
                     <button className="btn btn-outline-primary btn-sm ">Log in</button>
                     <button className="btn btn-primary btn-sm">Sign up</button>
                </div>
           </div>
        </div>
    )
}

export default Header;