import React from "react";
import classes from "./Footer.module.css";

const footer = () => {
    return (
        <footer>
            <div className={classes["footer-cont"]}>
            <div className={classes["footer-logo"]}></div>
            <ul className={classes["footer-tabs"]}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <ul className={classes["social-media"]}>
                <li><a href="#" className={classes.facebook}>Facebook</a></li>
                <li><a href="#" className={classes.instagram}>Instagram</a></li>
                <li><a href="#" className={classes.twitter}>Twitter</a></li>
                <li><a href="#" className={classes.whatsapp}>WhatsApp</a></li>
                <li><a href="#" className={classes.email}>info@his.gov.ng</a></li>
            </ul>
            </div>
            <p className={classes.copyright}>health information system, Nigeria - Copyright &copy 2020</p>
        </footer>
    );
}

export default footer;