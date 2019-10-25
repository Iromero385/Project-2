import React from 'react';
import styled from 'styled-components';

const heading = {
    fontSize :'36px',
    color:'orange'
    
};
const Input1 = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    boxsizing: 'border-box',
    resize: 'vertical'
}
const Input2 = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    boxsizing: 'border-box',
    resize: 'vertical'
}
const Contact = () => (
    <form>
        <h2 style={heading}>Contact Us</h2>
        <div>
            <label>First Name</label>
            <input style={Input1} type="text" id="fname" name="firstname" placeholder="Your name.." />
            <br />
            <label>Last Name</label>
            <input style= {Input2}type="text" id="lname" name="lastname" placeholder="Your last name.." />
            <br />
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" />
            <br />
            <label>Comments</label>
            <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
            <input type="submit" value="Submit" />
        </div >
    </form>

)
export default Contact;