import React from "react";
import LoginHead from "./LoginHead";

function Dashboard() {

    function Info() {
        let users = JSON.parse(localStorage.getItem('users'))
        let i = 0;
        for (let user of users) {
            return <div>{user.firstname} {user.lastname}</div>
        }
    }


    return (
        <div>
            <LoginHead />
            <div>

                <br />
                <br />
                <br />

            <h2 align='center' className="dashname1">Welcome to dashboard</h2>
            <h2 align='center' className="dashname2" style={{ fontWeight: 'bolder' }}> <Info /></h2>
            </div>
        </div>
    );
}

export default Dashboard;
