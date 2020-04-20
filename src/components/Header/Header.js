import React from "react"

const Header = () => {
  return (
    <header>
      <div className="headerWrap">
        <div className="logoWrap">
          <a href="/">Sapient Games Arena</a>
        </div>
        <div className="menu">
          <div className="spacingRight">
            <i className="icon-bell" />
          </div>
          <div>
            <i className="icon-user" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
