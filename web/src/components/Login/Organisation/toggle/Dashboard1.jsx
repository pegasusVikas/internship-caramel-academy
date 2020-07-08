import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const Dashboard1 = () => {
    return (
        <div className="container-small">
            <div className="row">
                <div className="col-6 bg-light"><h2>Courses</h2></div>
            </div>  
            <div className="row">
                <div className="col-6">
                <ul >
                    <li class="d-flex justify-content-between align-items-center">
                       <div>
                       <img src="../../../images/react.jpg" width={100} height={100}/>
                        React JS 
                       </div>
                       <span class="badge badge-primary badge-pill">Running</span>
                        <div>
                            <PersonIcon/>
                            <QuestionAnswerIcon/>
                        </div>
                    </li>
                    <li class="d-flex justify-content-between align-items-center">
                    <div>
                        <img src="../../../images/angular.jpg" width={100} height={100}/>
                        Angular JS
                    </div>
                        <span class="badge badge-primary badge-pill all">Running</span>
                          <div>
                            <PersonIcon/>
                            <QuestionAnswerIcon/>
                          </div>
                    </li>
                    <li class="d-flex justify-content-between align-items-center">
                      <div>
                        <img src="../../../images/angular.jpg" width={100} height={100}/>
                        Vue JS
                      </div>
                        <span class="badge badge-warning badge-pill">yet to start</span>
                        <div>
                        <PersonIcon/>
                        <QuestionAnswerIcon/>
                        </div>
                    </li>
                </ul>
                </div>
            </div>      
        </div>
    )
}

export default Dashboard1
