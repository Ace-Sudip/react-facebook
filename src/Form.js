import React, { useState } from 'react';
import './facebook.css';
import swal from 'sweetalert';


function Form() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [cpassword, setcpassword] = useState('');


    const [efirstname, setefirstname] = useState('');
    const [elastname, setelastname] = useState('');
    const [eemail, seteemail] = useState('');
    const [epassword, setepassword] = useState('');
    const [ecpassword, setecpassword] = useState('');


    const [fcolor, setfcolor] = useState('')
    const [lcolor, setlcolor] = useState('')
    const [ecolor, setecolor] = useState('')
    const [pcolor, setpcolor] = useState('')
    const [cpcolor, setcpcolor] = useState('')


    function validate(event) {
        event.preventDefault();
        if (firstname.length > 5) {
            setefirstname('')
            setfcolor('green')
        }
        else {
            setefirstname('Letter must be 5 letter long')
            setfcolor('red')
        }
        if (lastname.length > 5) {
            setelastname('')
            setlcolor('green')
        }
        else {
            setelastname('Letter must be 5 letter long')
            setlcolor('red')
        }

        if (email.includes('@gmail.com')) {
            seteemail('')
            setecolor('green')
        }
        else {
            seteemail('Enter correct Email')
            setecolor('red')

        }
        if (password.length > 8) {
            setepassword('')
            setpcolor('green')
        }
        else {
            setepassword('Password must be 8 letters long')
            setpcolor('red')
        }
        if ((cpassword != '') && (cpassword == password)) {
            setecpassword('')
            setcpcolor('green')
        }
        else {
            setecpassword('Enter Correct password')
            setcpcolor('red')
        }

        let users = JSON.parse(localStorage.getItem('users') || '[]')
        let newuser = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
        users.push(newuser);



        if ((firstname.length > 5) && (lastname.length > 5)
            && (email.includes('@gmail.com')) && (password.length > 8)
            && ((cpassword != '') && (cpassword == password))) {

            localStorage.setItem('users', JSON.stringify(users));
            swal("Account Created Successfully", '', "success");
            setfirstname('');
            setlastname('');
            setemail('');
            setpassword('');
            setcpassword('');


        }









    }

    return (
        <div>

            <div className='row justify-content-center paddimp '>
                <div className='col-md-8 border border-dark rounded'>
                    <h1 align='center' className='createac'>Create Account</h1>
                    <input type='text' style={{ borderColor: fcolor }} placeholder='Firstname' value={firstname} className='form-control finp' onChange={(e) => { setfirstname(e.target.value) }}></input>
                    <p className='text-center font-italic'>{efirstname}</p>
                    <input type='text' style={{ borderColor: lcolor }} placeholder='Lastname' value={lastname} className='form-control finp' onChange={(e) => { setlastname(e.target.value) }}></input>
                    <p className='text-center font-italic'>{elastname}</p>
                    <input type='text' style={{ borderColor: ecolor }} placeholder='Email' value={email} className='form-control finp' onChange={(e) => { setemail(e.target.value) }} ></input>
                    <p className='text-center font-italic'>{eemail}</p>
                    <input type='password' style={{ borderColor: pcolor }} placeholder='Password' value={password} className='form-control finp' onChange={(e) => { setpassword(e.target.value) }}></input>
                    <p className='text-center font-italic'>{epassword}</p>
                    <input type='password' style={{ borderColor: cpcolor }} placeholder='Confirm Password' value={cpassword} className='form-control finp' onChange={(e) => { setcpassword(e.target.value) }}></input>
                    <p className='text-center font-italic'>{ecpassword}</p>
                    <br />
                    <center> <button className='btn btn-success bsbtn' onClick={validate}>Submit</button></center>

                </div>
            </div>






        </div>

    );
}

export default Form;