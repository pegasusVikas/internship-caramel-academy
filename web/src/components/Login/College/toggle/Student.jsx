import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Button from '@material-ui/core/Button'
const Student = () => {
    return (
        <div className="container-small">
            <div className="row">
                <div className="col-6 bg-light"><h2>Courses</h2></div>
            </div>  
            <div className="row">
                <div className="col-6">
                <ul >
                    <li class="d-flex justify-content-between align-items-center">
                       
                       <img src="../../../images/show13.png" width={100} height={100}/>
                        
                        <div>
                            <div className="row"><a>Vikas GD</a></div>
                            <div className="row"><p className="text-muted h6">Btech 1st ECE-B</p></div>
                        </div>
                          <div>
                             <Button variant="contained" size="small" color="primary"><AccountBoxIcon/></Button>
                          </div>
                    </li>
                    <li class="d-flex justify-content-between align-items-center">
                        
                            <img src="../../../images/show14.png" width={100} height={100}/>
                        
                        <div>
                            <div className="row"><a>Akshitha</a></div>
                            <div className="row"><p className="text-muted h6">Btech 3rd CSE-A</p></div>
                        </div>
                          <div>
                             <Button variant="contained" size="small" color="primary"><AccountBoxIcon/></Button>
                          </div>
                    </li>
                    <li class="d-flex justify-content-between align-items-center">
                      
                        <img src="../../../images/show15.png" width={100} height={100}/>
                       
                       <div>
                        <div className="row"><a>Anurag</a></div>
                        <div className="row"><p className="text-muted h6">Btech 2nd CSE-E</p></div>
                       </div>
                      <div>
                       <Button variant="contained" size="small" color="primary"><AccountBoxIcon/></Button>
                      </div>
                    </li>
                </ul>
                </div>
            </div>      
        </div>
    )
}

export default Student
