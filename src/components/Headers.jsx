import React from 'react'
import myImage from "../peges/img/logo.svg";
import { Link } from 'react-router-dom'


const Headers = () => {
  return (
    <div className="Access__logo">
          <div className="Access-logo__img">
            <Link to={'/access'}>
              <img src={myImage} alt="Logo" />
            </Link>
          </div>
          <Link to={'/access'}>
            <div className="Access-logo__text">PNFT Market</div>
          </Link>
        </div>
  )
}

export default Headers
