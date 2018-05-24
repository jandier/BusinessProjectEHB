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

 /* componentDidMount() {
    // const data = getData()
    const body =
     // '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:blz="http://thomas-bayer.com/blz/"><soap:Header/><soap:Body><blz:getBank><blz:blz>66069104</blz:blz></blz:getBank></soap:Body></soap:Envelope>';
     // '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:glob="http://sap.com/xi/SAPGlobal20/Global"><soap:Header/><soap:Body><glob:ProductCategoryHierarchy_SelectionByElements_Sync><ProductCategoryHierarchySelectionByElements><SelectionByDescription><!--Optional:--><InclusionExclusionCode>I</InclusionExclusionCode><IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode><!--Optional:--><LowerBoundaryText>dig*</LowerBoundaryText></SelectionByDescription></ProductCategoryHierarchySelectionByElements><ProcessingConditions><QueryHitsMaximumNumberValue>10</QueryHitsMaximumNumberValue><QueryHitsUnlimitedIndicator>false</QueryHitsUnlimitedIndicator><LastReturnedObjectID/></ProcessingConditions><RequestedElements productCategoryHierarchyTransmissionRequestCode="1"><ProductCategoryHierarchy descriptionTransmissionRequestCode="1" productCategoryTransmissionRequestCode="1"/></RequestedElements></glob:ProductCategoryHierarchy_SelectionByElements_Sync></soap:Body> </soap:Envelope>';
    //fetch('http://www.thomas-bayer.com/axis2/services/BLZService', {
     // fetch('https://my341784.sapbydesign.com/sap/bc/srt/scs/sap/queryproductcategories?sap-vhost=my341784.sapbydesign.com', { 
     fetch('https://sapmobility.astrasweets.com:10444/sap/bc/rest_ordermdata?sap-client=400', { 
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
  } */
  componentDidMount() {
    fetch ('https://sapmobility.astrasweets.com:10444/sap/bc/rest_ordermdata?sap-client=400', {
      body, // must match 'Content-Type' header
      headers: {
        'content-type': 'text/plain',
      },
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
    })
    .then(results => {
      return results.json();
    }).then(data => {
      let materials_new = data.results.map((pic) => {
        return (
          <div key={pic.results}>
          <p> {pic.materials_new.maktx_nl} </p>
          </div>
        )
      })
      this.setState({materials_new: products});
    console.log("state", this.state.getProducts);
    })
  }

  /* fetch('/hello', {
    headers: {
      'authorization': 'Basic ' + btoa('username:password'),
      'content-type': 'text/plain',
    }
  }).then(response => {
    console.log(response);
 });
}*/

  getProducts(value) {
    const body =
      //'<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:blz="http://thomas-bayer.com/blz/"><soap:Header/><soap:Body><blz:getBank><blz:blz>66069104</blz:blz></blz:getBank></soap:Body></soap:Envelope>';
      '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:glob="http://sap.com/xi/SAPGlobal20/Global"><soap:Header/><soap:Body><glob:RegisteredProductQuery><ProcessingConditions><QueryHitsMaximumNumberValue>4</QueryHitsMaximumNumberValue><QueryHitsUnlimitedIndicator>false</QueryHitsUnlimitedIndicator></ProcessingConditions><RegisteredProductSelectByElements><SelectionByProdCategoryID><InclusionExclusionCode>I</InclusionExclusionCode><IntervalBoundaryTypeCode>1</IntervalBoundaryTypeCode><LowerBoundaryIdentifier>0100</LowerBoundaryIdentifier><UpperBoundaryIdentifier></UpperBoundaryIdentifier></SelectionByProdCategoryID></RegisteredProductSelectByElements></glob:RegisteredProductQuery></soap:Body></soap:Envelope>';
    //fetch('http://www.thomas-bayer.com/axis2/services/BLZService', {
      //fetch('https://my341784.sapbydesign.com/sap/bc/srt/scs/sap/queryregisteredproductin1?sap-vhost=my341784.sapbydesign.com', {
     fetch('https://sapmobility.astrasweets.com:10444/sap/bc/rest_ordermdata?sap-client=400', { 
      body, // must match 'Content-Type' header
      headers: {
        'authorization': 'Basic ' + btoa('delaware:delaware01'),
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
