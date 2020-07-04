
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
// import { userRegistration, showRegistrationLoader, hideUserRegistrationMessage } from "actions/Registration";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { hideMessage, postContactForm , getContacts } from '../../actions';
import Main_header from "../acadamy/navbar";

const Contact = (props) => {

    const dispatch = useDispatch();
   //  const { contactForm } = useSelector(({ contact }) => contact);
    // const { loading, message } = useSelector(({ commonData }) => commonData);

    // useEffect(() => {
    //     if (props.message) {
    //         setTimeout(() => {
    //             dispatch(hideMessage());
    //         }, 3000);
    //     }
    //     // if (authUser !== null) {
    //     //     props.history.push('/');
    //     // }
    // }, [message])

    // useEffect(() => {
    //     if (props.message) {
    //         setTimeout(() => {
    //             dispatch(hideMessage());
    //         }, 3000);
    //     }
    // }, [contactForm])


    return (
        <div>
        <Main_header />
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
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
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
                                <div className="col-md-6 col-sm-12">
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
            {/** 
         {
                loading &&
                <div className="loader-view">
                    <CircularProgress />
                </div>
            }
        */}
            {/* {showMessage && NotificationManager.error(alertMessage)}
                                                            <NotificationContainer />  */}
        </div >

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

export default Contact;


