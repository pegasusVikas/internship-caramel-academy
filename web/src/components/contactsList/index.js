
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
// import { userRegistration, showRegistrationLoader, hideUserRegistrationMessage } from "actions/Registration";
import Button from "@material-ui/core/Button";
import { hideMessage, postContactForm, getContacts } from '../../actions';
import Main_header from "../acadamy/navbar";
import ContactsTable from "./contactsTable";



const ContactList = (props) => {

    const dispatch = useDispatch();
    const contacts = useSelector(({ contacts }) => contacts);
    const contactList = contacts.contact.data
    let count = 0; 
    // useEffect(() => {
    //     dispatch(getContacts())
    //     // if (authUser !== null) {
    //     //     props.history.push('/');
    //     // }
    //   }, [])
    return (
        <div>
            <Main_header />
            <Button variant="contained" color="primary" onClick={() => dispatch(getContacts())}>CONTACTS</Button>
            <div>
                {
                    contactList && contactList.map((contact, i) => {
                        count = count+1;
                        console.log(count + "Acount");
                        return (
                            <div key={i}>
                                <ContactsTable contact={contact} count= {count} />
                            </div>
                        );
                    }
                    )}

            </div>
        </div>
    )
}
export default ContactList;
