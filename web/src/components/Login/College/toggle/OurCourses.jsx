import React from 'react'
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const OurCourses = () => {
    return (
        <div className="container-small">
            <div className="row">
                <div className="col-6 bg-light"><h2>Running Courses</h2></div>
            </div>  
            <div className="row">
                <div className="col-6">
                <ul >
                    <li class="d-flex justify-content-between align-items-center my-3">
                       <div>
                       <img src="../../../images/core.jpg" width={100} height={100}/>
                        {" "}Core UI 
                       </div>
                        
                         <div class="card">
                            <div class="card-body">
                                <PeopleAltIcon/>
                            </div>
                         </div>
                         <div class="card">
                            <div class="card-body">
                                <EventAvailableIcon/>
                            </div>
                         </div>
                         <div class="card">
                            <div class="card-body">
                                <ArrowForwardIosIcon/>Details
                            </div>
                         </div>
                        
                    </li>
                    <li class="d-flex justify-content-between align-items-center my-3">
                    <div>
                        <img src="../../../images/corejava1.jpg" width={100} height={100}/>
                        {" "} Core Java
                    </div>
                    <div class="card">
                            <div class="card-body">
                                <PeopleAltIcon/>
                            </div>
                         </div>
                         <div class="card">
                            <div class="card-body">
                                <EventAvailableIcon/>
                            </div>
                         </div>
                         <div class="card">
                            <div class="card-body">
                                <ArrowForwardIosIcon/>Details
                            </div>
                         </div>
                        
                          
                    </li>
                </ul>
                </div>
            </div>      
        </div>
    )
}

export default OurCourses
