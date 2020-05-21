import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Login extends Component {

  //MÔ PHỎNG REDIRECT thông qua chức năng đăng nhập
  constructor(props) {
    super(props);
    this.state = {
      txtUsename: '',
      txtPassword: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });

  }

  onLogin = (e) => {
    e.preventDefault();
    var { txtUsename, txtPassword } = this.state;
    if (txtUsename === 'admin' && txtPassword === 'admin');
    localStorage.setItem('user', JSON.stringify({
      userName: txtUsename,
      passWord: txtPassword
    }))
  }

  render() {
    var { txtUsename, txtPassword } = this.state;
    var loginAccount = localStorage.getItem('user');
    console.log(loginAccount);
    if (loginAccount !== null) {
      var { location } = this.props;
      return <Redirect to={{
        pathname: '/products',
        state: {                       //state là thông tin của trang login sẽ dc gửi đi để trang đích nhận được
          from: location
        }
      }} />
    }

    var { location } = this.props;
    console.log(location); //location chỉ là vị trí page đang đứng

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <form onSubmit={this.onLogin}>
              <div className="form-group">
                <label>UserName: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtUsename"
                  defaultValue={txtUsename}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label>Password: </label>
                <input
                  type="password"
                  className="form-control"
                  name="txtPassword"
                  defaultValue={txtPassword}
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
