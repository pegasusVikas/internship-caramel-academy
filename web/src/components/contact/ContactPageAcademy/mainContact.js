import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const MainContact = () => {
    return (
        <div>
            <Navbar />
            <div class="container col-md-4 mt-2" style={{ alignContent: "center" }}>
            <div className="row">
                <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", width:"100%" }}>
                    <div className="card-header bg-dark text-white" style={{ fontWeight: "bold" }}>Contact Form</div>
                    <div className="card-body">
                        <form name="frm" action="#" method="post">
                            <div className="form-group">
                                <label htmlFor="fullname" name="fname">Full Name:</label>
                                <input type="text" className="form-control bg bg-light" id="fname" name="email" required />
                                <i id="fname error" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullname">Email:</label>
                                <input type="text" className="form-control bg bg-light" id="email" name="email" required />
                                <i id="emailerror" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullname">Phone Number:</label>
                                <input type="text" className="form-control bg bg-light" id="phone" name="phone" required />
                                <i id="phoneerror" />
                            </div>
                            <div className="form-group">
                                <label>ZipCode/Pincode:</label>
                                <input type="text" className="form-control bg bg-light" name="pincode" />
                            </div>
                            <div className="form-group">
                                <label>Country:</label>
                                <select className="form-control bg bg-light">
                                    <option>INDIA</option>
                                    <option>U.S.A</option>
                                    <option>UK</option>
                                    <option>AUSTRALIA</option>
                                    <option>GERMANY</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullname">Category</label>
                                <select className="form-control bg bg-light" id="s1">
                                    <option>Core UI</option>
                                    <option>Backend</option>
                                    <option>Full Stack</option>
                                    <option>Mobility</option>
                                    <option>DevOps</option>
                                    <option>Data Science &amp; AI/ML</option>
                                    <option>Digital Marketing</option>
                                    <option>Cloud Computing</option>
                                    <option>Cyber Security</option>
                                    <option>ERP</option>
                                    <option>IT</option>
                                    <option>IT Certifications</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="fullname">Sub Category</label>
                                <select className="form-control bg bg-light">
                                    <option>Core UI</option>
                                    <option>Advanced UI</option>
                                    <option>Angular JS</option>
                                    <option>React JS</option>
                                    <option>Vue JS</option>
                                    <option>Java</option>
                                    <option>.Net</option>
                                    <option>Node JS</option>
                                    <option>Ruby</option>
                                    <option>Python</option>
                                    <option>Core Java</option>
                                    <option>Advance Java</option>
                                    <option>.Net</option>
                                    <option>.Net Core</option>
                                    <option>MEAN</option>
                                    <option>MESN</option>
                                    <option>MEVN</option>
                                    <option>GoLang</option>
                                    <option>Ruby</option>
                                    <option>Flutter</option>
                                    <option>Ionic</option>
                                    <option>React Native</option>
                                    <option>Xamarin</option>
                                    <option>Onsen UI</option>
                                    <option>IOS</option>
                                    <option>Android</option>
                                    <option>DevOps Foundation</option>
                                    <option>DevOps Expert</option>
                                    <option>Ansible</option>
                                    <option>Chef</option>
                                    <option>Docker</option>
                                    <option>Kubernets</option>
                                    <option>Open Stack</option>
                                    <option>DS Boot Camp</option>
                                    <option>ML With Python</option>
                                    <option>Deep Learning</option>
                                    <option>Data Analytics</option>
                                    <option>Data Scientist Certification</option>
                                    <option>Natural Language Processing</option>
                                    <option>R Programming</option>
                                    <option>AI/ML Foundation Course</option>
                                    <option>AI/ML Expert Course</option>
                                    <option>Hadoop</option>
                                    <option>AWS Technical Essentials</option>
                                    <option>AWS Cloud Practitioner</option>
                                    <option>AWS Solution Architect Associate</option>
                                    <option>AWS Developer Associate</option>
                                    <option>AWS SysOps Associate Administrator</option>
                                    <option>Microsoft Azure Fundamentals</option>
                                    <option>Microsoft Azure Expert Certification</option>
                                    <option>CISSP</option>
                                    <option>CISA</option>
                                    <option>CEH</option>
                                    <option>COMPTIA Security++</option>
                                    <option>CISM</option>
                                    <option>CSA</option>
                                    <option>CAP</option>
                                    <option>CCSP</option>
                                    <option>CALIFORNIA PRIVACY LAW</option>
                                    <option>CIPP/US</option>
                                    <option>CIPP/EUROPE</option>
                                    <option>Digital Marketing Foundation</option>
                                    <option>Digital Marketing Expert</option>
                                    <option>SEO</option>
                                    <option>SMO</option>
                                    <option>SCM</option>
                                    <option>SMM</option>
                                    <option>Adwords Foundation</option>
                                    <option>Adwords Expert</option>
                                    <option>Content Marketing</option>
                                    <option>Branding</option>
                                    <option>SAP</option>
                                    <option>Oracle</option>
                                    <option>Infor LN</option>
                                    <option>RootStack</option>
                                    <option>Salesforce</option>
                                    <option>Service Now</option>
                                    <option>Remedy</option>
                                    <option>Microsoft Dynamics</option>
                                    <option>ITIL Foundation</option>
                                    <option>PMP</option>
                                    <option>PMI-ACP</option>
                                    <option>Agile</option>
                                    <option>Prince</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg" style={{ display: "block", margin: "auto" }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainContact;
