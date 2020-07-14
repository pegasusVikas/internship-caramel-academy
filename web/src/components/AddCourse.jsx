import React, { useState } from 'react';
//import fetch from 'fetch';
import axios from 'axios';

const AddCourse = () => {

    const [state, setState] = useState({
        embed: "",
        upload: null,
        title: "",
        subcategory: null,
        description: "",
        subcategories: [],
    });

    if (state.subcategory === null) {
        axios
        .get("http://localhost:3004/api/subcategories")
        .then((res) => {
            if (res.data.subcategories) {
                setState({
                    subcategories: res.data.subcategories,
                    subcategory: res.data.subcategories[0]._id,
                });
                console.log(res.data.subcategories[0]._id);
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
        const FormData = {
            upload: state.upload
        }
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        axios.post("http://localhost:3004/api/upload/table", FormData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message));
    };

    // const onClick = () => {
    //     console.log(state.embed);
    //     const newCourse = {
    //         title: state.title,
    //         description: state.description,
    //         subcategoryId: state.subcategory,
    //         embed: state.embed
    //     };
    //     axios.post("http://localhost:3004/course/create", newCourse)
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err.message));
    // };

    return (
        <form method="POST" action="http://localhost:3004/api/upload/table" encType="multipart/form-data">
            <label htmlFor="upload">Table of content</label>
            <input type="file" name="upload" value={state.upload} onChange={handleChange}/> <br/>
            <input className="btn btn-primary" type="submit" value="Upload Table" />
        </form>
        // <div>
        //     <div class="row container-fluid">
        //         <div class="container col-md-4 mt-4" style={{ alignContent: "center" }}>
        //             <div className="card">
        //                 <div className="card-header bg-dark text-white"><strong>Add a course</strong></div>
        //                 <div className="card-body">
        //                     <label for="title">Course Title</label>
        //                     <input type="text" className="form-control" name="title" value={state.title} required onChange={handleChange} />
        //                     <label for="description">Course Description</label>
        //                     <input type="text" className="form-control" name="description" value={state.description} required onChange={handleChange} />
        //                     <label for="table">Table of content</label>
        //                     <input type="file" name="file" value={state.file} onChange={handleChange}/> <br/>
        //                     <button className="btn btn-primary" onClick={onUpload}>Upload table</button>
        //                     <div className="form-group">
        //                         <label for="subcategory">Select Sub Category</label>
        //                         <select className="form-control" name="subcategory" id="subcategory" placeholder="Select Sub Category" onChange={handleChange}>
        //                             {state.subcategories.map((SUBCATEGORY, i) => {
        //                                 return (<option key={i} value={SUBCATEGORY._id} name="subcategory">{SUBCATEGORY.title}</option>);
        //                             })}
        //                         </select>
        //                     </div>
        //                     <label for="embed">Embed Code</label>
        //                     <input type="text" className="form-control" name="embed" value={state.embed} onChange={handleChange} />
        //                     <div className="card-footer">
        //                         <button className="btn btn-info" style={{ display: "block", margin: "auto" }} onClick={onClick}>Add Course</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AddCourse;
