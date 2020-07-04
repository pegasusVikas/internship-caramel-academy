
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
// import { userRegistration, showRegistrationLoader, hideUserRegistrationMessage } from "actions/Registration";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { hideMessage, postContactForm , getContacts } from '../../actions';

const  Contact = () => {
    const dispatch = useDispatch();
    return (

        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-1">
                    </div>
                    <div class="col-lg-10 contact">
                        <h1 id="cname">Caramel IT Academy</h1>
                        <h1 id="coname" style={"text-align:center"} >Contact Us</h1>
                    </div>


                    <Formik
                        initialValues={initialValues}
                        validationSchema={SignupSchema}
                        onSubmit={(values) => {
                            const { title, content } = values;

                            //  console.log("values  " + JSON.stringify(values))
                            dispatch(postContactForm(values))
                            // setOpen(true);
                            // setuserData(userData);
                        }}
                    >
                        {props => {
                            const {
                                values,
                                touched,
                                errors,
                                handleChange,
                                handleBlur,
                                handleSubmit
                            } = props;

                            return (
                                <form autoComplete="on" noValidate onSubmit={handleSubmit}>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <TextField
                                                error={errors.title && touched.title}
                                                className="form-textfield form-textfield-label"
                                                name="title"
                                                label="title"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                value={values.title}
                                                onChange={handleChange}
                                                placeholder="12345"
                                                margin="normal"
                                                required
                                                onBlur={handleBlur}
                                                helperText={
                                                    errors.title &&
                                                    touched.title &&
                                                    errors.title
                                                }
                                                // error={true}
                                                // helperText="Incorrect entry."
                                                fullWidth
                                            />
                                        </div>
                                        <div className="col-md-6 ">
                                            <TextField
                                                error={errors.content && touched.content}
                                                className="form-textfield form-textfield-label"
                                                name="content"
                                                label="content"
                                                InputLabelProps={{
                                                    shrink: true
                                                }}
                                                value={values.content}
                                                onChange={handleChange}
                                                placeholder="content"
                                                margin="normal"
                                                required
                                                onBlur={handleBlur}
                                                helperText={
                                                    errors.content &&
                                                    touched.content &&
                                                    errors.content
                                                }
                                                // error={true}
                                                // helperText="Incorrect entry."
                                                fullWidth
                                            />
                                        </div>
                                    </div>

                                    <div className="row proceed-custom-btn">
                                        <div className="mt-1 mb-2 d-flex justify-content-center align-items-center">
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                color="primary"
                                            >
                                                Proceed
                                        </Button>
                                        </div>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </div >
            </div>
        </div>
    );
};
const initialValues = {
    title: "",
    content: ""
}
const SignupSchema = Yup.object().shape({
    title: Yup.string()
        .required("Required"),
    content: Yup.string()
        .required("Please enter content")
});




// <div class="container-fluid">
//     <div class="container">
//         <div class="row">
//             <div class="col-lg-1">
//             </div>
//             <div class="col-lg-10 contact">
//                 <h1 id="cname">Caramel IT Academy</h1>
//                 <h1 id="coname" style="text-align: center;">Contact Us</h1>
//                 <div class="row">
//                     <div class="col-lg-6">
//                         <div id="first2">

//                             <form name="frm" action="#" method="post">
//                                 <div class="form-group">
//                                     <label for="fullname" name="fname">Full Name:</label>
//                                     <input type="text" class="form-control bg bg-light" id="fname" name="email" required="" />
//                                     <i id="fname error"></i>
//                                 </div>
//                                 <div class="form-group">
//                                     <label for="fullname">Email:</label>

//                                     <input type="text" class="form-control bg bg-light" id="email" name="email" required="" />
//                                     <i id="emailerror"></i>
//                                 </div>
//                                 <div class="form-group">
//                                     <label for="fullname">Phone Number:</label>
//                                     <input type="text" class="form-control bg bg-light" id="phone" name="phone" required="" />
//                                     <i id="phoneerror"></i>
//                                 </div>
//                                 <div class="form-group">
//                                     <label>ZipCode/Pincode:</label>
//                                     <input type="text" class="form-control bg bg-light" name="pincode" />
//                                 </div>

//                             </form>
//                         </div>

//                     </div>
//                     <div class="col-lg-6">
//                         <div class="form-group">
//                             <label>Country:</label>
//                             <select class="form-control bg bg-light">
//                                 <option>INDIA</option>
//                                 <option>U.S.A</option>
//                                 <option>UK</option>
//                                 <option>AUSTRALIA</option>
//                                 <option>GERMANY</option>
//                             </select>
//                         </div>
//                         <div class="form-group">
//                             <label for="fullname">Category</label>
//                             <select class="form-control bg bg-light" id="s1">
//                                 <option>Core UI</option>
//                                 <option>Backend</option>
//                                 <option>Full Stack</option>
//                                 <option>Mobility</option>
//                                 <option>DevOps</option>
//                                 <option>Data Science &amp; AI/ML</option>
//                                 <option>Digital Marketing</option>
//                                 <option>Cloud Computing</option>
//                                 <option>Cyber Security</option>
//                                 <option>ERP</option>
//                                 <option>IT</option>
//                                 <option>IT Certifications</option>

//                             </select>
//                         </div>
//                         <div class="form-group">
//                             <label for="fullname">Sub Category</label>
//                             <select class="form-control bg bg-light">
//                                 <option>Core UI</option>
//                                 <option>Advanced UI</option>
//                                 <option>Angular JS</option>
//                                 <option>React JS</option>
//                                 <option>Vue JS</option>
//                                 <option>Java</option>
//                                 <option>.Net</option>
//                                 <option>Node JS</option>
//                                 <option>Ruby</option>
//                                 <option>Python</option>
//                                 <option>Core Java</option>
//                                 <option>Advance Java</option>
//                                 <option>.Net</option>
//                                 <option>.Net Core</option>
//                                 <option>MEAN</option>
//                                 <option>MESN</option>
//                                 <option>MEVN</option>
//                                 <option>GoLang</option>
//                                 <option>Ruby</option>
//                                 <option>Flutter</option>
//                                 <option>Ionic</option>
//                                 <option>React Native</option>
//                                 <option>Xamarin</option>
//                                 <option>Onsen UI</option>
//                                 <option>IOS</option>
//                                 <option>Android</option>
//                                 <option>DevOps Foundation</option>
//                                 <option>DevOps Expert</option>
//                                 <option>Ansible</option>
//                                 <option>Chef</option>
//                                 <option>Docker</option>
//                                 <option>Kubernets</option>
//                                 <option>Open Stack</option>
//                                 <option>DS Boot Camp</option>
//                                 <option>ML With Python</option>
//                                 <option>Deep Learning</option>
//                                 <option>Data Analytics</option>
//                                 <option>Data Scientist Certification</option>
//                                 <option>Natural Language Processing</option>
//                                 <option>R Programming</option>
//                                 <option>AI/ML Foundation Course</option>
//                                 <option>AI/ML Expert Course</option>
//                                 <option>Hadoop</option>
//                                 <option>AWS Technical Essentials</option>
//                                 <option>AWS Cloud Practitioner</option>
//                                 <option>AWS Solution Architect Associate</option>
//                                 <option>AWS Developer Associate</option>
//                                 <option>AWS SysOps Associate Administrator</option>
//                                 <option>Microsoft Azure Fundamentals</option>
//                                 <option>Microsoft Azure Expert Certification</option>
//                                 <option>CISSP</option>
//                                 <option>CISA</option>
//                                 <option>CEH</option>
//                                 <option>COMPTIA Security++</option>
//                                 <option>CISM</option>
//                                 <option>CSA</option>
//                                 <option>CAP</option>
//                                 <option>CCSP</option>
//                                 <option>CALIFORNIA PRIVACY LAW</option>
//                                 <option>CIPP/US</option>
//                                 <option>CIPP/EUROPE</option>
//                                 <option>Digital Marketing Foundation</option>
//                                 <option>Digital Marketing Expert</option>
//                                 <option>SEO</option>
//                                 <option>SMO</option>
//                                 <option>SCM</option>
//                                 <option>SMM</option>
//                                 <option>Adwords Foundation</option>
//                                 <option>Adwords Expert</option>
//                                 <option>Content Marketing</option>
//                                 <option>Branding</option>
//                                 <option>SAP</option>
//                                 <option>Oracle</option>
//                                 <option>Infor LN</option>
//                                 <option>RootStack</option>
//                                 <option>Salesforce</option>
//                                 <option>Service Now</option>
//                                 <option>Remedy</option>
//                                 <option>Microsoft Dynamics</option>
//                                 <option>ITIL Foundation</option>
//                                 <option>PMP</option>
//                                 <option>PMI-ACP</option>
//                                 <option>Agile</option>
//                                 <option>Prince</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="form-group">
//                         <button value="submit" class="csub" onclick="raghu()">SUBMIT</button>

//                     </div>

//                 </div>

//             </div>

//         </div>
//     </div>
// </div>

export default Contact;
   
