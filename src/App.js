import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//Muốn customize class=selected, ở thành phần cha, ko phải thẻ <a> => tạo 1 func riêng
//Tự tạo ra 1 link do mình định nghĩa
//match kiểm tra khi nào url trùng khớp thêm class=active
const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path={to} exact={activeOnlyWhenExact} children={({match}) => {
        var active = match ? "nav-item selected" : '';
        return (
          <li className={active}>
            <Link className="nav-link" to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav navbar-nav">
              <MenuLink label="Trang chủ" to='/' activeOnlyWhenExact="true"/>
              <MenuLink label="Giới thiệu" to='/about' activeOnlyWhenExact="true"/>
              <MenuLink label="Liên hệ" to='/contact' activeOnlyWhenExact="true"/>
            </ul>
        </nav>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
