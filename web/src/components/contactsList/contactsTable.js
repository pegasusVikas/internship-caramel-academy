
import React from 'react'

const ContactsTable = (props) => {
    const getContact = props.contact
    return (
        <div>
            <ul>
                <li> Contact Number : {props.count}</li>
                <li>Title : {getContact.title}</li>
                <li>Content : {getContact.content}</li>
            </ul>
        </div>
    )
}
export default ContactsTable