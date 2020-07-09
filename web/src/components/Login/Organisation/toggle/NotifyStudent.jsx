import React from 'react'
import Button from '@material-ui/core/Button'
import NotificationsIcon from '@material-ui/icons/Notifications';

const NotifyStudent = () => {
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
                        <div>
                            <div className="row"><a>UI/UX</a></div>
                            <div className="row"><p className="text-muted h6">click on the notify button</p></div>
                        </div>
                          <div>
                             <Button variant="contained" size="small" color="secondary"><NotificationsIcon/>Notify</Button>
                          </div>
                    </li>
                    <li class="d-flex justify-content-between align-items-center">
                        <div>
                            <img src="../../../images/angular.jpg" width={100} height={100}/>
                        </div>
                        <div>
                            <div className="row"><a>UI/UX</a></div>
                            <div className="row"><p className="text-muted h6">click on the notify button</p></div>
                        </div>
                          <div>
                             <Button variant="contained" size="small" color="secondary"><NotificationsIcon/>Notify</Button>
                          </div>
                    </li>
                    <li class="d-flex justify-content-between align-items-center">
                      <div>
                        <img src="../../../images/angular.jpg" width={100} height={100}/>
                        Vue JS
                      </div>
                       <div>
                        <div className="row"><a>UI/UX</a></div>
                        <div className="row"><p className="text-muted h6">click on the notify button</p></div>
                       </div>
                      <div>
                       <Button variant="contained" size="small" color="secondary"><NotificationsIcon/>Notify</Button>
                      </div>
                    </li>
                </ul>
                </div>
            </div>      
        </div>
    )
}

export default NotifyStudent
