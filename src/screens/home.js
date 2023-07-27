import React  from "react";

function Homepage(){
    var tutorList = [];
    for(let i=0; i<8; i++){
        tutorList.push(
            <button className="tutor rel" key ={ "tutor-live-"+ i}>
                <img src= {"http://placeimg.com/100/100/people?" + i} className="b1" />
            </button>
        )
    }
    var courseList = [];
    for(let i=0; i<8; i++){
        courseList.push(
            <a href=" " className="tutor rel" key ={ "course-live-"+ i}>
                
        </a>
        )
    }
    return(
        <div className="home-page rel">
         <div className="section rel">
         <h2 className="title s24 fontb"> Streaming <span className="fontn"> Now</span></h2>
          <div class Name="tutors rel fex">
            {tutorList}
          </div>
         </div>
         <div className="section rel">
         <h2 className="title s24 fontb">Popular <span className="fontn"> This Wek</span></h2>
          <div class Name="tutors rel fex">
            {courseList}
          </div>
         </div>
        </div>
    )
}
export default Homepage;