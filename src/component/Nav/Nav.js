import React from 'react'
import './Nav.css'

const  Nav = (props) => {
    return(
        <div className="Nav">
            <p>Dashboard<ion-icon name="laptop-outline"></ion-icon></p>
            <p>Analytics <ion-icon name="analytics-outline"></ion-icon></p>
            <p>Manage Store <ion-icon name="flask"></ion-icon></p>
            <p>Manage Sales<ion-icon name="flask"></ion-icon></p>
            <p>Manage products<ion-icon name="flask"></ion-icon></p>
            <p>Manage categories<ion-icon name="flask"></ion-icon></p>
            <p>Manage brand<ion-icon name="flask"></ion-icon></p>
            <p>Logout<ion-icon name="close"></ion-icon></p>

        </div>
    )
}

export default Nav