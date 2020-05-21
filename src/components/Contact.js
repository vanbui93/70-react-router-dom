import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: true
    }
  }

  render() {
    var { isChecked } = this.state;
    return (
      <div>
        Đây là trang liên hệ<br />
        <button type="button" className="btn btn-primary">Cho phép</button><br />
        <button type="button" className="btn btn-primary">Không cho phép</button>
        <Prompt
          when={isChecked}
          message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
        />
      </div>
    )
  }
}
