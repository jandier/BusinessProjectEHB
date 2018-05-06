import React from 'react';
import PropTypes from 'prop-types';

const Temp = props => {
  const { products } = props;
  return (
    <div>
      {products &&
        Object.keys(products).map(key => {
          const product = products[key];
          return <div key={product}>{product.naam}</div>;
        })}
    </div>
  );
};

Temp.propTypes = {
  products: PropTypes.object.isRequired,
};

export default Temp;
