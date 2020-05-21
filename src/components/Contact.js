import React, { Component } from 'react';
import {Prompt} from 'react-router-dom';

export default class Contact extends Component {
  render() {
    return (
      <div>
        Đây là trang liên hệ<br/>
        <button type="button" className="btn btn-primary">Cho phép</button><br/>
        <button type="button" className="btn btn-primary">Không cho phép</button>
        <Prompt
          when={true}
          message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname}`)}
        />
      </div>
    )
  }
}
