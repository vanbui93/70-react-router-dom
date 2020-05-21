import React, { Component } from 'react'
import { Route, Link, NavLink } from "react-router-dom";

export default class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        slug: 'iphone-x',
        name: 'Iphone X',
        price: 34000000
      },
      {
        id: 1,
        slug: 'samsung-s10',
        name: 'Samsung Galaxy S10',
        price: 17000000
      },
      {
        id: 1,
        slug: 'huawei-x30',
        name: 'Huawei X30',
        price: 20000000
      }
    ];

    var {match} = this.props;
    console.log(match);
    var url = match.url;
    

    var result = products.map((product, index) => {
      return (
        <NavLink to={`${url}/${product.slug}`} key={index}>
          <li className="list-group-item">
            {product.id} -{product.name} - {product.price}
          </li>
        </NavLink>
      )
    })
    return (
      <div>
        <h1>Danh sách sản phẩm</h1>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {result}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
