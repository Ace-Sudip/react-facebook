import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './facebook.css'

function LoginHead() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    let navigate = useNavigate();

    function logout() {
        navigate('/');
        localStorage.removeItem('loggedIn')
        window.location.reload(true);


    }

    function login() {
        let users = JSON.parse(localStorage.getItem('users'))
        let i = 0;
        for (let user of users) {
            if (user.email === email && user.password === password) {
                i++;
            }
        }
        if (i === 1) {
            navigate('/dashboard')
            localStorage.setItem('loggedIn', 'loggedIn')
            window.location.reload(true)

        }
        else {
            swal("Login failed", "", "error")

        }

    }

    return (
        <div>
            <div className="container-fluid w-100 fbbb ">
                <div className="row ">
                    <div className=' col-3'>
                        <h2 className='fbbb1'>Facebook</h2>
                    </div>
                    <div className=" col-9 justify-content-center  ">
                        {
                            (() => {

                                if (localStorage.getItem('loggedIn')) {
                                    return <div className="logoutbtn2"> <button onClick={logout}>Logout</button>
                                    </div>
                                }
                                else {
                                    return (<div className="fb2 justify-content-center ">
                                        <input type='text' className="form-control-sm inpp2" placeholder='Enter Email' value={email}
                                            onChange={(e) => { setemail(e.target.value) }} /><br />
                                        <input type='password' className="form-control-sm inpp2" placeholder='Enter Password' value={password}
                                            onChange={(e) => { setpassword(e.target.value) }} /><br />
                                        <button className="btn-sm btn-primary butn1 " onClick={login}>Login</button>
                                    </div>
                                    )
                                }

                            }
                            )()
                        }
                    </div>

                </div>

            </div>
        </div>
    );
}

export default LoginHead;