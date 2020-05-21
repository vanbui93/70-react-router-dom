import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  //Prompt nếu trường hợp when thì show thông báo
  onClick = (isChecked) => {
    this.setState({
      isChecked: isChecked
    })
  }
  render() {
    var { isChecked } = this.state;
    return (
      <div>
        Đây là trang liên hệ<br />
        <button type="button" className="btn btn-primary" onClick={() => this.onClick(false)}>Cho phép</button><br />
        <button type="button" className="btn btn-warning" onClick={() => this.onClick(true)}>Không cho phép</button>
        <Prompt
          when={isChecked}
          message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
        />
      </div>
    )
  }
}
