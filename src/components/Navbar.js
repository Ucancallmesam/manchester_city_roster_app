import React, { Component } from 'react'
import '../App.css'
import NavbarItems from '../components/NavbarItems'

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    return (
      <nav className="NavbarItems">
        <a href="index.html">
          <img
            width="60"
            height="auto"
            src="https://upload.wikimedia.org/wikipedia/sco/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
            alt="logo"
            className="logo"
          ></img>
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={
              this.state.clicked ? 'fas fa-circle-xmark' : 'fas fa-bars'
            }
          ></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar
