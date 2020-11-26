import React from 'react';

const headingStyle = {
    textAlign: 'center',
    fontSize: '2.2rem',
    marginTop: '20px'
}

const formStyle = {
    height: '75vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '50%',
    alignItems: 'stretch',
    marginLeft: '25%',
    fontSize: '1.7rem',
}

function Contact() {

    return (
        <div>
            <h2 style={headingStyle}>Contact Us</h2>
                <form style={formStyle}> 
                    <label>First Name</label>
                        <textarea placeholder="First name"/>
                    <label>Last Name</label>
                        <textarea placeholder="Your Last name"/>
                    <label>Email</label>
                        <textarea placeholder="Email"/>
                    <label>Subject</label>
                        <textarea rows="5" placeholder="Tell us something"/>
                        <input type="button" value="Send"/>
                </form>
        </div>
    )
}

export default Contact;