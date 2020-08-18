import React, { useState } from 'react';
import axios from 'axios';

const AddCourse = () => {

    const [state, setState] = useState({
        embed: "",
        upload: null,
        title: "",
        subcategory: null,
        description: "",
        subcategories: null,
    });

    if (state.subcategories === null) {
        axios
        .get("/api/api/subcategories")
        .then((res) => {
            if (res.data.subCategories) {
                setState({
                    subcategories: res.data.subCategories
                });
                console.log(res.data.subCategories);
            } else {
                console.log("error");
            }
        }).catch(err => {console.log(err.message);}); 
    }
    

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('upload', state.upload);
        axios.post("/api/api/upload/table", formData)
        .then(res => {
            console.log(res);
            if (res.status === 200) {
                window.alert('Table uploaded, please add course now!');
                setState({ ...state, upload: null });
            }
        })
        .catch(err => console.log(err.message));
    };

    const onChange = e => {
        console.log(e.target.files[0]);
        setState({ ...state, upload: e.target.files[0] });
    };

    const onClick = () => {
        console.log(state.embed);
        const newCourse = {
            title: state.title,
            description: state.description,
            subcategoryId: state.subcategory,
            embed: state.embed
        };
        axios.post("/api/course/create", newCourse)
        .then(res => {
            if (res.data.message === "course created! "){
                window.alert("Course Created Successfully!");
                setState({
                    embed: "",
                    upload: null,
                    title: "",
                    subcategory: null,
                    description: "",
                    subcategories: [],
                })
            }
        })
        .catch(err => console.log(err.message));
    };

    return (
        <div className="container-fluid" style={{ padding: "10px" }}>
            {state.subcategories !== null &&
            <div className="card" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", width:"100%" }}>
                <div class="row container-fluid" style={{ padding: "20px" }}>    
                    <div class="container col-md-4 mt-2" style={{ alignContent: "center" }}>
                        <div className="row">
                            <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
                                <div className="card-header bg-dark text-white"><strong>Upload table of contents before course</strong></div>
                                <div className="card-body">
                                    <form onSubmit={onSubmit} encType="multipart/form-data">
                                        <label htmlFor="upload">Table of content(upload only doc/docx files) </label>
                                        <input type="file" name="upload" onChange={onChange}/> <br/><br/>
                                        <input className="btn btn-info" type="submit" value="Upload Table" />
                                    </form>
                                </div>
                            </div>
                        </div>
                        <br/> <br/>
                        <div className="row">
                            <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
                            <div className="card-header bg-dark text-white"><strong>Embed Code</strong></div>
                                <div className="card-body">
                                    <h5>After uploading table of contents, please follow the steps below to get the embed code for course content(ppt)</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container col-md-4 mt-2" style={{ alignContent: "center" }}>
                        <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)" }}>
                            <div className="card-header bg-dark text-white"><strong>Add a course</strong></div>
                            <div className="card-body">
                                <label for="title">Course Title</label>
                                <input type="text" className="form-control" name="title" value={state.title} required onChange={handleChange} />
                                <label for="description">Course Description</label>
                                <input type="text" className="form-control" name="description" value={state.description} required onChange={handleChange} />
                                <div className="form-group">
                                    <label for="subcategory">Select Sub Category</label>
                                    <select className="form-control" name="subcategory" id="subcategory" placeholder="Select Sub Category" onChange={handleChange}>
                                        {state.subcategories.map((SUBCATEGORY, i) => {
                                            return (<option key={i} value={SUBCATEGORY._id} name="subcategory">{SUBCATEGORY.title}</option>);
                                        })}
                                    </select>
                                </div>
                                <label for="embed">Embed Code</label>
                                <input type="text" className="form-control" name="embed" value={state.embed} onChange={handleChange} />
                                <div className="card-footer">
                                    <button className="btn btn-info" style={{ display: "block", margin: "auto" }} onClick={onClick}>Add Course</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row container-fluid" style={{ padding: "10px" }}>
                    <div className="col col-md-4">
                        <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", width: "532px" }}>
                            <div className="card-header bg-info text-dark"><strong>Step 1 - login to onedrive.live.com</strong></div>
                            <div className="card-img">
                                <img src="https://i.imgur.com/RCCPSUH.png" height="450px" width="530px" alt="login"/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", width: "532px" }}>
                            <div className="card-header bg-info text-dark"><strong>Step 2 - right click on the ppt and select embed</strong></div>
                            <div className="card-img">
                                <img src="https://i.imgur.com/0Tp7Q2Q.png" height="450px" width="530px" alt="rightclick"/>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-4">
                        <div className="card" style={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", width: "452px" }}>
                            <div className="card-header bg-info text-dark"><strong>Step 3 - copy the embed code</strong></div>
                            <div className="card-img">
                                <img src="https://i.imgur.com/3T6iEOu.png" height="700px" width="450px" alt="embed"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default AddCourse;