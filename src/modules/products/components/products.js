import React, { Component } from 'react';
import Categories from './categories';
import Temp from './temp';
import getData from '../../utils/fetch';

class Products extends Component {
  constructor() {
    super();
    this.getProducts = this.getProducts.bind(this);
  }

  state = {
    categories: [],
    products: {},
    viewCategories: true,
    viewProducts: false,
  };

  componentDidMount() {
    // const data = getData()
    const body =
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:blz="http://thomas-bayer.com/blz/"><soap:Header/><soap:Body><blz:getBank><blz:blz>66069104</blz:blz></blz:getBank></soap:Body></soap:Envelope>';

    fetch('http://www.thomas-bayer.com/axis2/services/BLZService', {
      body, // must match 'Content-Type' header
      headers: {
        'content-type': 'text/plain',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    }).then(response => {
      response.text().then(value => {
        // convert to correct format (object, array, ....);
        const data = [1, 2, 3, 4, 5, 6];
        this.setState({ categories: data });
      });
    });
  }

  getProducts(value) {
    const body =
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:blz="http://thomas-bayer.com/blz/"><soap:Header/><soap:Body><blz:getBank><blz:blz>66069104</blz:blz></blz:getBank></soap:Body></soap:Envelope>';

    fetch('http://www.thomas-bayer.com/axis2/services/BLZService', {
      body, // must match 'Content-Type' header
      headers: {
        'content-type': 'text/plain',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    }).then(response => {
      response.text().then(value => {
        // convert to correct format (object, array, ....);
        const data = {
          hamer: { naam: 'hamer', soort: 'gereedschap' },
          tang: { naam: 'tang', soort: 'gereedschap' },
        };
        this.setState({
          products: data,
          viewCategories: false,
          viewProducts: true,
        });
      });
    });
  }

  render() {
    return (
      <div>
        <h3>producten komen hier</h3>
        <h1>categories</h1>
        {this.state.viewCategories && (
          <Categories
            categories={this.state.categories}
            getProducts={this.getProducts}
          />
        )}
        {this.state.viewProducts && <Temp products={this.state.products} />}
      </div>
    );
  }
}
export default Products;
