import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {

    var {match} = this.props;
    
    //đặt là slug hay gì cũng dc, tùy ý => cái này đặt tên ở trang Products.js
    var name = match.params.slug;
    // console.log(name);
    
    return (
      <div>
        Đây là chi tiết sản phẩm: {name}
      </div>
    )
  }
}
