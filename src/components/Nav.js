import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";

//Muốn customize class=selected, ở thành phần cha, ko phải thẻ <a> => tạo 1 func riêng
//Tự tạo ra 1 link do mình định nghĩa
//match kiểm tra khi nào url trùng khớp thêm class=active
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to} exact={activeOnlyWhenExact} children={({ match }) => {
        var active = match ? "nav-item selected" : '';
        return (
          //cách viết ES6, TH ko trùng khớp my-li, trùng khớp my-li & {active}
          <li className={`my-li ${active}`}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav navbar-nav">
          <MenuLink label="Trang chủ" to='/' activeOnlyWhenExact="true" />
          <MenuLink label="Giới thiệu" to='/about' activeOnlyWhenExact="true" />
          <MenuLink label="Liên hệ" to='/contact' activeOnlyWhenExact="true" />
        </ul>
      </nav>
    )
  }
}
