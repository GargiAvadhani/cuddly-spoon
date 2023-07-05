import "./FooterStyles.css"
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

//import React from 'react'
//import PropTypes from 'prop-types'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Seva</h1>
          <p>Hope for every living being</p>
        </div>
        <div className="bottom">
          <ul className="nav-menu" >
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    <i className={item.icon}></i>{item.title}
                  </Link>
                </li>
              )
            })};
          </ul>

        </div>
      </div>
    </div>
  )
}




export default Footer