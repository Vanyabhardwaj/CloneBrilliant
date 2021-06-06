import react from "react";
import './index.css';

function Upper(){
    return(
        <div className="up">
            <a href=""> &lt; Back to all courses</a>
           <div className="row">
           <div className="leftside col-lg">
              <h1>Logic</h1>
              <h3>Stretch your analytic muscles with knights, knaves, logic gates, and more!</h3>
              <p>The beginning of our introductory math journey is Logic. Through these challenging problem solving exercises, you'll construct the critical thinking skills that are the basis for mathematical reasoning.
              <br/><br />You'll use limited information to make predictions – eliminating the impossible to uncover the truth. This course builds up to some truly mind-bending challenges! <a href="">Read more.</a></p>
           </div>
           
           <div className="rightside col-lg">
               <div><img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254" alt="image"/></div>
               <div className="row">
                   <div className="col-lg">
                       <h2>37</h2>
                       <h6>Interactive quizzes</h6>
                   </div>
                   <div className="col-lg">
                       <h2>265+</h2>
                       <h6>Concepts and exercises</h6>
                   </div>
               </div>
               <button className="btn btn-dark">Start Course</button>
           </div>
           </div>

        </div>
    )
}

export default Upper;