import React from 'react';
import PropTypes from 'prop-types';

const Categories = props => {
  const { categories, getProducts } = props;
  return (
    <div>
      {categories &&
        categories.map(value => (
          <div onClick={() => getProducts(value)} key={value}>
            {value}
          </div>
        ))}
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
  getProducts: PropTypes.func.isRequired,
};

export default Categories;
